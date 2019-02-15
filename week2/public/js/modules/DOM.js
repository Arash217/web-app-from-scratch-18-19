import utils from './utils.js';

const pages = {
    home: {
        id: '#home-page',
        contentId: '#home-page-content',
        templateId: '#homeTemplate'
    },

    details: {
        id: '#details-page',
        contentId: '#details-page-content',
        templateId: '#detailsTemplate'
    }
};

let _countries = [];
let searchString = '';
let sortAscending = true;
let initialisedListeners = false;

const findCountries = (countries, string) => {
    return countries.filter(country => country.name.toLowerCase().includes(string.toLowerCase()));
};

const sortCountries = countries => {
    return countries.sort((countryA, countryB) => {
        if (sortAscending){
            return countryA.name.localeCompare(countryB.name);
        }
        return countryB.name.localeCompare(countryA.name);
    })
};

const renderCountries = countries => {
    utils.renderTemplate(countries, pages.home.templateId, pages.home.contentId);
};

const filter = () => {
    const foundCountries = findCountries(_countries, searchString);
    const sortedCountries = sortCountries(foundCountries);
    renderCountries(sortedCountries);
};

const addSearchInputEventListener = element => {
    const inputEventHandler = ({target: {id, value}}) => {
        if (id === 'search-input') {
            searchString = value;
            filter();
        }
    };

    element.addEventListener('input', utils.debounce(inputEventHandler, 300));
};

const addSortButtonEventListener = element => {
    const clickEventHandler = ({target: {id}}) => {
        if (id === 'sort-button') {
            sortAscending = !sortAscending;
            filter();
        }
    };

    element.addEventListener('click', clickEventHandler);
};

const initEventListeners = element => {
    addSearchInputEventListener(element);
    addSortButtonEventListener(element);
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

const DOM = {
    renderHomePage(countries) {
        displayPage(pages.home.id);
        _countries = sortCountries(countries);
        utils.renderTemplate(_countries, pages.home.templateId, pages.home.contentId);

        if (!initialisedListeners){
            initEventListeners(utils.getElement(pages.home.id));
            initialisedListeners = true;
        }
    },

    renderDetailsPage(country) {
        displayPage(pages.details.id);
        utils.renderTemplate(country, pages.details.templateId, pages.details.contentId);
    }
};

export default DOM;