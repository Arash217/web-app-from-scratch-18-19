import api from './api.js';
import DOM from './DOM.js';

const home = async () => {
    const countries = await api.getAll();
    DOM.renderHomePage(countries);
};

const details = async (code) => {
    const country = await api.get(code);
    DOM.renderDetailsPage(country);
};

export default {
    home,
    details
}