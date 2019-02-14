let cachedCountries = [];

const cache = {
    getCountries() {
        return cachedCountries;
    },

    setCountries(countries) {
        cachedCountries = countries;
    },

    getCountry(code) {
        return cachedCountries.length > 0 ? cachedCountries.find(country => country.alpha2Code === code) : null;
    }
};

export default cache;