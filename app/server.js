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
