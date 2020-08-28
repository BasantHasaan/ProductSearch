const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const {Product, productSchema} = require('./backend/db/models/product.model');
const { mongoose } = require('./backend/db/db.config');
const app = express();


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

 
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



