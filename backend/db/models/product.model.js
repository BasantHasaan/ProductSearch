const mongoose = require('mongoose'),
  mongoosastic = require('mongoosastic'),
  Schema = mongoose.Schema;
const productSchema = 
  new Schema({
    name:{
      type: String,
      required: true,
      es_indexed:true

    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      es_indexed:true

    },
    category: {
      id:{
        type: Number,
        required: true
      },
      name:{
        type: String,
        required: true,
        es_indexed:true

      } 

    },
    brand: {
      type: String,
      required: true,
      es_indexed:true
    }

  })
  productSchema.plugin(mongoosastic
    // , {
    // "host": "localhost",
    // "port": 9200
// }
);

const Product  = mongoose.model('product', productSchema);
Product.createMapping(
  {
    "mappings": {
      "properties":{
      "name": {"type":'text',"fielddata": true },    
      "price": {"type": 'long'},
      "category": { 
        "properties": {
          "name" : {"type" : "text"}
      }
    },
    "brand": { "type": 'text',
      "fielddata": true 
      }
    }        
  }
  },function(err, mapping){
  if(err){
         console.log('error creating mapping');
  }else{
         console.log(mapping);
         console.log("mapping created");
  }
  });
let stream = Product.synchronize();
count = 0;

stream.on('data', function(err, doc) {
  if(err) console.log(err)
   count++;
});
stream.on('close', function() {
   console.log('indexed ' + count + ' documents!');
});
stream.on('error', function(err) {
   console.log(err);
});


module.exports = {
Product:Product,
}