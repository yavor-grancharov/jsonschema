export const TransformSchema = {
	schema: {
		sections: [
			{
				id: 2,
				section_title: 'Transform',
				category: 'Core Nodes',
				properties: [
					{
						name: 'add_item',
						label: 'Array add item',
						required: true,
						data_type: 'string',
						html_element: 'select',
						additionalFields: true,
						options: {
							type: 'string',
							default: [],
						},
					},
					{
						name: 'input',
						label: 'Input',
						required: false,
						data_type: 'string',
						html_element: 'input',
						additionalFields: false,
					},
					{
						name: 'option',
						label: 'Option',
						required: true,
						data_type: 'string',
						html_element: 'select',
						additionalFields: true,
						options: {
							default: ['Select'],
						},
					},
					{
						name: 'new_item',
						label: 'New item',
						required: false,
						data_type: 'string',
						html_element: 'input',
						additionalFields: false,
					},
					{
						name: 'index',
						label: 'Index',
						required: false,
						data_type: 'string',
						html_element: 'input',
						additionalFields: false,
					},
				],
			},
		],
	},
};
