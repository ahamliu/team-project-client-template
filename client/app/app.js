import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';
import Navbar from './components/navbar.js';
import HomePage from './components/pages/homepage.js';
import ListPage from './components/pages/listpage.js';
import ListingPage from './components/pages/listingpage.js';
import ProfilePage from './components/pages/profilepage.js';
import PetOfTheMonthPage from './components/pages/petofthemonthpage.js';
import FindPetsPage from './components/pages/findpetspage.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="under-navbar">{this.props.children}</div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="findpetspage" component={FindPetsPage} />
      <Route path="homepage" component={HomePage} />
      <Route path="listpage" component={ListPage} />
      <Route path="listingpage" component={ListingPage} />
      <Route path="profilepage" component={ProfilePage} />
      <Route path="petofthemonthpage" component={PetOfTheMonthPage} />
    </Route>
  </Router>
),document.getElementById('root'));
/*
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
import ResultList from './components/resultlist.js';
import FindpetFields from './components/findpetfields.js';
import Navbar from './components/navbar.js';
import FindpetBody from './components/findpetbody.js';

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
  ReactDOM.render(
    <Navbar />,
    document.getElementById('navigation')
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
    <Profile image="img/userpic.jpg" user={4}></Profile>,
    document.getElementById('profile')
  );
  ReactDOM.render(
    <Rating user={4}/>,
    document.getElementById('rating')
  );
  ReactDOM.render(
    <UserList user={4}/>,
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
else if (document.getElementById('monthlypet') !== null){
  ReactDOM.render(
    <PetOfTheMonth />,
    document.getElementById('petofthemonth')
  );
}
else if (document.getElementById('findpets') !== null) {
  ReactDOM.render(
    <Navbar />,
    document.getElementById('navigation')
  );
  ReactDOM.render(
    <FindpetBody />,
    document.getElementById('body')
  );
}
*/
