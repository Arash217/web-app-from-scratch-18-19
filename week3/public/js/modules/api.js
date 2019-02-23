import utils from './utils.js';

const getAllFields = ['name', 'alpha2Code', 'flag'];
const getFields = [...getAllFields, 'capital', 'region', 'subregion', 'latlng', 'timezones', 'currencies', 'languages'];
const getAllURLParameters = utils.URLParameterBuilder(getAllFields);
const getURLParameters = utils.URLParameterBuilder(getFields);
const BASE_API_URL = 'https://restcountries.eu/rest/v2';

const api = {
    getAll: utils.errorMiddleware(async () => {
        const data = await utils.request(`${BASE_API_URL}/all?fields=${getAllURLParameters}`);
        return utils.extractFromArray(data, getAllFields);
    }),

    get: utils.errorMiddleware(async code => {
        const data = await utils.request(`${BASE_API_URL}/alpha/${code}?fields=${getURLParameters}`);
        return utils.extractFromObject(data, getFields);
    })
};

export default api;