import * as apiProxy from './api-proxy.js';
import DOM from './pages/DOM.js';
import homePage from './pages/home.js';
import detailsPage from './pages/details.js';
import errorPage from './pages/error.js';

export const home = DOM.handlePageRequest(async () => {
    const countries = await apiProxy.getAll();
    homePage.render({countries});
});

export const details = DOM.handlePageRequest(async code => {
    const country = await apiProxy.get(code);
    detailsPage.render({country});
});

export const pageNotFound = () => {
    errorPage.render({errorMessage: 'Page not found'});
};