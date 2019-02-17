import DOM from "./DOM.js";

class ItemNotFoundError extends DOM {
    constructor() {
        super();

        this.id = '#item-error-page';
        DOM.registerView(this.id);
    }
}

export default new ItemNotFoundError();