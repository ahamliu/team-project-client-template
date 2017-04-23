// Your startup's initial mock objects go here
var initialData = {
  listing: {
    "1": {
      "location": "UMass Amherst, Field dorm",
      "date": Date.now(),
      "animals": [1],
      "title": "Pet listing",
      "description": "famous cat on reddit",
      "comments": [1],
      "_id": 1,
      "author": 1
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
      "_id": 1
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
      "_id": 2
    }
  },
  comment: {
    "1": {
      "author": "Kai",
      "text": "HELLO I LIKE YOUR CAT hehe xd",
      "_id": 1
    }
  },
  user: {
    "1": {
      "name": "Amy Ham Liu",
      "location": "Amherst, MA. USA",
      "ratings": 1,
      "imgURL": "img/sample-user.jpg",
      "_id": 1
    }
  },






  users: {
    // This user has id "1".
    "1": {
      "_id": 1,
      "fullName": "Someone",
      "feed": 1
    },
    "2": {
      "_id": 2,
      "fullName": "Someone Else",
      "feed": 2
    },
    "3": {
      "_id": 3,
      "fullName": "Another Person",
      "feed": 3
    },
    // This is "you"!
    "4": {
      "_id": 4,
      "fullName": "Cardie",
      "time": "5 years ago",
      "bio": "I hate javascript",
      // ID of your feed.
      "feed": 4,
      "wishList": 1
    }
  },

  "wishLists":{
    "1": {
      "_id": 4,
      "contents": [1]
    }
  },
  "wishListItems" :{
    "1":{
      "_id": 1,
      "time": "Yesterday at 3:48pm",
      "location": "Amherst, MA",
      "content": "Want to adopt a poodle, hopefully near Amherst."
    }
  },
  "feedItems": {
    "1": {
      "_id": 1,
      "likeCounter": [
        2, 3
      ],
      "type": "statusUpdate",
      "contents": {
        "author": 1,
        "postDate": 1453668480000,
        "location": "Austin, TX",
        "contents": "Cardie is the best!"
      }
    }
  },
  // "feeds" collection. Feeds for each FB user.
  "feeds": {
    "4": {
      "_id": 4,
      "contents": [1]
    },
    "3": {
      "_id": 3,
      "contents": []
    },
    "2": {
      "_id": 2,
      "contents": []
    },
    "1": {
      "_id": 1,
      "contents": []
    }
  },
  "querylist": []
};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
