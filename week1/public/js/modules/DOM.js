const renderToDOM = (data, elementId) => {
    const main = document.querySelector('main');
    const template = document.querySelector(elementId).innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    main.innerHTML = compiledTemplate(data);
};

const getSearchInput = () => {
    return document.querySelector('#search-input');
};

const filterCountries = (countries, countryName) => {
    return countries.filter(country => country.name.toLowerCase().includes(countryName.toLowerCase()));
};

const handleForm = (countries) => {
    const main = document.querySelector('main');

    main.addEventListener('click', ({target: {id}}) => {
        if (id === 'search') {
            const {value: searchInputValue} = getSearchInput();
            const foundCountries = filterCountries(countries, searchInputValue);

            renderToDOM(foundCountries, '#homeTemplate');

            const newSearchInput = getSearchInput();
            newSearchInput.value = searchInputValue;
        }
    });
};

const renderHomePage = countries => {
    renderToDOM(countries, '#homeTemplate');
    handleForm(countries);
};

const renderDetailsPage = country => renderToDOM(country, '#detailsTemplate');

export default {
    renderHomePage,
    renderDetailsPage
};