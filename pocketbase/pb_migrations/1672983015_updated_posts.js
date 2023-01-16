migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gioww06b3if7ixu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ylcipv3q",
    "name": "field",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8q7uyju",
    "name": "field1",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gioww06b3if7ixu")

  // remove
  collection.schema.removeField("ylcipv3q")

  // remove
  collection.schema.removeField("u8q7uyju")

  return dao.saveCollection(collection)
})
