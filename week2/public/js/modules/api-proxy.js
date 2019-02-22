import api from './api.js';
import cache from './cache.js';
import utils from './utils.js';

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

        if (cachedCountry != null && cachedCountry.expirationDate && !utils.isExpired(cachedCountry)) {
            return cachedCountry;
        }

        const country = await api.get(code);
        utils.setExpirationDate(country);
        cache.addCountry(country);

        return country;
    })
};

export default apiProxy;