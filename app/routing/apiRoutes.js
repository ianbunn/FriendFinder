var path = require("path");

// Importing friends json data
var friends = require("../data/friends.js")

// API routes
module.exports.routes = function (app) {

    // GET API FRIENDS
    app.get("/api/friends", function (request, response) {
        response.json(friends.list);
    });

    // POST API FRIENDS
    app.post("/api/friends", function (request, response) {
        // Received request inputs from client
        var newFriend = request.body;
        var newFriendScores = request.body.scores;
        
        // Setting initial vars for app
        var totalDifference = 0;
        var comparedScores = [];

        // Looping through friends json array to access their score key array values
        for(var i = 0; i < friends.list.length; i++){
            
            // Looping through the current friend's score key array values
            for(var j= 0; j < 10; j++){
                // Subtracting from new friend scores and getting absolute value, then aggregating difference from each subtraction
                totalDifference += Math.abs(parseInt(newFriendScores[j])-parseInt(friends.list[i].scores[j]));
            }

            // Push the total difference to the compared scores var
            comparedScores.push(totalDifference);

            // Set the total difference var to 0 to run through the next friend's score key array values
            totalDifference = 0;
        }

        // Getting the lowest value in compared scores array then the index to assign the match index of the friend's list
        var match = comparedScores.indexOf(Math.min(...comparedScores));

        // Setting the match object to pass as a response to the client
        var matchDetails = {
            name: friends.list[match].name,
            photo: friends.list[match].photo
        };

        // Adding the new friend to the friends json array
        friends.list.push(newFriend);
        
        // passing the match details to the client to show the beermatch friend
        response.json(matchDetails);
    });
};