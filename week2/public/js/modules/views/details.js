import DOM from "./DOM.js";

class Details extends DOM {
    constructor() {
        super();

        this.id = '#details-page';
        DOM.registerView(this.id);

        this.contentId = '#details-page-content';
        this.templateId = '#detailsTemplate';
    }
}

export default new Details();