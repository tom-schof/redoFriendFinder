// Note: This was my own work the first time around. My process was to loop through the friendsData and calculate the difference between
// each friend's score and the user score. If the totalDifference is the minimum seen so far, it gets saved to smallestDifference. I initialized
// smallestDifference equal to 500 to start because it is larger than the largest possible difference value meaning that the first person's score
// will always be the minimum to start. I pretty much just tinkered with the output based on the example from the HOTRESTAURANT solution.
// Any similarity to others found on github is erroneous.

var friendsData = require("../data/friends");
var totalDifference = 0;
var smallestDifference = 500;
var friendIndex = 0;

module.exports = function(app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req);
        console.log(req.body.scores);
        for (var i = 0; i < friendsData.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < req.body.scores.length; j++) {
                totalDifference += Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
            }
            if (totalDifference < smallestDifference) {
                smallestDifference = totalDifference;
                friendIndex = i;
            }
        }

        res.json(friendsData[friendIndex]);
        console.log(friendsData[friendIndex]);
        console.log(friendIndex);
        friendsData.push(req.body);
        smallestDifference = 500;
    });
   
};

