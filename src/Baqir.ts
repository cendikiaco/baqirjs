import { Route } from "./Route";
import { Router } from "./Router";

// ================================================================================

export class Baqir {

	public name: string;
	public router: Router;

	constructor(name: string, routes: Route[], config?: BaqirConfig) {
		this.name = name;
		this.router = new Router(routes);
	}

}

// ================================================================================

export interface BaqirConfig { }