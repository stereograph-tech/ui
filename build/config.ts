import { 
	IUIConfig, 
	IUIGridConfig, 
	IUIClassConfig, 
	IUIClassPropertiesConfig 
} from '../interfaces/ui-config.interface';

export const UIConfig: IUIConfig = {
	grid: <IUIGridConfig>{
		base: 10,
		unit: 'em',
		filename: 'grid.css',
		classes: <IUIClassConfig[]>[
			<IUIClassConfig>{
				name: 'font-size',
				description: 'Allows for dynamic setting of font size.',
				min: 0.5,
				max: 3,
				increment: 0.1,
				properties: <IUIClassPropertiesConfig[]>[
					{
						name: 'font-size',
						value: null,
						important: false
					}
				]
			}, 
			<IUIClassConfig>{
				name: 'width',
				description: 'Allows for precise setting of element width.',
				decimals: true,
				min: 0,
				max: 100,
				increment: 1,
				properties: <IUIClassPropertiesConfig[]>[
					<IUIClassPropertiesConfig>{
						name: 'max-width',
						value: null,
						important: true
					},
					<IUIClassPropertiesConfig>{
						name: 'min-width',
						value: null,
						important: true
					}
				]
			}
		]
	}
}