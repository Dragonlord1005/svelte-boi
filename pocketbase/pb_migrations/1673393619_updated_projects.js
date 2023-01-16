migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ohwq7kvlsetpqba")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ohwq7kvlsetpqba")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
