//import technique for Node JS
var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
//For POST APIS
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// to get all the users
app.get("/users", (request, response) => {
  mongoClient.connect(connectionString).then((clientObject) => {
    var db = clientObject.db("shopper");
    var collection = db
      .collection("users")
      .find({})
      .toArray()
      .then((documents) => {
        response.send(documents);
        response.end();
      });
  });
});

// to add user
app.post("/registeruser", (request, response) => {
  var user = {
    userId: request.body.userId,
    userName: request.body.userName,
    password: request.body.password,
    email: request.body.email,
    age: parseInt(request.body.age),
    mobile: request.body.mobile,
  };

  mongoClient.connect(connectionString).then((clientObject) => {
    var database = clientObject.db("shopper");
    database
      .collection("users")
      .insertOne(user)
      .then((result) => {
        console.log("Record Inserted");
        //response.end();
        response.redirect("/users");
      });
  });
});

app.listen(5000);
console.log("Server started : http://127.0.0.1:5000");
