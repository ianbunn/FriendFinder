var path = require("path");
var friends = require("../data/friends.js")

// API routes
module.exports.routes = function (app) {

    // GET API FRIENDS
    app.get("/api/friends", function (request, response) {
        response.json(friends.list);
    });

    // POST API FRIENDS
    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;

        var beerMatchingMagic = [];

        friends.list.push(newFriend);
        response.json(newFriend);

    });

};