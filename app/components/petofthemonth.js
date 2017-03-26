import React from 'react';
import Navbar from './navbar.js';
import PoTM from './potm.js';

export default class PetOfTheMonth extends React.Component{
  render(){
      return (
          <div>
          <Navbar/>
          <PoTM/>
          </div>
      );
  }
}
