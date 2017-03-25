import React from 'react';

export default class Listinguser extends React.Component{
  render(){
    return(
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
    )
  }
}
