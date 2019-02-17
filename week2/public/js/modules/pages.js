import apiProxy from './api-proxy.js';
import DOM from './views/DOM.js';
import home from './views/home.js';
import details from './views/details.js';
import pageNotFoundError from './views/page-not-found-error.js';
import './views/item-not-found-error.js';

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
        pageNotFoundError.renderStatic();
    }
};

export default pages;