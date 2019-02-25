import apiProxy from './api-proxy.js';
import DOM from './pages/DOM.js';
import home from './pages/home.js';
import details from './pages/details.js';
import error from './pages/error.js';

const routerHandler = {
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

export default routerHandler;