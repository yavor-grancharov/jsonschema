export const HttpSchema = {
	schema: {
		sections: [
			{
				id: 1,
				section_title: 'Http request',
				category: 'Core Nodes',
				properties: [
					{
						name: 'url',
						label: 'Url',
						required: true,
						data_type: 'string',
						html_element: 'input',
						default: '',
						examples: [
							'https://tenicor.com/collections/walther-holsters/products/velo4-aiwb-holster-for-walther',
						],
						additionalFields: false,
					},
					{
						name: 'description',
						label: 'Description',
						required: false,
						data_type: 'string',
						html_element: 'textarea',
						default: '',
						examples: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.'],
						additionalFields: false,
					},
					{
						name: 'method',
						label: 'Method',
						required: true,
						data_type: 'array',
						html_element: 'select',
						additionalFields: true,
						options: {
							type: 'string',
							default: ['POST', 'DELETE', 'PUT', 'GET'],
						},
					},
				],
			},
		],
	},
};
