var express = require("express");
var path = require("path");
var html = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");

// Setting up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Handle data parsed in json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server
app.listen(PORT, function(){
    console.log(`App listening on PORT: http://localhost:${PORT}`);
});

html.routes(app);

api.routes(app);