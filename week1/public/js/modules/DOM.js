import utils from './utils.js';

const MAIN_ELEMENT = 'main';
const SEARCH_INPUT_ID = 'search-input';

const getSearchInput = () => {
    return document.querySelector(`#${SEARCH_INPUT_ID}`);
};

const getMainElement = () => {
    return document.querySelector(MAIN_ELEMENT);
};

const renderToDOM = (data, elementId) => {
    const main = getMainElement();
    const template = document.querySelector(elementId).innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    main.innerHTML = compiledTemplate(data);
};

const filterCountries = (countries, countryName) => {
    return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()));
};

const handleSearch = (countries) => {
    const main = getMainElement();

    const inputEventHandler = ({target: {id}}) => {
        if (id === SEARCH_INPUT_ID) {
            const {value: searchInputValue} = getSearchInput();
            const foundCountries = filterCountries(countries, searchInputValue);

            renderToDOM(foundCountries, '#homeTemplate');

            const newSearchInput = getSearchInput();
            newSearchInput.value = searchInputValue;
            newSearchInput.focus();
        }
    };

    main.addEventListener('input', utils.debounce(inputEventHandler, 300));
};

const renderHomePage = countries => {
    renderToDOM(countries, '#homeTemplate');
    handleSearch(countries);
};

const renderDetailsPage = country => renderToDOM(country, '#detailsTemplate');

export default {
    renderHomePage,
    renderDetailsPage
};