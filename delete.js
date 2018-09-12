module.exports = function(db,assert,client){

    // Get the documents collection
    const collection = db.collection('product');
    // Delete document where a is 3
    collection.deleteOne({ 'name' : 'knife' }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document");
    //   callback(result);
    });    
    client.close()
}