import api from './api.js';
import data from './data.js';

const apiProxy = {
    async getAll() {
        const countries = data.getCountries();

        if (countries.length > 0) {
            return data.getCountries();
        }

        const res = await api.getAll();
        data.setCountries(res);

        return res;
    },

    async get(code) {
        const country = data.getCountry(code);

        if (country !== null) {
            return country;
        }

        return await api.get(code);
    }
};

export default apiProxy;