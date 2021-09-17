import { Route } from "./Route";
// ================================================================================ //
export class Router {
    // ---------------------------------------------------------------------------- //
    constructor(routes) {
        this.routes = routes.map(route => {
            return new Route(this, route);
        });
        for (let index = 0; index < this.routes.length; index++) {
            this.routes[index].id = index;
        }
    }
    // ---------------------------------------------------------------------------- //
    findRouteByPath(path) {
        return;
    }
    findRouteById(id) {
        return;
    }
    findRoutesById(ids) {
        return;
    }
    // ---------------------------------------------------------------------------- //
    navigate(path) {
    }
}
//# sourceMappingURL=Router.js.map