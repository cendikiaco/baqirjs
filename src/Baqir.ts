import { IRoute } from "./Route";
import { Router } from "./Router";

// ================================================================================ //

export class Baqir {

	public name: string;
	public router: Router;

	constructor(name: string, routes: IRoute[], config?: BaqirConfig) {
		this.name = name;
		this.router = new Router(routes);
	}

}

// ================================================================================ //

export interface BaqirConfig { }