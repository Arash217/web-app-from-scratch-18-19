import utils from './utils.js';

const getAllRequiredFields = ['name', 'alpha2Code', 'flag'];
const getRequiredFields = [
    ...getAllRequiredFields, 'capital', 'region', 'subregion', 'latlng', 'timezones', 'currencies', 'languages'
];
const getAllURLParameters = utils.URLParameterBuilder(getAllRequiredFields);
const getURLParameters = utils.URLParameterBuilder(getRequiredFields);
const BASE_API_URL = 'https://restcountries.eu/rest/v2';

const api = {
    getAll: utils.errorMiddleware(async () => {
        const data = await utils.fetchRequest(`${BASE_API_URL}/all?fields=${getAllURLParameters}`);
        return utils.extractFromArray(data, getAllRequiredFields);
    }),

    get: utils.errorMiddleware(async code => {
        const data = await utils.fetchRequest(`${BASE_API_URL}/alpha/${code}?fields=${getURLParameters}`);
        return utils.extractFromObject(data, getRequiredFields);
    })
};

export default api;