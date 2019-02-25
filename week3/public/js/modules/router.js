import * as routeHandler from './route-handler.js';

const routes = {
    'home': routeHandler.home,
    'countries/:code': routeHandler.details,
    '*': routeHandler.pageNotFoundError
};

export const init = () => {
    Router(routes).init('#home');
};