import utils from './utils.js';

const MAIN_ELEMENT = 'main';
const SEARCH_INPUT_ID = 'search-input';
const SORT_BUTTON_ID = 'sort-button';
const HOME_TEMPLATE_ID = '#homeTemplate';
const DETAILS_TEMPLATE_ID = '#detailsTemplate';

let _countries = [];
let userSearch = '';
let sortAscending = true;

const getMainElement = () => {
    return utils.getElement(MAIN_ELEMENT);
};

const getSearchInput = () => {
    return utils.getElement(`#${SEARCH_INPUT_ID}`);
};

const filterCountries = (countries, countryName) => {
    return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()));
};

const sortCountries = (countries, sortAscending) => {
    return countries.sort((country1, country2) => {
        if (sortAscending){
            return country1.name.localeCompare(country2.name)
        }
       return country2.name.localeCompare(country1.name)
    })
};

const renderToDOM = () => {
    const foundCountries = filterCountries(_countries, userSearch);
    const filteredCountries = sortCountries(foundCountries, sortAscending);
    utils.renderTemplate(filteredCountries, HOME_TEMPLATE_ID, MAIN_ELEMENT);

    const newSearchInput = getSearchInput();
    newSearchInput.value = userSearch;
};

const addSearchInputEventListener = () => {
    const main = getMainElement();

    const inputEventHandler = ({target: {id}}) => {
        if (id === SEARCH_INPUT_ID) {
            const {value: inputValue} = getSearchInput();

            userSearch = inputValue;

            renderToDOM();

            const newSearchInput = getSearchInput();
            newSearchInput.focus();
        }
    };

    main.addEventListener('input', utils.debounce(inputEventHandler, 300));
};

const addSortButtonEventListener = () => {
    const main = getMainElement();

    const clickEventHandler = ({target: {id}}) => {
        if (id === SORT_BUTTON_ID) {
            sortAscending =! sortAscending;
            renderToDOM();
        }
    };

    main.addEventListener('click', clickEventHandler);
};

const initEventListeners = () => {
    addSearchInputEventListener();
    addSortButtonEventListener();
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