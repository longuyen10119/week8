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
//   require('./create.js')(db, callback);
//   require('./read.js')(app, db);
//   require('./update.js')(app, db);
//   require('./delete.js')(app, db);

//     insertDocuments(db, function() {
//     client.close()
//   });
  findDocuments(db, function() {
    client.close();
  });
//   removeDocument(db, function(){
//       client.close();
//   });
    // removeAllDocuments(db, function(){
    //     client.close();
    // });
});
/////////////FIND DOCUMENT AND SHOW ALL FUNCTION/////////////////////////
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }
///////////////////INSERT DOCUMENT FUNCTION////////////////////
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Insert some documents
    collection.insertMany([
        {'id':'1', 'name':'Shaver', 'price':'30', 'type':'NA', 'description':'Braun'},
        {'id':'2', 'name':'Coffe maker', 'price':'100', 'type':'NA', 'description':'Nespresso'},
        {'id':'3', 'name':'Knife', 'price':'200', 'type':'NA', 'description':'Massdrop'}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
/////////////////////UPDATE DOCUMENT///////////////
  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Update document 
    collection.updateOne({ 'name' : 'Shaver'}
      , { $set: { 'price' : '300' } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document ");
      callback(result);
    });  
  }
  ///////////////////REMOVE//////////////////////////
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Delete document where a is 3
    collection.deleteOne({ 'name' : 'knife' }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document");
      callback(result);
    });    
  }
  ///////////////////REMOVE ALL//////////////////////////
  const removeAllDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('product');
    // Delete document where a is 3
    collection.remove()
    console.log("Removed all");
    // callback(result);
    
  }
