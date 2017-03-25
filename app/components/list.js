import React from 'react';
import Navbar from './navbar.js';
import Listform from './listform.js'

export default class List extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Listform/>
      </div>
    )
  }
}
