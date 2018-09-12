module.exports = function(db,assert,client){
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
    //   callback(result);
    });
    client.close();
}


