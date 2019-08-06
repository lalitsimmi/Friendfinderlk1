// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold the friends array data.
// ===============================================================================
var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
    // API GET Requests
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST Requests
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function(req, res) {
        // set defaults for the bestmatch placeholder
        console.log(req.body.name);
        console.log(req.body);

        let newFriend = req.body;
        let newFriendScores = newFriend["scores[]"].map(parseFloat);


        // get the friend's scores alone in an array
        const friendsScores = friends.map(function(friend) {
            return friend.scores
        })

        const scoreDifferencesArray = [];

        friendsScores.forEach(function(singleFriendScores) {
            const differences = [];

            singleFriendScores.forEach(function(score, index) {

                // calculate difference between current friend
                // and new friends scores at the same index
                const difference = newFriendScores[index] - score;

                // push the absolute value of that difference
                differences.push(Math.abs(difference));
                // console.log(differences);
            })
            differenceSum = differences.reduce(function(sum, score) {
                return sum + score
            })
            scoreDifferencesArray.push(differenceSum);
        })

        console.log(scoreDifferencesArray)
        // scoreDifferencesArray is now an array of difference arrays
        // that directly maps to each friend in the friends list
        // this is where you need to find the closest friend using the minimu
        // value of this newly built array

        friends.push(newFriend)

        // gets the lowest score from scoreDifferencesArray
        function arrayMin(array) {
            return array.reduce(function(a, b) {
                return Math.min(a, b);
            });
        }

        // variables to store lowest score and index of best match
        var lowest = arrayMin(scoreDifferencesArray);
        var bestMatch = scoreDifferencesArray.indexOf(lowest);

        console.log('Lowest Score is: ' + lowest);
        console.log('Index of the Best Match in Friends Array is: ' + bestMatch);
        console.log('Your best match is: ' + friends[bestMatch].name);

        // Return the friends object as JSON.
        res.json(friends[bestMatch]);
    });

} // closes app