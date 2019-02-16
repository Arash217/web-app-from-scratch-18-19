import utils from "./utils.js";
import apiProxy from './api-proxy.js';
import home from './views/home.js';
import details from './views/details.js';

const views = [
    home,
    details
];

const displayPage = id => {
    for (let name in views) {
        const page = views[name];
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
        displayPage(home.id);
        home.render({countries});
    },

    async details(code) {
        const country = await apiProxy.get(code);
        displayPage(details.id);
        details.render({country});
    }
};

export default pages;