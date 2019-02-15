import api from './api.js';
import cache from './cache.js';

/* TODO new caching strategy */
/* Used the proxy pattern for caching data */

const apiProxy = {
    async getAll() {
        const cachedCountries = cache.getCountries();

        if (cachedCountries.length > 0) {
            return cachedCountries;
        }

        const countries = await api.getAll();
        cache.setCountries(countries);

        return countries;
    },

    async get(code) {
        const country = cache.getCountry(code);

        if (country !== null) {
            return country;
        }

        return api.get(code);
    }
};

export default apiProxy;