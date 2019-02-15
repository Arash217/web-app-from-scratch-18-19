import api from './api.js';
import cache from './cache.js';
import utils from './utils.js';

/* Used the proxy pattern for caching data */

let countriesCached = false;

const apiProxy = {
    async getAll() {
        if (countriesCached){
            return cache.getCountries();
        }

        const countries = await api.getAll();
        countriesCached = true;
        cache.setCountries(countries);

        return cache.getCountries();
    },

    async get(code) {
        const cachedCountry = cache.getCountry(code);

        if (cachedCountry !== null && cachedCountry.expirationDate && !utils.isExpired(cachedCountry.expirationDate)){
            return cachedCountry;
        }

        const country = await api.get(code);
        cache.addCountry(country);

        return country;
    }
};

export default apiProxy;