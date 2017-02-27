var documentdb_config = {
  host: process.env.DOCDB_HOST || "YOUR-AZSB-HOST",
  authKey: process.env.DOCDB_AUTH_KEY || "YOUR-DOCDB-KEY",
  databaseId: process.env.DOCDB_DATABASE || "YOUR-DOCDB-DATABASE",
  collectionId: process.env.DOCDB_COLLECTION || "YOUR-DOCDB-COLLECTION"
}

export { documentdb_config };
