import utils from './utils.js';

const MAIN_ELEMENT = 'main';
const SEARCH_INPUT_ID = 'search-input';
const HOME_TEMPLATE_ID = '#homeTemplate';
const DETAILS_TEMPLATE_ID = '#detailsTemplate';

const getMainElement = () => {
    return utils.getElement(MAIN_ELEMENT);
};

const getSearchInput = () => {
    return utils.getElement(`#${SEARCH_INPUT_ID}`);
};

const filterCountries = (countries, countryName) => {
    return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()));
};

const handleSearch = countries => {
    const main = getMainElement();

    const inputEventHandler = ({target: {id}}) => {
        if (id === SEARCH_INPUT_ID) {
            const {value: inputValue} = getSearchInput();
            const foundCountries = filterCountries(countries, inputValue);

            utils.renderTemplate(foundCountries, HOME_TEMPLATE_ID, MAIN_ELEMENT);

            const newSearchInput = getSearchInput();
            newSearchInput.value = inputValue;
            newSearchInput.focus();
        }
    };

    main.addEventListener('input', utils.debounce(inputEventHandler, 300));
};

const DOM = {
    renderHomePage(countries) {
        utils.renderTemplate(countries, HOME_TEMPLATE_ID, MAIN_ELEMENT);
        handleSearch(countries);
    },

    renderDetailsPage(country){
        utils.renderTemplate(country, DETAILS_TEMPLATE_ID, MAIN_ELEMENT);
    }
};

export default DOM;