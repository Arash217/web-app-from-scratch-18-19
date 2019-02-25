import routerHandler from './router-handler.js';

const routes = {
    'home': routerHandler.home,
    'countries/:code': routerHandler.details,
    '*': routerHandler.pageNotFoundError
};

const init = () => {
    Router(routes).init('#home');
};

export default {
    init
};