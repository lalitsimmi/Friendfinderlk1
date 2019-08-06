// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friends = [{
    "name": "Homer",
    "photo": "http://images.clipartpanda.com/simpson-clip-art-homer.simpson.02.jpg",
    "scores": [
        1,
        5,
        4,
        5,
        3,
        3,
        3,
        2,
        3,
        5
    ]
},
{
    "name": "Morticia Addams",
    "photo": "http://sonailicious.com/halloween-makeup-ideas-movie-characters/18_morticia_addams/",
    "scores": [
        5,
        1,
        5,
        1,
        5,
        4,
        5,
        5,
        1,
        1
    ]
},
{
    "name": "Gollum",
    "photo": "http://casenightmaregreen.blogspot.com/2012/12/pursuing-precious-grad-school.html",
    "scores": [
        5,
        1,
        2,
        4,
        1,
        5,
        2,
        1,
        1,
        1
    ]
},
] // closes array

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;