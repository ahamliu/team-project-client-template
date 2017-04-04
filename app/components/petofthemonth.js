import React from 'react';
import Navbar from './navbar.js';
import PoTMPicture from './potmpicture.js';
import PoTMDescription from './potmdescription.js';

export default class PetOfTheMonth extends React.Component{
  render(){
      return (
          <div>
          <Navbar/>
          <PoTMPicture/>
          <PoTMDescription/>
          </div>
      )
  }
}
