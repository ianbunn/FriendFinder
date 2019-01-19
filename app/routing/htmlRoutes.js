var path = require("path");

// HTML routes
module.exports.routes = function (app){

    // HOMEPAGE
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, `../public/home.html`));
    });

    // SURVEY
    app.get("/survey", function (request, response) {
        response.sendFile(path.join(__dirname, `../public/survey.html`));
    });

    // ERROR
    // app.get('*', function (request, response) {
    //     response.sendFile(path.join(__dirname, `../public/error.html`));
    // });

};