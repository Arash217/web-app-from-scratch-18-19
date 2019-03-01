import * as router from './modules/router.js';
import home from './modules/pages/home.js';
import details from './modules/pages/details.js';
import error from './modules/pages/error.js';

router.init({
        routes: [
            {
                path: 'countries',
                page: home
            },
            {
                path: 'countries/:code',
                page: details
            },
            {
                path: '*',
                page: error
            }
        ]
    }
);
