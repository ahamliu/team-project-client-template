import React from 'react';
// import {getListingById} from '../server.js'

export default class NewsItem extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      "author": "",
      "location": "",
      "date": Date.now(),
      "animals": [],
      "title": "",
      "comments": []
    }
  }

  // componentDidMount(){
  //   console.log("test")
  //   getListingById(1, (data) => {
  //     this.setState(data)
  //     console.log(this.state)
  //   })
  // }



  render() {
    console.log(this.state.animals[0])
    var json = this.state.animals[0]
    var text = JSON.stringify(json)
    return (
      <li>
        <div className="media-left media-top">
          <span className="glyphicon glyphicon-hand-right"></span>
        </div>
        <div className="media-body">
          <a href="#">{this.state.author.author}</a>: <p>{text}</p>

        </div>
      </li>
    )
  }
}
