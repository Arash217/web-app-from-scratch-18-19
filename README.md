# COUNTRIES OVERVIEW

## Summary

A single page application made with the help of [Director](https://github.com/flatiron/director) en [Handlebars](https://github.com/wycats/handlebars.js/) to show an overview of all countries.

![Overview](../master/images/app.jpg)

## 1. Live demo

[Week 1 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week1)

[Week 2 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week2)

[Week 3 live demo](https://arash217.github.io/web-app-from-scratch-18-19/week3)

### Features

- Overzichtpagina
- Detailpagina
- Landen filteren
- Landen sorteren

### Gebruikte API

URL: https://restcountries.eu/

API Beperkingen staan niet beschreven in de documentatie.

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