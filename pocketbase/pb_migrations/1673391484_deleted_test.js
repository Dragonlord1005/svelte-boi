migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s4zsx5nm3v434uo");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "s4zsx5nm3v434uo",
    "created": "2023-01-06 05:28:42.295Z",
    "updated": "2023-01-06 05:28:42.295Z",
    "name": "test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2juf7s4x",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
