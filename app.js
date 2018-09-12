const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection URL
const url = 'mongodb://localhost:27017';


// Database Name
const dbName = 'week8';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  require('./create.js')(db, assert, client);
//   require('./read.js')(db, assert, client);;
//   require('./update.js')(db, assert, client);;
//   require('./delete.js')(db, assert, client);;

});
  ///////////////////REMOVE ALL//////////////////////////
  const removeAllDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Delete document where a is 3
    collection.remove()
    console.log("Removed all");
    // callback(result);
    
  }
