import utils from './utils.js';

const MAIN_ELEMENT = 'main';
const SEARCH_INPUT_ID = 'search-input';
const SORT_BUTTON_ID = 'sort-button';
const HOME_TEMPLATE_ID = '#homeTemplate';
const DETAILS_TEMPLATE_ID = '#detailsTemplate';

let _countries = [];
let searchString = '';
let sortAscending = true;

const getMainElement = () => {
    return utils.getElement(MAIN_ELEMENT);
};

const getSearchInput = () => {
    return utils.getElement(`#${SEARCH_INPUT_ID}`);
};

const findCountries = (countries, string) => {
    return countries.filter(country => country.name.toLowerCase().includes(string.toLowerCase()));
};

const sortCountries = (countries, sortAscending) => {
    return sortAscending ? countries : [...countries].reverse();
};

const renderCountries = countries => {
    utils.renderTemplate(countries, HOME_TEMPLATE_ID, MAIN_ELEMENT);
    const newSearchInput = getSearchInput();
    newSearchInput.value = searchString;
};

const filter = () => {
    const foundCountries = findCountries(_countries, searchString);
    const filteredCountries = sortCountries(foundCountries, sortAscending);
    renderCountries(filteredCountries);
};

const addSearchInputEventListener = element => {
    const inputEventHandler = ({target: {id}}) => {
        if (id === SEARCH_INPUT_ID) {
            const {value} = getSearchInput();
            searchString = value;
            filter();
            getSearchInput().focus();
        }
    };

    element.addEventListener('input', utils.debounce(inputEventHandler, 300));
};

const addSortButtonEventListener = element => {
    const clickEventHandler = ({target: {id}}) => {
        if (id === SORT_BUTTON_ID) {
            sortAscending = !sortAscending;
            filter();
        }
    };

    element.addEventListener('click', clickEventHandler);
};

const initEventListeners = () => {
    const main = getMainElement();
    addSearchInputEventListener(main);
    addSortButtonEventListener(main);
};

const DOM = {
    renderHomePage(countries) {
        utils.renderTemplate(countries, HOME_TEMPLATE_ID, MAIN_ELEMENT);
        _countries = countries;
        initEventListeners();
    },

    renderDetailsPage(country) {
        utils.renderTemplate(country, DETAILS_TEMPLATE_ID, MAIN_ELEMENT);
    }
};

export default DOM;