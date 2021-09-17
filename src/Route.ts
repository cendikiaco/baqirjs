import { RouteController } from "./RouteController";
import { Router } from "./Router";

// ================================================================================ //
export class Route {
	context: Router;

	path: string;
	templateUrl: string;
	controller: RouteController;
	abstract: boolean;
	allow: string[];
	id?: number;
	title?: string;
	parentId?: number;
	childrenIds?: number[];

	// ---------------------------------------------------------------------------- //
	constructor(context: Router, data: IRoute) {
		this.context = context;
		this.path = data.path;
		this.templateUrl = data.templateUrl;
		this.controller = data.controller ? data.controller : new RouteController(this);
		this.abstract = data.abstract ? data.abstract : false;
		this.allow = data.allow ? data.allow : [];
		this.id = data.id ? data.id : undefined;
		this.title = data.title ? data.title : undefined;
		this.parentId = data.parentId ? data.parentId : undefined;
		this.childrenIds = data.childrenIds ? data.childrenIds : [];
	}

	// ---------------------------------------------------------------------------- //
	get fullPath(): string {
		const pathStack = this.getPathStack().join("/").replaceAll("//", "/");
		return;
	}

	get parent(): Route {
		if (this.parentId) return this.context.findRouteById(this.parentId);
		return undefined;
	}

	get children(): Route[] {
		if (this.childrenIds.length > 0)
			return this.context.findRoutesById(this.childrenIds)
		return [];
	}

	// ---------------------------------------------------------------------------- //
	public isAllowed(role: string): boolean {
		return (this.allow.length === 0) || (this.allow.includes(role));
	}

	// ---------------------------------------------------------------------------- //
	private getPathStack(): string[] {
		return this.getRouteStack().map(route => route.path);
	}

	private getRouteStack(id = undefined): Route[] {
		let stack = [];
		stack.push(this);
		if (this.parentId) {
			stack = [...this.getRouteStack(this.parentId), ...stack];
		}
		return stack;
	}

	// ---------------------------------------------------------------------------- //
	private async fetchTemplate(dir = "") {
		return fetch(dir + "/" + this.templateUrl).then(response => response.text());
	}

}

// ================================================================================ //
export interface IRoute {
	path: string;
	templateUrl: string;
	title?: string;
	controller?: RouteController;
	id?: number;
	parentId?: number;
	childrenIds?: number[];
	abstract?: boolean;
	allow?: string[];
}