export abstract class UI {
	public grid: GridConfig;
}

export abstract class GridConfig {
	public base: number;
	public unit: string;
	public filename: string;	
	public classes: ClassConfig[]
}

export abstract class ClassConfig {	
	public name: string;
	public decimals?: boolean;
	public description: string;
	public min: number;
	public max: number;
	public increment: number;
	public properties: PropertyConfig[];
}

export abstract class PropertyConfig {
	public name: string;
	public value: string|number;
	public important: boolean;
}