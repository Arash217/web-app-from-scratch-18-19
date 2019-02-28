# COUNTRIES OVERVIEW

## Summary

A single page application made with the help of 
[Director](https://github.com/flatiron/director) 
and 
[Handlebars](https://github.com/wycats/handlebars.js/) 
to show an overview of all countries.

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

## 5. Wishlist

- [x] Time-based cache
- [x] Error handling

## 6. API

[REST Countries](https://restcountries.eu) is used to fetch countries data as JSON.
The API is used in the overview page to retrieve and display the name, flag and country code of all countries.
Additional data is requested and shown in the detail page.
<br/>
There aren't any restrictions mentioned in the docs of REST Countries.

## 7. Best practices & Design patterns

- ~~Strict mode~~ (not needed with ES6 modules)
- Constants instead of variables
- CamelCase
- Line length under 80
- End statements with semicolon
- Avoid else, return early
- Single quotes for strings

+ ~~IIFE~~ (not needed with ES6 modules)
+ Proxy pattern for time based cache
+ Template method pattern for rendering pages

## 8. Actor diagram
 
<details>
<summary>Week 2</summary>

![Actor diagram](../master/images/actor-diagram-w2.jpg)
</details>

<details>
<summary>Week 3</summary>

![Actor diagram](../master/images/actor-diagram-w3.jpg)
</details>

## 9. Interaction diagram
Note: the numbers are used to display the order of method execution.

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

## Licence
MIT © [Arash Paknezad](https://github.com/Arash217)