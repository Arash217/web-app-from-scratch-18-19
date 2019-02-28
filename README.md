# COUNTRIES OVERVIEW

## Summary

A single page application made with the help of [Director](https://github.com/flatiron/director) en [Handlebars](https://github.com/wycats/handlebars.js/) to show an overview of all countries.

![Overview](../master/images/app.png)

<!--
inhoudsopgave
 -->

## 1. Live demo

[Week 1 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week1)

[Week 2 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week2)

[Week 3 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week3)

## 2. Usage

Fork and/or clone it. Serve the app from a webserver.
```bash
git clone https://github.com/Arash217/web-app-from-scratch-18-19
```

## 3. Restrictions

- The app is made with ES6+ features without transpiling to ES5, and thus isn't production ready. 
- [Currently (28-2-2019) only working on Google Chrome 72+, because of the use of static class fields.](https://kangax.github.io/compat-table/esnext/)

## 4. Features

- Countries overview 
- Country details
- Filter countries
- Sort countries

## 5. API

[REST Countries](https://restcountries.eu) API is used to fetch countries data.

API restrictions are not mentioned in their docs.

<!--

### Interaction diagram

TODO

 -->

### Gebruikte design patterns en best practices

- ~~Strict mode~~ (niet nodig met ES6 modules)
- ~~IIFE~~ (niet nodig met ES6 modules)
- Constanten gebruiken om onbedoelde overschrijvingen te voorkomen
- CamelCase
- Constanten en variabelen bovenaan definiëren
- Avoid Else, Return Early
- Proxy pattern voor caching

### Wishlist

- [x] Caching
- [x] Error handling

### Actor diagram
 
<details>
<summary>Week 2</summary>

![Actor diagram](../master/images/actor-diagram-w2.jpg)
</details>

<details>
<summary>Week 3</summary>

![Actor diagram](../master/images/actor-diagram-w3.jpg)
</details>

### Interaction diagram

<details>
<summary>Home</summary>

![Actor diagram](../master/images/home-interaction.jpg)
</details>

<details>
<summary>Details</summary>

![Actor diagram](../master/images/details-interaction.jpg)
</details>

<details>
<summary>Search and sort</summary>

![Actor diagram](../master/images/search-and-sort-interaction.jpg)
</details>