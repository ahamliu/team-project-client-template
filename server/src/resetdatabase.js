var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "guava";
// Put the initial mock objects here.
var initialData = {
  results: {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "contents": [new ObjectID("000000000000000000000001"),new ObjectID("000000000000000000000002"),new ObjectID("000000000000000000000003")]
    }
  },
  pets: {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "name": "Randy",
      "location": "Cleveland, OH",
      "type": "Dog",
      "subtype": "Beagle",
      "age": "Young",
      "gender": "Male",
      "characteristics": "Intelligent, Friendly",
      "image": "img/dog-thumbnail.jpg"
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "name": "Ekans",
      "type": "Snake",
      "location": "Amherst, MA",
      "subtype": "Milk Snake",
      "age": "Adult",
      "gender": "Uknown",
      "characteristics": "Untrustworthy",
      "image": "img/snake-thumbnail.jpg"
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "name": "Harambe",
      "type": "Exotic",
      "location": "Cincinnati, OH",
      "subtype": "Western Lowland Gorilla",
      "age": "Adult",
      "gender": "Male",
      "characteristics": "Heroic",
      "image": "img/harambe-thumbnail.jpg"
    }
  },
  listing: {
    "1": {
      "location": "UMass Amherst, Field dorm",
      "date": Date.now(),
      "animals": [new ObjectID("000000000000000000000001")],
      "title": "Pet listing",
      "description": "famous cat on reddit",
      "comments": [new ObjectID("000000000000000000000001")],
      "_id": new ObjectID("000000000000000000000001"),
      "author": new ObjectID("000000000000000000000001")
    }
  },
  animal: {
    "1": {
      "name": "Peanut",
      "age": 999,
      "type": "Cat",
      "breed": "Main Coon",
      "gender": "Male",
      "characteristics": ["Fluffyyyyy", "CUTE"],
      "imgURL": "img/sample-pet.jpg",
      "_id": new ObjectID("000000000000000000000001")
    },
    "2": {
      "name": "Randy",
      "age": "Young",
      "type": "Dog",
      "breed": "Beagle",
      "gender": "Male",
      "location": "Cleveland, Ohio",
      "characteristics": ["smart", "playful"],
      "imgURL": "img/sample-pet.jpg",
      "_id": new ObjectID("000000000000000000000002")
    }
  },
  comment: {
    "1": {
      "author": "Kai",
      "text": "HELLO I LIKE YOUR CAT hehe xd",
      "_id": new ObjectID("000000000000000000000001")
    }
  },
  user: {
    "1": {
      "name": "Amy Ham Liu",
      "location": "Amherst, MA. USA",
      "ratings": 1,
      "imgURL": "img/sample-user.jpg",
      "_id": new ObjectID("000000000000000000000001")
    }
  },






  users: {
    // This user has id "1".
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "fullName": "Someone",
      "feed": new ObjectID("000000000000000000000001")
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "fullName": "Someone Else",
      "feed": new ObjectID("000000000000000000000002")
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "fullName": "Another Person",
      "feed": new ObjectID("000000000000000000000003")
    },
    // This is "you"!
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "fullName": "Cardie",
      "time": "5 years ago",
      "bio": "I hate javascript",
      // ID of your feed.
      "feed": new ObjectID("000000000000000000000004"),
      "wishList": 1
    }
  },

  "wishLists":{
    "1": {
      "_id": new ObjectID("000000000000000000000004"),
      "contents": [1]
    }
  },
  "wishListItems" :{
    "1":{
      "_id": new ObjectID("000000000000000000000001"),
      "time": "Yesterday at 3:48pm",
      "location": "Amherst, MA",
      "content": "Want to adopt a poodle, hopefully near Amherst."
    }
  },
  "feedItems": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "likeCounter": [
        2, 3
      ],
      "type": "statusUpdate",
      "contents": {
        "author": new ObjectID("000000000000000000000001"),
        "postDate": 1453668480000,
        "location": "Austin, TX",
        "contents": "Cardie is the best!"
      }
    }
  },
  // "feeds" collection. Feeds for each FB user.
  "feeds": {
    "4": {
      "_id": new ObjectID("000000000000000000000004"),
      "contents": [1]
    },
    "3": {
      "_id": new ObjectID("000000000000000000000003"),
      "contents": []
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "contents": []
    },
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "contents": []
    }
  }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
