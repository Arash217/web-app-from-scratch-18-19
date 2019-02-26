import {URLParameterBuilder, errorMiddleware, request, extractFromArray, extractFromObject} from './utils.js';

const getAllFields = ['name', 'alpha2Code', 'flag'];
const getFields = [...getAllFields, 'capital', 'region', 'subregion', 'latlng', 'timezones', 'currencies', 'languages'];
const getAllURLParameters = URLParameterBuilder(getAllFields);
const getURLParameters = URLParameterBuilder(getFields);
const baseApiURL = 'https://restcountries.eu/rest/v2';

export const getAll = errorMiddleware(async () => {
    const data = await request(`${baseApiURL}/all?fields=${getAllURLParameters}`);
    return extractFromArray(data, getAllFields);
});

export const get = errorMiddleware(async code => {
    const data = await request(`${baseApiURL}/alpha/${code}?fields=${getURLParameters}`);
    return extractFromObject(data, getFields);
});