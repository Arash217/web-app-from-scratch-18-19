import home from './views/home.js';
import details from './views/details.js';
import utils from './utils.js';

const pages = {
    home,
    details
};

const initEventListeners = page => {
    if (!page.initialisedListeners && page.eventListeners && page.eventListeners.length > 0){
        const pageElement = utils.getElement(page.id);
        page.eventListeners.forEach(eventListener => eventListener(pageElement));
        page.initialisedListeners = true;
    }
};

const displayPage = id => {
    for (let name in pages) {
        const page = pages[name];
        const element = utils.getElement(page.id);

        if (id !== page.id) {
            element.classList.add('invisible');
            continue;
        }
        element.classList.remove('invisible');
    }
};

const render = (page, data) => {
    displayPage(page.id);
    page.data = {...page.data, ...data};
    utils.renderTemplate(data, page.templateId, page.contentId);
    initEventListeners(page);
};

const DOM = {
    renderHomePage(countries) {
        render(pages.home, {countries});
    },

    renderDetailsPage(country) {
        render(pages.details, {country});
    }
};

export default DOM;