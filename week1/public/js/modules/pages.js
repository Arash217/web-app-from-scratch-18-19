import apiProxy from './api-proxy.js';
import DOM from './DOM.js';

const pages = {
    async home() {
        const countries = await apiProxy.getAll();
        DOM.renderHomePage(countries);
    },

    async details(code){
        const country = await apiProxy.get(code);
        DOM.renderDetailsPage(country);
    }
};

export default pages;