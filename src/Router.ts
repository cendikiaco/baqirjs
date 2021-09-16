import { Route } from "./Route";

export class Router {

	routes: Route[];

	constructor(routes: Route[]) {
		this.routes = routes;
	}

}