// ================================================================================ //
export class RouteController {
    // ---------------------------------------------------------------------------- //
    constructor(route) {
        this.route = route;
        this.template = document.createElement("div");
    }
    // ---------------------------------------------------------------------------- //
    setTemplate(templateString) {
        this.template.innerHTML = templateString;
    }
    getTemplate() {
        return this.template.innerHTML;
    }
}
//# sourceMappingURL=RouteController.js.map