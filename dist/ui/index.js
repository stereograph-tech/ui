export class UI {
    constructor() {
        this.grid = new GridConfig();
    }
}
export class GridConfig {
    constructor() {
        this.base = 10;
        this.unit = 'em';
        this.filename = '';
        this.classes = new Array();
    }
}
export class ClassConfig {
    constructor() {
        this.name = '';
        this.decimals = false;
        this.description = '';
        this.min = 0;
        this.max = 0;
        this.increment = 0;
        this.properties = new Array();
    }
}
export class PropertyConfig {
    constructor() {
        this.name = '';
        this.value = null;
        this.important = false;
    }
}
//# sourceMappingURL=index.js.map