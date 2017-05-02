// Implement your server in this file.
// We should be able to run your server with node src/server.js

// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
var database = require('./database.js');
var bodyParser = require('body-parser');


var ratingUpdateSchema = require('./schemas/ratingUpdate.json');
var listingSchema = require('./schemas/listing.json');
var commentSchema = require('./schemas/comment.json');
var validate = require('express-jsonschema').validate;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var readDocument = database.readDocument;
var resetDatabase = require('./resetDatabase.js');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/guava';


 MongoClient.connect(url, function(err, db) {
   // Put everything that uses `app` into this callback function.
   // from app.use(bodyParser.text());
   // all the way to
   // app.listen(3000, ...
   // Also put all of the helper functions that use mock database
   // methods like readDocument, writeDocument, ...
   app.use(express.static('../client/build'));
   // Support receiving text in HTTP request bodies
   app.use(bodyParser.text());
   // Support receiving JSON in HTTP request bodies
   app.use(bodyParser.json());

   function getAnimalById(animalid, cb){
     db.collection("animal").findOne({
       _id: animalid
     }, function(err, animalData){
       if(err){
         return cb(err);
       }
       else if(animalData == null){
         return cb(null, null);
       }
       else{
         return cb(null, animalData)
       }
     })
   }

   function getUserById(userid, cb){
     db.collection("user").findOne({
       _id: userid
     }, function(err, userData){
       if(err){
         return cb(err);
       }
       else if(userData == null){
         return cb(null, null);
       }
       else{
         return cb(null, userData)
       }
     })
   }

   function getCommentsByIds(commentids, cb){
     console.log(commentids)
     db.collection("comment").find({
       _id: {
         $in: commentids
       }
     }).toArray(function(err, commentData){
       if(err){
         return cb(err);
       }
       else if(commentData == null){
         return cb(null, null);
       }
       else{
         console.log(commentData)
         return cb(null, commentData)
       }
     })
   }

   function getListingById(listingid, cb) {
     var id = new ObjectID(listingid);
     db.collection("listing").findOne({
       _id: id
     }, function(err, listingData){
       if(err){
         return cb(err);
       }
       else if(listingData == null){
         return cb(null, null);
       }
       else{
         console.log("listing")
         getAnimalById(listingData.animals[0], function(err, animalData){
           if (err){
             return cb(err);
           }
           else if(animalData == null){
             return cb(null, null);
           }
           else{
             console.log("animal")
             getUserById(listingData.author, function(err, authorData){
               if (err){
                 return cb(err);
               }
               else if(authorData == null){
                 return cb(null, null);
               }
               else{
                 console.log("author")
                 getCommentsByIds(listingData.comments, function(err, commentsData){
                   if (err){
                     return cb(err);
                   }
                   else if(authorData == null){
                     return cb(null, null);
                   }
                   else{
                     console.log("comments")
                     listingData.animals = [animalData]
                     listingData.author = authorData
                     listingData.comments = commentsData
                     console.log(listingData)
                     return cb(null, listingData)
                   }
                 })
               }
             })
           }
         })
       }
     })
   }

   function postComment(author, text, listingid, cb){
     console.log("COMMENT")
     var id = new ObjectID(listingid)
     var comment = {
       author: author,
       text: text
     }
     db.collection("comment").insertOne(comment, function(err, result){
       if (err){
         return cb(err);
       }
       else if(result == null){
         return cb(null, null);
       }
       else{
         console.log(result.insertedId)
         db.collection("listing").updateOne({
           _id: id
         }, {
           $push: {comments: result.insertedId}
         }, function(err){
          if (err){
            return cb(err);
          }
          else{
            console.log("UpdatedListing")
            getListingById(id, function(err, listingData){
              console.log(id)
              if (err){
                return cb(err);
              }
              else if(listingData == null){
                return cb(null, null);
              }
              else{
                return cb(null, listingData)
              }
            })
          }
         })
       }
     })
   }

   function postListing(formContent, userid, cb){
     var newAnimal = {
       "name": formContent.name,
       "age": formContent.age,
       "type": formContent.type,
       "breed": formContent.breed,
       "gender": formContent.gender,
       "characteristics": formContent.characteristics.split(", "),
       "imgURL": formContent.imgURL
     }

    db.collection("animal").insertOne(newAnimal, function(err, result){
      if (err){
        return cb(err);
      }
      else if(result == null){
        return cb(null, null);
      }
      else{
        var newListing = {
          "location": formContent.location,
          "description": formContent.description,
          "date": Date.now(),
          "animals": [result.insertedId],
          "title": formContent.title,
          "author": new ObjectID(userid),
          "comments": []
        }
        db.collection("listing").insertOne(newListing, function(err, result){
          if (err){
            return cb(err);
          }
          else if(result == null){
            return cb(null, null);
          }
          else{
            getListingById(result.insertedId, function(err, listingData){
              if (err){
                return cb(err);
              }
              else if(result == null){
                return cb(null, null);
              }
              else{
                return cb(null, listingData);
              }
            })
          }
        })
      }
   })
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


   /**
    * Adds a new status update to the database.
    */
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
      postListing(body.formContent, body.userId, function(err, listingData){
        if(err){
          res.send(err);
        }
        else if (listingData == null){
          res.status(404).send();
        }
        else{
          res.send(listingData);
        }
      })
    });

    app.get('/listing/:listingId', function (req,res){
      getListingById(req.params.listingId, function(err, listingData){
        if (err){
          console.log(err)
          res.send(err);
        }
        else if (listingData == null){
          res.status(404).send();
        }
        else{
          res.send(listingData);
        }
      })
    });

    app.get('/animal/:animalId', function (req,res){
      var params = req.params;
      var animals = getAnimalById(params.animalId);
      res.status(201);
      res.send(animals);
    });


    // `POST /feeditem { userId: user, location: location, contents: contents  }`
    app.post('/comment',
             validate({ body: commentSchema }), function(req, res) {
      // If this function runs, `req.body` passed JSON validation!
      var body = req.body;
      postComment(body.author, body.text, body.listingId, function(err, listingData){
        if (err){
          console.log(err)
          res.send(err);
        }
        else if (listingData == null){
          res.status(404).send();
        }
        else{
          res.send(listingData);
        }
      })

    });

    // Get results from database
    function getResultsById(resultId, cb) {
      console.log(resultId);
      db.collection('pets').find().toArray(function(err, resultData){
        if(err){
          return cb(err);
        }
        else if(resultData == null){
          return cb(null, null);
        }
        else{
          console.log(resultData);
          return cb(null, resultData);
        }
      });
    }
    // GET results for findpets
    app.get('/results/:resultId', function (req,res){
      getResultsById([req.params.resultId], function(err, resultData){
        if (err){
          console.log(err)
          res.send(err);
        }
        else if (resultData == null){
          res.status(404).send();
        }
        else{
          console.log(resultData)
          res.send(resultData);
        }
      });
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

    // Reset database.
    app.post('/resetdb', function(req, res) {
      console.log("Resetting database...");
      // This is a debug route, so don't do any validation.
      resetDatabase(db, function(){
        res.send()
      })
    });

    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });

 });
 // The file ends here. Nothing should be after this.


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





function getAnimalById(animalid, cb) {
  var petofthemonth = readDocument("animal", animalid)
  //syncPetOfTheMonth(petofthemonth)
  return petofthemonth
}
