export abstract class UI {
	public grid: GridConfig = new GridConfig();
}

export class GridConfig {
	public base: number = 10;
	public unit: string = 'em';
	public filename: string = '';
	public classes: ClassConfig[] = new Array<ClassConfig>();
}

export class ClassConfig {	
	public name: string = '';
	public decimals?: boolean = false;
	public description: string = '';
	public min: number = 0;
	public max: number = 0;
	public increment: number = 0;
	public properties: PropertyConfig[] = new Array<PropertyConfig>();
}

export class PropertyConfig {
	public name: string = '';
	public value: string|number = null;
	public important: boolean = false;
}