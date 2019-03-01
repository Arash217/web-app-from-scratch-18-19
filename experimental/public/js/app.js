import homePage from './modules/pages/home.js';
import detailsPage from './modules/pages/details.js';
import errorPage from './modules/pages/error.js';
import * as router from './modules/router.js';

router.init({
        routes: [
            {
                path: 'countries',
                page: homePage
            },
            {
                path: 'countries/:code',
                page: detailsPage
            },
            {
                path: '*',
                page: errorPage
            }
        ]
    }
);
