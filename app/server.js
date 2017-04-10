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

export function findPets(location, type, subtype, age, gender, characteristics) {
  var queryList = readDocument('queryList', Math.random().toString());
  queryList.push({
    "searchDate": new Date().getTime(),
    "location": location,
    "type": type,
    "subtype": subtype,
    "age": age,
    "gender": gender,
    "characteristics": characteristics
  });
  // Return a resolved version of the feed item so React can
  // render it.
  //emulateServerReturn(getFeedItemSync(feedItemId), cb);
}
