import DOM from "./DOM.js";

class Error extends DOM {
    constructor() {
        super();

        this.id = '#error-page';
        this.contentId = '#error-page-content';
        this.templateId = '#error-template';

        DOM.registerView(this.id);
    }
}

export default new Error();