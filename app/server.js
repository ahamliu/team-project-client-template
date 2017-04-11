import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

export function getListingById(listingid, cb) {
  var listing = readDocument("listing", listingid)
  console.log(listing)
  syncListing(listing)
  emulateServerReturn(listing,cb)
}

export function postComment(author, text, listingid, cb){
  var listing = readDocument("listing", listingid)
  console.log(listingid+listing._id)
  var comment = {
    author: author,
    text: text
  }
  comment = addDocument("comment", comment)
  listing.comments.push(comment._id)
  writeDocument("listing", listing)
  syncListing(listing)
  emulateServerReturn(listing, cb)
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

function syncListing(listing){
  listing.animals = listing.animals.map((animalid) => {
    return readDocument("animal", animalid)
  })
  listing.comments = listing.comments.map((commentid) => {
    return readDocument("comment", commentid)
  })
  listing.author = readDocument("user", listing.author)
}
export function postListing(formContent, userid, cb){
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
  emulateServerReturn(newListing, cb)
}


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



export function postStatusUpdate(user, location, contents, cb) {
  var time = new Date().getTime();
  // The new status update. The database will assign the ID for us.
  var newStatusUpdate = {
    "likeCounter": [],
    "type": "statusUpdate",
    "contents": {
      "author": user,
      "postDate": time,
      "location": location,
      "contents": contents
    }//,
    // List of comments on the post
    //"comments": []
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
  emulateServerReturn(newStatusUpdate, cb);
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
  //emulateServerReturn(getFeedItemSync(feedItemId), cb);
}
