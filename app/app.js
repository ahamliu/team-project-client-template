import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import Listing from './components/listing.js';
import List from './components/list.js';
import Profile from './components/profile.js';
import Rating from './components/rating.js';
import UserList from './components/userList.js';
import Profile2 from './components/profile_2.js';
import Rating2 from './components/rating2.js';
import UserList2 from './components/userList2.js';
import RightColumn from './components/rightcolumn.js';
import PetOfTheMonth from './components/petofthemonth.js';
import LeftColumn from './components/leftcolumn.js';
import NewsFeed from './components/newsfeed.js';
// import ResultList from './components/resultlist.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('listing') !== null) {
  ReactDOM.render(
    <Listing />,
    document.getElementById('listing')
  );
}


else if (document.getElementById('homepage') !== null) {
  ReactDOM.render(
    <LeftColumn />,
    document.getElementById('leftcolumn')
  );
  ReactDOM.render(
    <NewsFeed />,
    document.getElementById('newsfeed')
  );
  ReactDOM.render(
    <RightColumn />,
    document.getElementById('rightcolumn')
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
<<<<<<< HEAD
else if (document.getElementById('petofthemonth') !== null){
=======

else if (document.getElementById('monthlypet') !== null){
>>>>>>> 8eef7ceb6e827c53243e32980b0bc35b9499162b
  ReactDOM.render(
    <PetOfTheMonth />,
    document.getElementById('petofthemonth')
  );
}

else if (document.getElementById('results') !== null){
  ReactDOM.render(
    <ResultList />,
    document.getElementById('results')
  );
}
