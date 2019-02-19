import apiProxy from './api-proxy.js';
import DOM from './views/DOM.js';
import home from './views/home.js';
import details from './views/details.js';
import error from './views/error.js';

const pages = {
    home: DOM.handlePageRequest(async () => {
        const countries = await apiProxy.getAll();
        home.render({countries});
    }),

    details: DOM.handlePageRequest(async code => {
        const country = await apiProxy.get(code);
        details.render({country});
    }),

    pageNotFoundError() {
        error.render({errorMessage: 'Page not found'});
    }
};

export default pages;