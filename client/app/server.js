import {readDocument, readDocuments, writeDocument, addDocument} from './database.js';
/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}


export function getStats(stat) {
  var items = readDocuments(stat)
  var ret = Object.keys(items).length
  //emulateServerReturn(items,cb)
  console.log(ret)
  return ret
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

export function getRandomListing(){
  var i = getStats("listing")
  console.log(parseInt(Math.random()*i))
  return (parseInt(Math.random()*i)+1)
}


export function getAnimalById(animalid, cb) {
  var petofthemonth = readDocument("animal", animalid)
  console.log(petofthemonth)
  //syncPetOfTheMonth(petofthemonth)
  emulateServerReturn(petofthemonth,cb)
}

/*function syncPetOfTheMonth(petofthemonth){
  petofthemonth.animals = petofthemonth.animals.map((animalid) => {
    return readDocument("animal", animalid)
  })
}*/

function syncUser(user){
    var feedid = user.feed
    var wlid = user.wishList
    user.feed = readDocument("feeds", feedid)
    user.wishList = readDocument("wishLists",wlid)
}
export function getUserById(userid, cb) {
  var user = readDocument("users", userid)
  syncUser(user)
  emulateServerReturn(user,cb)
}

function getWishListItemSync(wishListItemId) {
  var wishListItem = readDocument('wishListItems', wishListItemId);
  return wishListItem;
}

export function getWishListByUserId(userID, cb) {
  var userData = readDocument('users', userID);
  var wishListData = readDocument('wishLists',userData.wishList);
  wishListData.contents = wishListData.contents.map(getWishListItemSync);
  emulateServerReturn(wishListData, cb);
}

function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Resolve 'like' counter.
  feedItem.likeCounter = feedItem.likeCounter.map((id) => readDocument('users', id));
  feedItem.contents.author =
    readDocument('users', feedItem.contents.author);
  return feedItem;
}

export function getFeedData(user, cb) {
  var userData = readDocument('users', user);
  var feedData = readDocument('feeds', userData.feed);
  feedData.contents = feedData.contents.map(getFeedItemSync);
  emulateServerReturn(feedData, cb);
}

var xhr = new XMLHttpRequest();
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
/**
 * Adds a new status update to the database.
 */
export function postStatusUpdate(user, location, contents, cb) {
  sendXHR('POST', '/feeditem', {
    userId: user,
    location: location,
    contents: contents
  }, (xhr) => {
    // Return the new status update.
    cb(JSON.parse(xhr.responseText));
  });
}

export function postListing(formContent, userId, cb) {
  sendXHR('POST', '/listing', {
    userId: userId,
    formContent: formContent
  }, (xhr) => {
    // Return the new status update.
    cb(JSON.parse(xhr.responseText));
  });
}

export function getListingById(listingId, cb) {
  sendXHR('GET', '/listing/'+listingId, null, (xhr) => {
    // Return the new status update.
    cb(JSON.parse(xhr.responseText));
  });
}

export function postComment(author, text, listingId, cb) {
  sendXHR('POST', '/comment', {
    author: author,
    text: text,
    listingId: listingId
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

export function likeFeedItem(feedItemId, userId, cb) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Normally, we would check if the user already liked this comment.
  // But we will not do that in this mock server.
  // ('push' modifies the array by adding userId to the end)
  feedItem.likeCounter.push(userId);
  writeDocument('feedItems', feedItem);
  // Return a resolved version of the likeCounter
  emulateServerReturn(feedItem.likeCounter.map((userId) => readDocument('users', userId)), cb);
}

export function unlikeFeedItem(feedItemId, userId, cb) {
  var feedItem = readDocument('feedItems', feedItemId);
  var userIndex = feedItem.likeCounter.indexOf(userId);
  if (userIndex !== -1) {
    feedItem.likeCounter.splice(userIndex, 1);
    writeDocument('feedItems', feedItem);
  }
  emulateServerReturn(feedItem.likeCounter.map((userId) => readDocument('users', userId)), cb);

}

/*
export function findPets(location, type, subtype, age, gender, characteristics, queryListID, cb) {
  var queryList = readDocument('queryList', queryListID);
  queryList.push({
    "searchDate": new Date().getTime(),
    "location": location,
    "type": type,
    "subtype": subtype,
    "age": age,
    "gender": gender,
    "characteristics": characteristics
  });
  writeDocument('queryList', queryList);

  var results = readDocuments('animal');

  emulateServerReturn(results, cb);
}
*/
export function getResults(location, type, subtype, age, gender, characteristics, cb) {
  sendXHR('GET', '/results/' + 1, {
    location: location,
    type: type,
    subtype: subtype,
    age: age,
    gender: gender,
    characteristics: characteristics
  }, (xhr) => {
    console.log(location, age);
    cb(JSON.parse(xhr.responseText));
  });
}
