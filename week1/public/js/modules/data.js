let _countries = [];

const data = {
    getCountries() {
        return _countries;
    },

    setCountries(countries) {
        _countries = countries;
    },

    getCountry(code) {
        return _countries.length > 0 ? _countries.find(country => country.alpha2Code === code) : null;
    }
};

export default data;