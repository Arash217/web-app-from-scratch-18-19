import utils from "../utils.js";

class DOM {
    initEventListeners() {
        if (!this.initialisedListeners && this.eventListeners && this.eventListeners.length > 0){
            const pageElement = utils.getElement(this.id);
            this.eventListeners.forEach(eventListener => eventListener(pageElement));
            this.initialisedListeners = true;
        }
    }

    render(data) {
        this.data = {...this.data, ...data};
        utils.renderTemplate(this.data, this.templateId, this.contentId);
        this.initEventListeners();
    }

    renderContent(data){
        utils.renderTemplate(data, this.templateId, this.contentId);
    }
}

export default DOM;