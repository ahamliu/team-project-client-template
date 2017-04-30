import React from 'react';
import Profile from '../profile.js';
import Rating from '../rating.js';
import UserList from '../userlist.js';

export default class ProfilePage_1 extends React.Component {
  render() {
    return (
      <div className="container layoutPadding">
        <div className="row">
        <div className="col-md-3">
        <Profile />
        </div>
        <div className="col-md-6 reviews">
        <Rating />
        </div>
        <div className="col-md-3">
        <UserList />
        </div>
      </div>
      </div>
    )
  }
}
