migrate(
	(db) => {
		const collection = new Collection({
			id: 'iah01xuw81h4fvx',
			created: '2023-01-11 00:57:21.492Z',
			updated: '2023-01-11 00:57:21.492Z',
			name: 'test',
			type: 'base',
			system: false,
			schema: [
				{
					system: false,
					id: 'xeiqpnp7',
					name: 'text',
					type: 'text',
					required: false,
					unique: false,
					options: {
						min: null,
						max: null,
						pattern: ''
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
		const collection = dao.findCollectionByNameOrId('iah01xuw81h4fvx');

		return dao.deleteCollection(collection);
	}
);
