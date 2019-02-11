const renderToDOM = (data, elementId) => {
    const main = document.querySelector('main');
    const template = document.getElementById(elementId).innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    main.innerHTML = compiledTemplate(data);
};

const renderHomePage = countries => renderToDOM(countries, 'homeTemplate');
const renderDetailsPage = country => renderToDOM(country, 'detailsTemplate');

export default {
    renderHomePage,
    renderDetailsPage
};