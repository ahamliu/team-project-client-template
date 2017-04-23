import React from 'react';

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
          </nav>

          <ul className="nav nav-pills nav-justified">
            <li role="presentation"><a href="homepage.html"><span className="glyphicon glyphicon-heart"></span> Home</a></li>
            <li role="presentation"><a href="findpets.html"><span className="glyphicon glyphicon-search"></span> Find</a></li>
            <li role="presentation"><a href="list.html"><span className="glyphicon glyphicon-list-alt   "></span> List</a></li>
            <li role="presentation"><a href="petofthemonth.html"><span className="glyphicon glyphicon-star"></span> Pet of the Month</a></li>
          </ul>
      </div>
    )
  }
}
