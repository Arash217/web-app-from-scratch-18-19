let cachedCountries = [];

const cache = {
    sortCach() {
        cachedCountries.sort((countryA, countryB) => countryA.name.localeCompare(countryB.name));
    },

    isCountryInCache(country) {
        return cachedCountries.some(cachedCountry => cachedCountry.alpha2Code === country.alpha2Code);
    },

    getCountries() {
        return cachedCountries;
    },

    setCountries(countries) {
        if (cachedCountries.length > 0) {
            const filteredCountries = countries.filter(country => !this.isCountryInCache(country));
            cachedCountries = [...filteredCountries, ...cachedCountries];
            return this.sortCach();
        }
        cachedCountries = countries;
    },

    getCountry(code) {
        return cachedCountries.length > 0 ? cachedCountries.find(country => country.alpha2Code === code) : null;
    },

    addCountry(country) {
        const index = cachedCountries.findIndex(cachedCountry => cachedCountry.alpha2Code === country.alpha2Code);
        index === -1 ? cachedCountries.push(country) : cachedCountries[index] = country;
    }
};

export default cache;