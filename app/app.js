import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Navbar from './components/navbar.js';
import HomePage from './components/pages/homepage.js';
import FindPetsPage from './components/pages/findpetspage.js';
import ListPage from './components/pages/listpage.js';
import ListingPage from './components/pages/listingpage.js';
import ProfilePage from './components/pages/profilepage.js';
import PetOfTheMonthPage from './components/pages/petofthemonthpage.js';

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/findpetspage/" component={FindPetsPage} />
      <Route path="/homepage/" component={HomePage} />
      <Route path="/listpage/" component={ListPage} />
      <Route path="/listingpage/" component={ListingPage} />
      <Route path="/profilepage/" component={ProfilePage} />
      <Route path="petofthemonthpage" component={PetOfTheMonthPage} />
    </Route>
  </Router>
),document.getElementById('root'));
