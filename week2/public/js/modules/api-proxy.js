import api from './api.js';
import cache from './cache.js';
import utils from './utils.js';

/* Used the proxy pattern for caching data */

const addExpirationDate = country => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    country.expirationDate = now.getTime();
};

let countriesCached = false;

const apiProxy = {
    getAll: utils.handleRequestErrors(async () => {
        if (countriesCached) {
            return cache.getCountries();
        }

        const countries = await api.getAll();
        countriesCached = true;
        cache.setCountries(countries);

        return cache.getCountries();
    }),

    get: utils.handleRequestErrors(async code => {
        const cachedCountry = cache.getCountry(code);

        if (cachedCountry != null && cachedCountry.expirationDate && !utils.isExpired(cachedCountry.expirationDate)) {
            return cachedCountry;
        }

        const country = await api.get(code);
        addExpirationDate(country);
        cache.addCountry(country);

        return country;
    })
};

export default apiProxy;