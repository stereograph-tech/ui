
export interface Config {
	grid: GridConfig;
}

export interface GridConfig {
	base: number;
	unit: string;
	filename: string;	
	classes: ClassConfig[];			
}

export interface ClassConfig {
	name: string;
	decimals?: boolean;
	description: string;
	min: number;
	max: number;
	increment: number;
	properties: ClassPropertiesConfig[];
}

export interface ClassPropertiesConfig {
	name: string;
	value: string|number;
	important: boolean;
}