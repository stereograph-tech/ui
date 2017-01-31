import { UI } from '@stereograph/ui'

export const Config: UI = {
	grid: {
		base: 10,
		unit: 'em',
		filename: 'grid.css',
		classes: [
			{
				name: 'font-size',
				description: 'Allows for dynamic setting of font size.',
				min: 0.5,
				max: 3,
				increment: 0.1,
				properties: [
					{
						name: 'font-size',
						value: null,
						important: false
					}
				]
			}, 
			{
				name: 'width',
				description: 'Allows for precise setting of element width.',
				decimals: true,
				min: 0,
				max: 100,
				increment: 1,
				properties: [
					{
						name: 'max-width',
						value: null,
						important: true
					},
					{
						name: 'min-width',
						value: null,
						important: true
					}
				]
			}
		]
	}
}