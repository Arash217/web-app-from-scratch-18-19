let cachedCountries = [];

const sortCach = () => {
    cachedCountries.sort((countryA, countryB) => countryA.name.localeCompare(countryB.name));
};

const isCountryInCache = country => {
    return cachedCountries.some(cachedCountry => cachedCountry.alpha2Code === country.alpha2Code);
};

export const getCountries = () => {
    return cachedCountries;
};

export const setCountries = countries => {
    if (cachedCountries.length > 0) {
        const filteredCountries = countries.filter(country => !isCountryInCache(country));
        cachedCountries = [...filteredCountries, ...cachedCountries];
        return sortCach();
    }
    cachedCountries = countries;
};

export const getCountry = code => {
    return cachedCountries.length > 0 ? cachedCountries.find(country => country.alpha2Code === code) : null;
};

export const addCountry = country => {
    const index = cachedCountries.findIndex(cachedCountry => cachedCountry.alpha2Code === country.alpha2Code);
    index === -1 ? cachedCountries.push(country) : cachedCountries[index] = country;
};