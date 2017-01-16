export interface IUIConfig {
	grid: IUIGridConfig;
}

export interface IUIGridConfig {
	base: number;
	unit: string;
	filename: string;	
	classes: IUIClassConfig[];			
}

export interface IUIClassConfig {
	name: string;
	decimals?: boolean;
	description: string;
	min: number;
	max: number;
	increment: number;
	properties: IUIClassPropertiesConfig[];
}

export interface IUIClassPropertiesConfig {
	name: string;
	value: string|number;
	important: boolean;
}