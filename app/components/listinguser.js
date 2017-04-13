import React from 'react';

export default class Listinguser extends React.Component{
  render(){
    return(
      <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={this.props.user.imgURL} alt="Card image cap"/>
          <div className= "pull-right">
            <div className="media-left media-top">
              <a href="#"><span className="glyphicon glyphicon-comment"></span></a>
            </div>
          </div>
          <div className="card-block">
            <a href="#"><h4 className="card-title">{this.props.user.name}</h4></a>

            <p className="card-text"><span className="glyphicon glyphicon-pushpin"></span>{this.props.user.location}</p>
            <p className="card-text">Ratings: {this.props.user.ratings}</p>


            <div className="card-footer">
            </div>
          </div>
        </div>
      </div>
    )
  }
}
