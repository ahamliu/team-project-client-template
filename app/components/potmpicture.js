import React from 'react';


export default class PoTMPicture extends React.Component{
  render(){
    return(
      <row>

        <div className="col-md-1 ">

        </div>
        <div className="col-md-6 picture-info">
          <img src="dog.jpg" className="img-rounded"/>
        </div>




        <div className="col-md-5 picture-info">
          <div className="description-text">
            Name: {this.props.name}
          </div>
          <div className="description-text">
            Age: {this.props.age}
          </div>
          <div className="description-text">
            Type: {this.props.type}
          </div>
          <div className="description-text">
            Breed: {this.props.breed}
          </div>
          <div className="description-text">
            Location: {this.props.location}
          </div>
          <div className="description-text">
            Characteristics: {this.props.characteristics[0]}, {this.props.characteristics[1]}
          </div>
        </div>

      </row>
    )
  }
}
