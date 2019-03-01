import DOM from './DOM.js';

class Error extends DOM {
    constructor() {
        super();

        this.id = '#error-page';
        this.contentId = '#error-page-content';

        DOM.registerPage(this.id)
    }

    template() {
        return `
            <span class="error-message">{{this.errorMessage}}</span>
            <a class="error-url" href="#countries">Back to home</a>
        `;
    }

    shown() {
        this.render({errorMessage: 'Page not found'});
    }
}

export default new Error();