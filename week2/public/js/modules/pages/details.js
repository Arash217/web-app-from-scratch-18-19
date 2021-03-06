import DOM from "./DOM.js";

class Details extends DOM {
    constructor() {
        super();

        this.id = '#details-page';
        this.contentId = '#details-page-content';
        this.templateId = '#details-template';

        DOM.registerView(this.id);
    }
}

export default new Details();