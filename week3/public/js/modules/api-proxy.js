import * as api from './api.js';
import * as cache from './cache.js';
import {errorMiddleware, setExpirationDate, isExpired} from './utils.js';

let countriesCached = false;

export const getAll = errorMiddleware(async () => {
    if (countriesCached) {
        return cache.getCountries();
    }

    const countries = await api.getAll();
    countriesCached = true;
    cache.setCountries(countries);

    return cache.getCountries();
});

export const get = errorMiddleware(async code => {
    const cachedCountry = cache.getCountry(code);

    if (cachedCountry != null && cachedCountry.expirationDate && !isExpired(cachedCountry)) {
        return cachedCountry;
    }

    const country = await api.get(code);
    setExpirationDate(country);
    cache.addCountry(country);

    return country;
});