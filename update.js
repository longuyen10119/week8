module.exports = function(db,assert,client){
      // Get the documents collection
      const collection = db.collection('product');
      // Update document 
      collection.updateOne({ 'name' : 'Shaver'}
        , { $set: { 'price' : '300' } }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Updated the document ");
        // callback(result);
      });  
      client.close();



}