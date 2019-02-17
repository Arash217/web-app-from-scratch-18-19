import utils from './utils.js';

/* TODO generate the API urls */
/* TODO map toepassen */
/* TODO ergens reduce toepassen */

const BASE_API_URL = 'https://restcountries.eu/rest/v2';

const api = {
    getAll: utils.handleFetchErrors(async () => {
        return fetch(`${BASE_API_URL}/all?fields=name;alpha2Code;flag`);
    }),

    get: utils.handleFetchErrors(async code => {
        return fetch(`${BASE_API_URL}/alpha/${code}?fields=name;alpha2Code;flag;capital;region;subregion;latlng;timezones;currencies;languages`);
    })
};

export default api;