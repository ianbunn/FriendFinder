var path = require("path");

// HTML routes
module.exports.get = function (app){

    // HOMEPAGE
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, `../public/home.html`));
    });

    // SURVEY
    app.get("/:route", function (request, response) {
        var route = request.params.route;
        response.sendFile(path.join(__dirname, `../public/${route}.html`));
    });

};