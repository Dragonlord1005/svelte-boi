migrate(
	(db) => {
		const collection = new Collection({
			id: 'ohwq7kvlsetpqba',
			created: '2023-01-10 22:58:04.873Z',
			updated: '2023-01-10 22:58:04.873Z',
			name: 'projects',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'fflqslqy',
					name: 'project_Name',
					type: 'text',
					required: true,
					unique: false,
					options: {
						min: 0,
						max: null,
						pattern: ''
					}
				},
				{
					system: false,
					id: 'ab3mtqaa',
					name: 'field',
					type: 'url',
					required: true,
					unique: true,
					options: {
						exceptDomains: null,
						onlyDomains: null
					}
				}
			],
			listRule: null,
			viewRule: null,
			createRule: null,
			updateRule: null,
			deleteRule: null,
			options: {}
		});

		return Dao(db).saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('ohwq7kvlsetpqba');

		return dao.deleteCollection(collection);
	}
);
