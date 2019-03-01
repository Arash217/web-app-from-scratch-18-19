import DOM from './DOM.js';
import {debounce} from '../utils.js';
import * as apiProxy from "../api-proxy.js";

class Home extends DOM {
    constructor() {
        super();

        this.id = '#home-page';
        this.contentId = '#home-page-content';

        DOM.registerPage(this.id);

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

                element.addEventListener('input', debounce(inputEventHandler, 300));
            },

            element => {
                const sortEventHandler = ({target: {id, value}}) => {
                    if (id === 'sort-select') {
                        this.data.sortAscending = value === 'asc';
                        this.filter();
                    }
                };

                element.addEventListener('change', sortEventHandler);
            }
        ]
    }

    template() {
        return `
            <div id="countries">
                {{#each this.countries}}
                <a href="#countries/{{alpha2Code}}">
                    <div class="country">
                        <img src="{{flag}}">
                        <p>{{name}}</p>
                    </div>
                </a>
                {{/each}}
            </div>
        `;
    }

    async shown() {
        try {
            const countries = await apiProxy.getAll();
            this.render({countries});
        } catch (e) {
            console.log(e);
        }
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