(() => {
    'use strict';

    const API_URL = 'https://restcountries.eu/rest/v2/all';

    const fetchData = async () => {
        const response = await fetch(API_URL);
        return await response.json();
    };

    const createCountryNode = (country) => {
        const container = document.createElement('div');
        const countryFlag = document.createElement('img');
        const countryName = document.createElement('p');

        container.className = 'country';
        countryFlag.src = country.flag;
        countryName.innerText = country.name;

        container.appendChild(countryFlag);
        container.appendChild(countryName);

        return container;
    };

    const render = async () => {
        const data = await fetchData();
        const main = document.querySelector('main');
        data.forEach(country => {
            main.appendChild(createCountryNode(country));
        });
    };

    render();
})();
