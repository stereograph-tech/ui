export declare abstract class UI {
    grid: GridConfig;
}
export declare class GridConfig {
    base: number;
    unit: string;
    filename: string;
    classes: ClassConfig[];
}
export declare class ClassConfig {
    name: string;
    decimals?: boolean;
    description: string;
    min: number;
    max: number;
    increment: number;
    properties: PropertyConfig[];
}
export declare class PropertyConfig {
    name: string;
    value: string | number;
    important: boolean;
}
