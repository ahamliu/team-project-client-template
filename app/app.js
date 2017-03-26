import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import Listing from './components/listing.js';
import List from './components/list.js'
import Profile from './components/profile.js'
import Rating from './components/rating.js'
import UserList from './components/userList.js'
import Profile2 from './components/profile_2.js'
import Rating2 from './components/rating2.js'
import UserList2 from './components/userList2.js'





// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('listing') !== null) {
  ReactDOM.render(
    <Listing />,
    document.getElementById('listing')
  );
}
else if (document.getElementById('list') !== null) {
  ReactDOM.render(
    <List />,
    document.getElementById('list')
  );

}

else if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <Profile image="img/userpic.jpg" name="Cardie" time = "5 years ago">A Umass student.</Profile>,
    document.getElementById('profile')
  );
  ReactDOM.render(
    <Rating />,
    document.getElementById('rating')
  );
  ReactDOM.render(
    <UserList />,
    document.getElementById('userList')
  );
}
else if (document.getElementById('profile_2') !== null) {
  ReactDOM.render(
    <Profile2 image="img/userpic.jpg" name="Cardie"mobile="(000)000-0000" email="cardie@umass.edu" time = "5 years ago">A Umass student.</Profile2>,
    document.getElementById('profile_2')
  );
  ReactDOM.render(
    <Rating2 />,
    document.getElementById('rating2')
  );
  ReactDOM.render(
    <UserList2 />,
    document.getElementById('userList2')
  );
}
