import apiProxy from './api-proxy.js';
// import DOM from './DOM.js';

import home from './views/home.js';

const pagess = [
    home
];

import utils from "./utils.js";

const displayPage = id => {
    for (let name in pagess) {
        const page = pagess[name];
        const element = utils.getElement(page.id);

        if (id !== page.id) {
            element.classList.add('invisible');
            continue;
        }
        element.classList.remove('invisible');
    }
};

const pages = {
    async home() {
        const countries = await apiProxy.getAll();
      //  DOM.renderHomePage(countries);
        displayPage(home.id);
        home.render({countries});
    },

    async details(code) {
        const country = await apiProxy.get(code);
       // DOM.renderDetailsPage(country);
    }
};

export default pages;