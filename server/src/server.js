// Implement your server in this file.
// We should be able to run your server with node src/server.js

// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
var database = require('./database.js');
var bodyParser = require('body-parser');

app.use(express.static('../client/build'));

var ratingUpdateSchema = require('./schemas/ratingUpdate.json');
var validate = require('express-jsonschema').validate;
var writeDocument = database.writeDocument;
var readDocument = database.writeDocument;
var addDocument = database.addDocument;
var getFeedData = 

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());
/**
 * Adds a new status update to the database.
 */
function postRatingUpdate(user, location, contents) {
  // If we were implementing this for real on an actual server, we would check
  // that the user ID is correct & matches the authenticated user. But since
  // we're mocking it, we can be less strict.

  // Get the current UNIX time.
  var time = new Date().getTime();
  // The new status update. The database will assign the ID for us.
  var newRatingUpdate = {
    "likeCounter": [],
    "type": "statusUpdate",
    "contents": {
      "author": user,
      "postDate": time,
      "location": location,
      "contents": contents,
      "likeCounter": []
    },
    // List of comments on the post
    "comments": []
  };

  // Add the status update to the database.
  // Returns the status update w/ an ID assigned.
  newRatingUpdate = addDocument('feedItems', newRatingUpdate);
  // Add the status update reference to the front of the current user's feed.
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents.unshift(newRatingUpdate._id);
  // Update the feed object.
  writeDocument('feeds', feedData);
  // Return the newly-posted object.
  return newRatingUpdate;
}
/**
 * Get the feed data for a particular user.
 */
app.get('/users/:userid/feed', function(req, res) {
  // URL parameters are stored in req.params
  var userid = req.params.userid;
  // Send response.
  res.send(getFeedData(userid));
});

// `POST /feeditem { userId: user, location: location, contents: contents  }`
app.post('/feeditem', validate({ body: ratingUpdateSchema }), function(req, res) {
  // If this function runs, `req.body` passed JSON validation!
  var body = req.body;
    var newUpdate = postRatingUpdate(body.userId, body.location, body.contents);
    // When POST creates a new resource, we should tell the client about it
    // in the 'Location' header and use status code 201.
    res.status(201);
    res.set('Location', '/feeditem/' + newUpdate._id);
     // Send the update!
    res.send(newUpdate);
});
/**
 * Translate JSON Schema Validation failures into error 400s.
 */
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err);
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
