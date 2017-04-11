import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import Navbar from './components/navbar.js';
import HomePage from './components/homepage.js';
import ListPage from './components/listpage.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />,
        <div>{this.props.children}</div>
      </div>
    )
  }
 }

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ListPage}/>
    </Route>
  </Router>
),document.getElementById('root'));

// if (document.getElementById('listing') !== null) {
//   ReactDOM.render(
//     <Listing />,
//     document.getElementById('listing')
//   );
// }
//
//
// else if (document.getElementById('homepage') !== null) {
//   ReactDOM.render(
//     <LeftColumn />,
//     document.getElementById('leftcolumn')
//   );
//   ReactDOM.render(
//     <NewsFeed />,
//     document.getElementById('newsfeed')
//   );
//   ReactDOM.render(
//     <RightColumn />,
//     document.getElementById('rightcolumn')
//   );
//
// }
//
// else if (document.getElementById('list') !== null) {
//   ReactDOM.render(
//     <List />,
//     document.getElementById('list')
//   );
//
// }
//
// else if (document.getElementById('profile') !== null) {
//   ReactDOM.render(
//     <Profile image="img/userpic.jpg" name="Cardie" time = "5 years ago">A Umass student.</Profile>,
//     document.getElementById('profile')
//   );
//   ReactDOM.render(
//     <Rating user={4}/>,
//     document.getElementById('rating')
//   );
//   ReactDOM.render(
//     <UserList />,
//     document.getElementById('userList')
//   );
// }
//
// else if (document.getElementById('profile_2') !== null) {
//   ReactDOM.render(
//     <Profile2 image="img/userpic.jpg" name="Cardie"mobile="(000)000-0000" email="cardie@umass.edu" time = "5 years ago">A Umass student.</Profile2>,
//     document.getElementById('profile_2')
//   );
//   ReactDOM.render(
//     <Rating2 />,
//     document.getElementById('rating2')
//   );
//   ReactDOM.render(
//     <UserList2 />,
//     document.getElementById('userList2')
//   );
// }
// else if (document.getElementById('monthlypet') !== null){
//   ReactDOM.render(
//     <PetOfTheMonth />,
//     document.getElementById('petofthemonth')
//   );
// }
//
// else if (document.getElementById('results') !== null){
//   ReactDOM.render(
//     <ResultList />,
//     document.getElementById('results')
//   );
// }
