import routeHandler from './route-handler.js';

const routes = {
    'home': routeHandler.home,
    'countries/:code': routeHandler.details,
    '*': routeHandler.pageNotFoundError
};

const init = () => {
    Router(routes).init('#home');
};

export default {
    init
};