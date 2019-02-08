(() => {
    'use strict';

    const fetchData = async () => {
        const API_URL = 'https://restcountries.eu/rest/v2/all';
        const response = await fetch(API_URL);
        return await response.json();
    };

    const getCountryNode = ({flag, name}) => {
        const container = document.createElement('div');
        const countryFlag = document.createElement('img');
        const countryName = document.createElement('p');

        container.classList.add('country');
        countryFlag.src = flag;
        countryName.innerText = name;

        container.appendChild(countryFlag);
        container.appendChild(countryName);

        return container;
    };

    const getCountriesNode = (data) => {
        const container = document.createElement('div');
        const countriesNodes = data.map(country => getCountryNode(country));

        container.classList.add('countries');
        countriesNodes.forEach((countryNode) => container.appendChild(countryNode));

        return container;
    };

    const render = async () => {
        const data = await fetchData();
        const main = document.querySelector('main');
        const countriesNode = getCountriesNode(data);
        main.appendChild(countriesNode);
    };

    render();
})();
