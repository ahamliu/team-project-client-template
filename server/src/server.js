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
var listingSchema = require('./schemas/listing.json');
var commentSchema = require('./schemas/comment.json');
var validate = require('express-jsonschema').validate;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;

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
  var newStatusUpdate = {
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
  newStatusUpdate = addDocument('feedItems', newStatusUpdate);
  // Add the status update reference to the front of the current user's feed.
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents.unshift(newStatusUpdate._id);
  // Update the feed object.
  writeDocument('feeds', feedData);
  // Return the newly-posted object.
  return newStatusUpdate;
}

function syncListing(listing){
  listing.animals = listing.animals.map((animalid) => {
    return readDocument("animal", animalid)
  })
  listing.comments = listing.comments.map((commentid) => {
    return readDocument("comment", commentid)
  })
  listing.author = readDocument("user", listing.author)
}

function postListing(formContent, userid){
  var newAnimal = {
    "name": formContent.name,
    "age": formContent.age,
    "type": formContent.type,
    "breed": formContent.breed,
    "gender": formContent.gender,
    "characteristics": formContent.characteristics.split(", "),
    "imgURL": formContent.imgURL
  }
  newAnimal = addDocument("animal", newAnimal)
  var newListing = {
    "location": formContent.location,
    "description": formContent.description,
    "date": Date.now(),
    "animals": [newAnimal._id],
    "title": formContent.title,
    "author": userid,
    "comments": []
 }
  newListing = addDocument("listing", newListing)
  syncListing(newListing)
  return newListing
}

function getListingById(listingid) {
  var listing = readDocument("listing", listingid)
  syncListing(listing)
  return listing
}

function getAnimalById(animalid, cb) {
  var petofthemonth = readDocument("animal", animalid)
  //syncPetOfTheMonth(petofthemonth)
  return petofthemonth
}

function postComment(author, text, listingid){
  var listing = readDocument("listing", listingid)
  var comment = {
    author: author,
    text: text
  }
  comment = addDocument("comment", comment)
  listing.comments.push(comment._id)
  writeDocument("listing", listing)
  syncListing(listing)
  return listing
}

// `POST /feeditem { userId: user, location: location, contents: contents  }`
app.post('/feeditem',
         validate({ body: ratingUpdateSchema }), function(req, res) {
  // If this function runs, `req.body` passed JSON validation!
  var body = req.body;
    var newUpdate = postStatusUpdate(body.userId, body.location, body.contents);
    // When POST creates a new resource, we should tell the client about it
    // in the 'Location' header and use status code 201.
    res.status(201);
    res.set('Location', '/feeditem/' + newUpdate._id);
     // Send the update!
    res.send(newUpdate);
});

// `POST /feeditem { userId: user, location: location, contents: contents  }`
app.post('/listing',
         validate({ body: listingSchema }), function(req, res) {
  // If this function runs, `req.body` passed JSON validation!
  var body = req.body;
  var newListing = postListing(body.formContent, body.userId);
  // When POST creates a new resource, we should tell the client about it
  // in the 'Location' header and use status code 201.
  res.status(201);
   // Send the update!
  res.send(newListing);
});

app.get('/listing/:listingId', function (req,res){
  var params = req.params;
  var listing = getListingById(params.listingId);
  res.status(201);
  res.send(listing);
});

app.get('/listing/:listingId', function (req,res){
  var params = req.params;
  var animals = getAnimalById(params.listingId);
  res.status(201);
  res.send(animals);
});


// `POST /feeditem { userId: user, location: location, contents: contents  }`
app.post('/comment',
         validate({ body: commentSchema }), function(req, res) {
  // If this function runs, `req.body` passed JSON validation!
  var body = req.body;
  var listing = postComment(body.author, body.text, body.listingId);
  // When POST creates a new resource, we should tell the client about it
  // in the 'Location' header and use status code 201.
  res.status(201);
   // Send the update!
  res.send(listing);
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
