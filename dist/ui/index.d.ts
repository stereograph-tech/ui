export interface Config {
    grid: {
        base: number;
        unit: string;
        filename: string;
        classes: {
            name: string;
            decimals?: boolean;
            description: string;
            min: number;
            max: number;
            increment: number;
            properties: {
                name: string;
                value: string | number;
                important: boolean;
            }[];
        }[];
    };
}
