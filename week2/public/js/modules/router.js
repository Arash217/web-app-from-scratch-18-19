import pages from './pages.js';

const routes = {
    'home': pages.home,
    'countries/:code': pages.details
};

const init = () => {
    Router(routes).init('#home');
};

export default {
    init
};