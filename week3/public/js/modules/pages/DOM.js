/* Used classes for building and rendering pages because inheritance was needed.
 * Could have used functions for inheritance but classes are cleaner */

class DOM {
    static views = [];

    static registerPage(id) {
        this.views.push(id);
    }

    static displayPage(id) {
        DOM.views.forEach(view => {
            const element = DOM.getElement(view);
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
            const element = DOM.getElement('#loader');
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
            const pageElement = DOM.getElement(this.id);
            this.eventListeners.forEach(eventListener => eventListener(pageElement));
            this.initialisedListeners = true;
        }
    }

    static removeChildren(element){
        while (element.firstChild) {
            element.firstChild.remove();
        }
    }

    static getElement(selector){
        return document.querySelector(selector);
    }

    static renderTemplate(data, templateId, toElement){
        const element = DOM.getElement(toElement);
        const template = DOM.getElement(templateId).innerHTML;
        const compiledTemplate = Handlebars.compile(template);
        DOM.removeChildren(element);
        element.insertAdjacentHTML('beforeend', compiledTemplate(data));
    }

    static displayAndRenderTemplate(data, id, templateId, contentId) {
        DOM.displayPage(id);
        DOM.renderTemplate(data, templateId, contentId);
    }

    render(data) {
        this.data = {...this.data, ...data};
        DOM.displayAndRenderTemplate(this.data, this.id, this.templateId, this.contentId);
        this.initEventListeners();
    }

    renderContent(data) {
        DOM.renderTemplate(data, this.templateId, this.contentId);
    }
}

export default DOM;