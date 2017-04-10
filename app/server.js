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

function syncListing(listing){
  listing.animals = listing.animals.map((animalid) => {
    return readDocument("animal", animalid)
  })
  listing.comments = listing.comments.map((commentid) => {
    return readDocument("comment", commentid)
  })
  listing.author = readDocument("user", listing.author)
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

/**
 * Updates a feed item's likeCounter by removing the user from the likeCounter.
 * Provides an updated likeCounter in the response.
 */
export function unlikeFeedItem(feedItemId, userId, cb) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Find the array index that contains the user's ID.
  // (We didn't *resolve* the FeedItem object, so it is just an array of user IDs)
  var userIndex = feedItem.likeCounter.indexOf(userId);
  // -1 means the user is *not* in the likeCounter, so we can simply avoid updating
  // anything if that is the case: the user already doesn't like the item.
  if (userIndex !== -1) {
    // 'splice' removes items from an array. This removes 1 element starting from userIndex.
    feedItem.likeCounter.splice(userIndex, 1);
    writeDocument('feedItems', feedItem);
  }
  // Return a resolved version of the likeCounter
  emulateServerReturn(feedItem.likeCounter.map((userId) => readDocument('users', userId)), cb);
}
