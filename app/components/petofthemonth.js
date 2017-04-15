import React from 'react';
import Navbar from './navbar.js';
import PoTMPicture from './potmpicture.js';
import PoTMDescription from './potmdescription.js';
// import {getAnimalById} from '../server.js';

export default class PetOfTheMonth extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "name": "hi",
      "age": 0,
      "type": "",
      "breed": "",
      "gender": "",
      "location": "",
      "characteristics": [],
      "imgURL": "",
      "_id": 0
    }
  }
  //  componentDidMount(){
  //   getAnimalById(2, (data) => {
  //     this.setState(data)
  //   })
  // }
  render(){
      return (
          <div>
          <Navbar/>
          <PoTMPicture name={this.state.name} type={this.state.type}
            breed={this.state.breed} age={this.state.age} location={this.state.location}
            characteristics={this.state.characteristics}>
          </PoTMPicture>
          <PoTMDescription />
          </div>
      )
  }
}
