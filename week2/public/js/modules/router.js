import requestHandler from './request-handler.js';

const routes = {
    'home': requestHandler.home,
    'countries/:code': requestHandler.details,
    '*': requestHandler.pageNotFoundError
};

const init = () => {
    Router(routes).init('#home');
};

export default {
    init
};