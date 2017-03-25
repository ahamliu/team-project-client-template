import React from 'react';
import Navbar from './navbar.js';
import Commentbox from './commentbox.js'
import Listingcontent from './listingcontent.js'
import Listinguser from './listinguser.js'
import Listingcomments from './listingcomments.js'

export default class Listing extends React.Component{
  render(){
      return (
        <div>
          <Navbar/>
          <center><label for="formGroupExampleInput"><font size="6"><b>Sample Listing</b></font></label></center>
          <div className="col-md-2">
          </div>

          <div className="col-md-2">

            <Listinguser/>
            <Listingcomments/>

          </div>

          <div className="col-md-6">
            <Listingcontent/>
            <Commentbox/>
          </div>
        </div>
      )
  }
}
