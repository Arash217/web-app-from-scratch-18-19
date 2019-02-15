const BASE_API_URL = 'https://restcountries.eu/rest/v2';

/* TODO generate the API urls */
/* TODO map toepassen */
/* TODO ergens reduce toepassen */

const addExpirationDate = country => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    country.expirationDate = now.getTime();
    return country;
};

const api = {
    async getAll() {
        const response = await fetch(`${BASE_API_URL}/all?fields=name;alpha2Code;flag`);
        return response.json();
    },

    async get(code) {
        const response = await fetch(`${BASE_API_URL}/alpha/${code}?fields=name;alpha2Code;flag;capital;region;subregion;latlng;timezones;currencies;languages`);
        const country = await response.json();
        return addExpirationDate(country);
    }
};

export default api;