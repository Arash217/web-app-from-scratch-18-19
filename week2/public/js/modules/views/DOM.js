import utils from "../utils.js";

/* TODO id's vervangen door classes, en important weghalen uit css */
/* TODO error pages samenvoegen, vervolgens met data en template renderen */
/* TODO 400 error afhandelen */

class DOM {

    static views = [];

    static registerView(view) {
        this.views.push(view);
    }

    static displayPage = id => {
        DOM.views.forEach(view => {
            const element = utils.getElement(view);
            id === view ? element.classList.remove('invisible') : element.classList.add('invisible');
        });
    };

    static handleError(error) {
        if (error.status === 404) {
            this.displayPage('#item-error-page');
        }
    }

    static handlePageRequest(fn) {
        return async (...args) => {
            const element = utils.getElement('#loader');
            try {
                element.classList.add('loading');
                await fn(...args);
            } catch (e) {
                this.handleError(e);
            } finally {
                element.classList.remove('loading');
            }
        }
    }

    initEventListeners() {
        if (!this.initialisedListeners && this.eventListeners && this.eventListeners.length > 0) {
            const pageElement = utils.getElement(this.id);
            this.eventListeners.forEach(eventListener => eventListener(pageElement));
            this.initialisedListeners = true;
        }
    }

    render(data) {
        DOM.displayPage(this.id);
        this.data = {...this.data, ...data};
        utils.renderTemplate(this.data, this.templateId, this.contentId);
        this.initEventListeners();
    }

    renderContent(data) {
        utils.renderTemplate(data, this.templateId, this.contentId);
    }

    renderStatic() {
        DOM.displayPage(this.id);
    }
}

export default DOM;