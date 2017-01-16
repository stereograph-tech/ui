export module UI {
	interface Config {
		grid: GridConfig;
	}

	interface GridConfig {
		base: number;
		unit: string;
		filename: string;	
		classes: ClassConfig[];			
	}

	interface ClassConfig {
		name: string;
		decimals?: boolean;
		description: string;
		min: number;
		max: number;
		increment: number;
		properties: ClassPropertiesConfig[];
	}

	interface ClassPropertiesConfig {
		name: string;
		value: string|number;
		important: boolean;
	}
}