import utils from "../utils.js";

const home = {
    id: '#home-page',
    contentId: '#home-page-content',
    templateId: '#homeTemplate',

    data: {
        searchString: '',
        sortAscending: true
    },

    findCountries(countries, string) {
        return countries.filter(country => country.name.toLowerCase().includes(string.toLowerCase()));
    },

    sortCountries(countries, sortAscending) {
        return countries.sort((countryA, countryB) => {
            if (sortAscending) [countryA, countryB] = [countryB, countryA];
            return countryB.name.localeCompare(countryA.name);
        })
    },

    filter() {
        const foundCountries = this.findCountries(this.data.countries, this.data.searchString);
        const sortedCountries = this.sortCountries(foundCountries, this.data.sortAscending);
        utils.renderTemplate({countries: sortedCountries}, this.templateId, this.contentId);
    },

    eventListeners: [
        element => {
            const inputEventHandler = ({target: {id, value}}) => {
                if (id === 'search-input') {
                    home.data.searchString = value;
                    home.filter();
                }
            };

            element.addEventListener('input', utils.debounce(inputEventHandler, 300));
        },

        element => {
            const clickEventHandler = ({target: {id}}) => {
                if (id === 'sort-button') {
                    home.data.sortAscending = !home.data.sortAscending;
                    home.filter();
                }
            };

            element.addEventListener('click', clickEventHandler);
        }
    ]
};

export default home;