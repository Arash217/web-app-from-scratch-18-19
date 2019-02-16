import apiProxy from './api-proxy.js';
import DOM from './views/DOM.js';
import home from './views/home.js';
import details from './views/details.js';

const pages = {
    home: DOM.handleLoading(async () => {
        const countries = await apiProxy.getAll();
        home.render({countries});
    }),

    details: DOM.handleLoading(async (code) => {
        const country = await apiProxy.get(code);
        details.render({country});
    })
};

export default pages;