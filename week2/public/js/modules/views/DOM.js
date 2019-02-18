import utils from "../utils.js";

/* TODO id's vervangen door classes, en important weghalen uit css */
/* TODO ternary naar if met early return? */

class DOM {

    static views = [];

    static registerView(view) {
        this.views.push(view);
    }

    static displayPage(id) {
        DOM.views.forEach(view => {
            const element = utils.getElement(view);
            id === view ? element.classList.remove('invisible') : element.classList.add('invisible');
        });
    };

    static handleError(error) {
        let errorMessage = '';

        switch (error.status) {
            case 400:
            case 404:
                errorMessage = 'Requested country not found';
                break;
            default:
                errorMessage = 'Something went wrong, please try again later'
        }

        DOM.displayAndRenderTemplate(
            {errorMessage},
            '#error-page',
            '#error-template',
            '#error-page-content'
        )
    }

    static handlePageRequest(fn) {
        return async (...args) => {
            const element = utils.getElement('#loader');
            try {
                element.classList.add('spinner');
                await fn(...args);
            } catch (e) {
                this.handleError(e);
            } finally {
                element.classList.remove('spinner');
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

    static displayAndRenderTemplate(data, id, templateId, contentId) {
        DOM.displayPage(id);
        utils.renderTemplate(data, templateId, contentId);
    }

    render(data) {
        this.data = {...this.data, ...data};
        DOM.displayAndRenderTemplate(this.data, this.id, this.templateId, this.contentId);
        this.initEventListeners();
    }

    renderContent(data) {
        utils.renderTemplate(data, this.templateId, this.contentId);
    }
}

export default DOM;