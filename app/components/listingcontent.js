import React from 'react';

export default class Listingcontent extends React.Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-body">


          <img src={this.props.imgURL} className="myImage"/>
          <div className="card-f">
            Listing created: {new Date(this.props.date).toLocaleString()}
          </div>
          <p className="cdtxt .cdtxt"><b>Name: </b>{this.props.name}</p>
          <p className="cdtxt .cdtxt"><b>Type: </b>{this.props.type}</p>
          <p className="cdtxt .cdtxt"><b>Breed: </b>{this.props.breed}</p>
          <p className="cdtxt"><b>Gender: </b>{this.props.gender}</p>
          <p className="cdtxt"><b>Age: </b>{this.props.age}</p>
          <p className="cdtxt"><b>Location: </b>{this.props.location}</p>
          <p className="cdtxt"><b>Characteristics: </b>{this.props.characteristics.join(", ")}</p>
          <p className="cdtxt"><b>Description: </b>
          {this.props.children}
          </p>



        </div>
      </div>
    )
  }
}
