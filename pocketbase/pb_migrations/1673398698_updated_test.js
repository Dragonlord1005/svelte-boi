migrate(
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('iah01xuw81h4fvx');

		collection.listRule = '';

		return dao.saveCollection(collection);
	},
	(db) => {
		const dao = new Dao(db);
		const collection = dao.findCollectionByNameOrId('iah01xuw81h4fvx');

		collection.listRule = null;

		return dao.saveCollection(collection);
	}
);
