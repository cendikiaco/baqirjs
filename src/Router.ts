import { Route, IRoute } from "./Route";

// ================================================================================ //
export class Router {

	routes: Route[];
	currentRoute: Route;

	// ---------------------------------------------------------------------------- //
	constructor(routes: IRoute[]) {
		this.routes = routes.map(route => {
			return new Route(this, route);
		});
		for (let index = 0; index < this.routes.length; index++) {
			this.routes[index].id = index;
		}
	}

	// ---------------------------------------------------------------------------- //
	public findRouteByPath(path: string): Route {
		return this.routes.find(route => route.fullPath === path);
	}

	public findRouteById(id: number): Route {
		return this.routes.find(route => route.id === id);
	}

	public findRoutesById(ids: number[]): Route[] {
		return ids.map(id => this.findRouteById(id)).filter(route => route);
	}

	// ---------------------------------------------------------------------------- //
	public navigate(targetPath: string): void {
		const targetRoute = this.findRouteByPath(targetPath);
		if (!targetRoute) {
			this.navigate("/404");
		} else {
			this.currentRoute = targetRoute;
			window.history.pushState({}, targetRoute.title, targetRoute.fullPath);
		}
	}

}