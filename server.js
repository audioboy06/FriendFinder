// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// create and express instance
var app = express();

// set the port
var PORT = process.env.PORT || 8080;

// enable parsing of data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static("public"));

// require api and html routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
