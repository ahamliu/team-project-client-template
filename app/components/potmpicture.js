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
            Name: Randy
          </div>
          <div className="description-text">
            Age: Young
          </div>
          <div className="description-text">
            Type: Dog
          </div>
          <div className="description-text">
            Breed: Beagle
          </div>
          <div className="description-text">
            Location: Cleveland, Ohio
          </div>
          <div className="description-text">
            Characteristics: Smart, Playful
          </div>
        </div>

      </row>
    )
  }
}
