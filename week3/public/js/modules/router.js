import * as routeHandler from './route-handler.js';

const routes = {
    'home': routeHandler.home,
    'countries/:code': routeHandler.details,
    '*': routeHandler.pageNotFound
};

export const init = () => {
    Router(routes).init('#home');
};