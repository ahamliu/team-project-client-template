import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Guava";

// Put your mock objects here, as in Workshop 4
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
      "feed": 4
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
}


var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}
/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
 class ResetDatabase extends React.Component {
   render() {
     return (
       <button className="btn btn-default" type="button" onClick={() => {
         resetDatabase();
         window.alert("Database reset! Refreshing the page now...");
         document.location.reload(false);
       }}>Reset Mock DB</button>
     );
   }
 }

 ReactDOM.render(
   <ResetDatabase />,
   document.getElementById('db-reset')
 );
