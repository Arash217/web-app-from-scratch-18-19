import DOM from "./DOM.js";

class PageNotFoundError extends DOM {
    constructor() {
        super();

        this.id = '#error-page';
        DOM.registerView(this.id);
    }
}

export default new PageNotFoundError();