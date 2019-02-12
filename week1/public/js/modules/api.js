import data from './data.js';

const BASE_API_URL = 'https://restcountries.eu/rest/v2';

const getAll = async () => {
    const response = await fetch(`${BASE_API_URL}/all?fields=name;alpha2Code;flag`);
    return response.json();
};

const get = async (code) => {
    const response = await fetch(`${BASE_API_URL}/alpha/${code}?fields=name;flag`);
    return response.json();
};

const apiProxy = {
    async getAll() {
        const countries = data.getCountries();

        if (countries.length > 0) {
            return data.getCountries();
        }

        const res = await getAll();
        data.setCountries(res);

        return res;
    },

    async get(code) {
        const country = data.getCountry(code);

        if (country !== null) {
            return country;
        }

        return await get(code);
    }
};

export default apiProxy;