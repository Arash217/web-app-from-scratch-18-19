import api from './api.js';
import cache from './cache.js';

/* TODO new caching strategy */
/* Used the proxy pattern for caching data */

let cachedCountries = false;

const apiProxy = {
    async getAll() {
        if (cachedCountries){
            return cache.getCountries();
        }

        const countries = await api.getAll();
        cachedCountries = true;
        cache.setCountries(countries);

        return countries;
    },

    async get(code) {
        const cachedCountry = cache.getCountry(code);

        if (cachedCountry !== null && cachedCountry.expireTime > new Date().getTime()){
            return cachedCountry;
        }

        const country = await api.get(code);
        cache.addCountry(country);

        return country;
    }
};

export default apiProxy;