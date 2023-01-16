migrate((db) => {
  const collection = new Collection({
    "id": "vdw6mlg97xmnbjw",
    "created": "2023-01-10 22:58:04.873Z",
    "updated": "2023-01-10 22:58:04.873Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r8mg0t07",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "rr8oenir",
        "name": "comment",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "u0dxv5oq",
        "name": "post",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "gioww06b3if7ixu",
          "cascadeDelete": true
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.verified = true",
    "updateRule": "@request.auth.id != user.id",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vdw6mlg97xmnbjw");

  return dao.deleteCollection(collection);
})
