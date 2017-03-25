import React from 'react';
import Navbar from './navbar.js';
import Commentbox from './commentbox.js'

export default class Listing extends React.Component{
  render(){
      return (
        <div>
          <Navbar/>
          <center><label for="formGroupExampleInput"><font size="6"><b>Sample Listing</b></font></label></center>
          <div className="col-md-2">
          </div>

          <div className="col-md-2">

            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src="img/sample-user.jpg" alt="Card image cap"/>
                <div className= "pull-right">
                  <div className="media-left media-top">
                    <a href="#"><span className="glyphicon glyphicon-comment"></span></a>
                  </div>
                </div>
                <div className="card-block">
                  <a href="#"><h4 className="card-title">Amy Ham Liu</h4></a>

                  <p className="card-text"><span className="glyphicon glyphicon-pushpin"></span> Amherst, MA </p>
                  <p className="card-text">Ratings: 1</p>


                  <div className="card-footer">
                    <small className="text-muted">Account creation: 1 day ago</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">Comments</div>
              <div className="panel-body comments-body">

                <ul className="media-list">
                  <li className="media">
                    <div className="media-left media-top">
                      PIC
                    </div>
                    <div className="media-body">
                      <a href="#">Someone1</a> Nunc tincidunt nisl massa, eu interdum turpis tempus ac.
                    </div>
                  </li>
                </ul>
                <ul className="media-list">
                  <li className="media">
                    <div className="media-left media-top">
                      PIC
                    </div>
                    <div className="media-body">
                      <a href="#">Someone2</a> Proin in rhoncus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam posuere luctus fermentum.
                    </div>
                  </li>
                </ul>
                <ul className="media-list">
                  <li className="media">
                    <div className="media-left media-top">
                      PIC
                    </div>
                    <div className="media-body">
                      <a href="#">Someone3</a> Vivamus ut porttitor odio. Vivamus sed massa diam.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-body">


                <img src="img/sample-pet.jpg" className="myImage"/>
                <div className="card-f">
                  Listing created: 1 day ago
                </div>
                <p className="cdtxt .cdtxt"><b>Type: </b>Cat</p>
                <p className="cdtxt .cdtxt"><b>Breed: </b>Ragdoll</p>
                <p className="cdtxt"><b>Gender: </b>Female</p>
                <p className="cdtxt"><b>Age: </b>1 year</p>
                <p className="cdtxt"><b>Zip Code: </b>01002</p>
                <p className="cdtxt"><b>Description: </b>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo tellus dolor, nec vestibulum dolor posuere in. Etiam tempor neque dui, ut ullamcorper est venenatis ac. Morbi tempor justo eu massa congue, eu aliquet odio mattis. Sed a mattis lectus. Cras tempor velit eget commodo auctor. Donec aliquam mollis nisl eu blandit.
                </p>



              </div>
            </div>
            <Commentbox/>
          </div>
        </div>
      )
  }
}
