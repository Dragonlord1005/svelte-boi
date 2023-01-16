migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('gioww06b3if7ixu');

		// remove
		collection.schema.removeField('it2noknp');

		// remove
		collection.schema.removeField('ylcipv3q');

		// remove
		collection.schema.removeField('u8q7uyju');

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: '14mpewcw',
				name: 'project',
				type: 'relation',
				required: true,
				unique: false,
				options: {
					maxSelect: 1,
					collectionId: 'ohwq7kvlsetpqba',
					cascadeDelete: true
				}
			})
		);

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('gioww06b3if7ixu');

		// add
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

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'ylcipv3q',
				name: 'field',
				type: 'date',
				required: true,
				unique: false,
				options: {
					min: '',
					max: ''
				}
			})
		);

		// add
		collection.schema.addField(
			new SchemaField({
				system: false,
				id: 'u8q7uyju',
				name: 'author',
				type: 'relation',
				required: true,
				unique: false,
				options: {
					maxSelect: 1,
					collectionId: '_pb_users_auth_',
					cascadeDelete: false
				}
			})
		);

		// remove
		collection.schema.removeField('14mpewcw');

		return dao.saveCollection(collection);
	}
);
