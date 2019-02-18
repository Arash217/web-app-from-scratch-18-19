import DOM from './DOM.js';
import utils from "../utils.js";

class Home extends DOM {
    constructor() {
        super();

        this.id = '#home-page';
        this.contentId = '#home-page-content';
        this.templateId = '#home-template';

        DOM.registerView(this.id);

        this.data = {
            searchString: '',
            sortAscending: true
        };

        this.eventListeners = [
            element => {
                const inputEventHandler = ({target: {id, value}}) => {
                    if (id === 'search-input') {
                        this.data.searchString = value;
                        this.filter();
                    }
                };

                element.addEventListener('input', utils.debounce(inputEventHandler, 300));
            },

            element => {
                const clickEventHandler = ({target: {id}}) => {
                    if (id === 'sort-button') {
                        this.data.sortAscending = !this.data.sortAscending;
                        this.filter();
                    }
                };

                element.addEventListener('click', clickEventHandler);
            }
        ]
    }

    findCountries(countries, string) {
        return countries.filter(country => country.name.toLowerCase().includes(string.toLowerCase()));
    }

    sortCountries(countries, sortAscending) {
        return countries.sort((countryA, countryB) => {
            if (sortAscending) [countryA, countryB] = [countryB, countryA];
            return countryB.name.localeCompare(countryA.name);
        })
    }

    filter() {
        const foundCountries = this.findCountries(this.data.countries, this.data.searchString);
        const sortedCountries = this.sortCountries(foundCountries, this.data.sortAscending);
        this.renderContent({countries: sortedCountries});
    }
}


export default new Home();