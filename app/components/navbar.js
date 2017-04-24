import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (

      <div>
        <nav className="navbar-inverse navbar-default navbar-fixed-top .navbar-inverse">
          <div className="container-fluid">

            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search specific pet or user"/>
              </div>
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>

            <div className="navbar-header">
              <a className="navbar-brand .navbar-inverse .nav-brand" href="homepage.html">
               <font color="5fcf80"><span className="glyphicon glyphicon-heart-empty"></span></font>
               <font color="ffffff">LitterBox</font>
              </a>
            </div>

            <div className="btn-toolbar pull-right" role="toolbar">
              <div className="btn-group" role="group">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default dropdown-toggle navbar-btn"
                    data-toggle="dropdown">
                    <span className="glyphicon glyphicon-user"></span>
                  </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                      <li><a className="dropdown-item" href="profile_1.html">Profile</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-pills nav-justified top-navbar-buttons">
            <li role="presentation"><Link to={"/homepage/"}><span className="glyphicon glyphicon-heart"></span> Home</Link></li>
            <li role="presentation"><Link to={"/findpetspage/"}><span className="glyphicon glyphicon-search"></span> Find</Link></li>
            <li role="presentation"><Link to={"/listpage/"}><span className="glyphicon glyphicon-list-alt   "></span> List</Link></li>
            <li role="presentation"><Link to={"/petofthemonthpage/"}><span className="glyphicon glyphicon-star"></span> Pet of the Month</Link></li>
          </ul>
          </nav>
      </div>
    )
  }
}
