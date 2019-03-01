const createDirectorRoutes = routes => {
    const directorRoutes = {};
    routes.forEach(route => (directorRoutes[route.path] = route.page.shown.bind(route.page)));
    return directorRoutes;
};

export const init = routes => {
    const directorRoutes = createDirectorRoutes(routes.routes);
    Router(directorRoutes).init(routes.routes[0].path);
};