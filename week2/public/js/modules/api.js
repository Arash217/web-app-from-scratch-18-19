const BASE_API_URL = 'https://restcountries.eu/rest/v2';

/* TODO generate the API urls */

const api = {
    async getAll() {
        const response = await fetch(`${BASE_API_URL}/all?fields=name;alpha2Code;flag;capital;region;subregion;latlng;timezones;currencies;languages`);
        return response.json();
    },

    async get(code) {
        const response = await fetch(`${BASE_API_URL}/alpha/${code}?fields=name;flag;capital;region;subregion;latlng;timezones;currencies;languages`);
        return response.json();
    }
};

export default api;