import utils from './utils.js';

/* TODO map toepassen */

const getAllRequiredFields = ['name', 'alpha2Code', 'flag'];
const getRequiredFields = [
    ...getAllRequiredFields,
    'capital', 'region', 'subregion', 'latlng', 'timezones', 'currencies', 'languages'
];

const BASE_API_URL = 'https://restcountries.eu/rest/v2';
const getAllURLParameters = utils.URLParametersBuilder(getAllRequiredFields);
const getURLParameters = utils.URLParametersBuilder(getRequiredFields);

console.log(getAllURLParameters);
console.log(getURLParameters);

const api = {
    getAll: utils.handleFetchErrors(() => {
        return fetch(`${BASE_API_URL}/all?fields=${getAllURLParameters}`);
    }),

    get: utils.handleFetchErrors(code => {
        return fetch(`${BASE_API_URL}/alpha/${code}?fields=${getURLParameters}`);
    })
};

export default api;