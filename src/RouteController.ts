import { Route } from "./Route";

// ================================================================================ //
export class RouteController {

	route: Route;
	private template: HTMLDivElement;

	// ---------------------------------------------------------------------------- //
	constructor(route: Route) {
		this.route = route;
		this.template = document.createElement("div");
	}

	// ---------------------------------------------------------------------------- //
	setTemplate(templateString: string): void {
		this.template.innerHTML = templateString;
	}

	getTemplate(): string {
		return this.template.innerHTML;
	}


}