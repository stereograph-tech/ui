export declare abstract class UI {
    grid: GridConfig;
}
export declare abstract class GridConfig {
    base: number;
    unit: string;
    filename: string;
    classes: ClassConfig[];
}
export declare abstract class ClassConfig {
    name: string;
    decimals?: boolean;
    description: string;
    min: number;
    max: number;
    increment: number;
    properties: PropertyConfig[];
}
export declare abstract class PropertyConfig {
    name: string;
    value: string | number;
    important: boolean;
}
