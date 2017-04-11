import React from 'react';
import Profile from '../profile.js';


export default class ProfilePage extends React.Component {
  render() {
    return(
      <div>
            <Profile
              image="img/userpic.jpg"
              name="Cardie"
              time = "5 years ago">A Umass student.</Profile>
            <Rating user={4}/>
            <UserList />
      </div>
    )
  }
}
