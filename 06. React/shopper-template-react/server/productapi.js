var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//To fetch all the products
app.get("/product/all", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    database
      .collection("products")
      .find({})
      .toArray()
      .then((documents) => {
        response.send(documents);
        response.end();
      });
  });
});

//To get specific product details
app.get("/product/:id", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    console.log(" request.params.id  - " + request.params.id);
    database
      .collection("products")
      .findOne({ productId: parseInt(request.params.id) })
      .then((documents) => {
        console.log(documents);
        response.send(documents);
        response.end();
      });
  });
});

//To add product
app.post("/product/add", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    var product = {
      productId: request.body.productId,
      name: request.body.name,
      price: parseFloat(request.body.price),
      stock: request.body.stock == "true" ? true : false,
    };
    database
      .collection("products")
      .insertOne(product)
      .then((result) => {
        console.log("Product Added");
        response.redirect("/product/all");
        response.end();
      });
  });
});

//To update product
app.put("/product/update/:id", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    var findProduct = { productId: parseInt(request.params.id) };
    var updateProduct = {
      name: request.body.name,
      price: parseFloat(request.body.price),
      stock: request.body.stock == "true" ? true : false,
    };
    database
      .collection("products")
      .updateOne(findProduct, { $set: updateProduct })
      .then((result) => {
        console.log("Product Updated");
        response.end();
      });
  });
});

//To delete the product
app.delete("/product/delete/:id", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    var findProduct = { productId: parseInt(request.params.id) };
    database
      .collection("products")
      .deleteOne(findProduct)
      .then((result) => {
        console.log("Product Deleted");
        response.end();
      });
  });
});

app.listen(8989);
console.log("Server started : http://127.0.0.1:8989");
