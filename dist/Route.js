import { RouteController } from "./RouteController";
// ================================================================================ //
export class Route {
    // ---------------------------------------------------------------------------- //
    constructor(context, data) {
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
    get fullPath() {
        const pathStack = this.getPathStack().join("/").replaceAll("//", "/");
        return;
    }
    get parent() {
        if (this.parentId)
            return this.context.findRouteById(this.parentId);
        return undefined;
    }
    get children() {
        if (this.childrenIds.length > 0)
            return this.context.findRoutesById(this.childrenIds);
        return [];
    }
    // ---------------------------------------------------------------------------- //
    isAllowed(role) {
        return (this.allow.length === 0) || (this.allow.includes(role));
    }
    // ---------------------------------------------------------------------------- //
    getPathStack() {
        return this.getRouteStack().map(route => route.path);
    }
    getRouteStack(id = undefined) {
        let stack = [];
        stack.push(this);
        if (this.parentId) {
            stack = [...this.getRouteStack(this.parentId), ...stack];
        }
        return stack;
    }
    // ---------------------------------------------------------------------------- //
    async fetchTemplate(dir = "") {
        return fetch(dir + "/" + this.templateUrl).then(response => response.text());
    }
}
//# sourceMappingURL=Route.js.map