import React from 'react';

export default class Listingcontent extends React.Component{
  render(){
    return(
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
    )
  }
}
