migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('gioww06b3if7ixu');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'it2noknp',
				name: 'article',
				type: 'text',
				required: true,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('gioww06b3if7ixu');

		// update
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'it2noknp',
				name: 'article',
				type: 'text',
				required: false,
				unique: false,
				options: {
					min: null,
					max: null,
					pattern: ''
				}
			})
		);

		return dao.saveCollection(collection);
	}
);
