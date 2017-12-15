const MongoClient = require('mongodb').MongoClient;

const dbUrl = process.env.DB_URL;

module.exports = (userName, url = dbUrl) => {

  return MongoClient.connect(url)
    .then((db) => {
      const collection = db.collection('users');
      return collection.findOne({ userName })
        .then((doc) => {
          if (doc) {
            return false;
          }
          return db;
        });
    })
    .then((db) => {
      if (!db) {
        return { resourceAlreadyExists: true };
      }
      const collection = db.collection('users');
      return collection.insertOne({ userName })
        .then(({ result }) => {
          db.close();
          return result;
        });
    })
    .catch((error) => {
      throw new Error(error);
    });
};
