migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gioww06b3if7ixu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8q7uyju",
    "name": "author",
    "type": "relation",
    "required": true,
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u8q7uyju",
    "name": "field1",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
