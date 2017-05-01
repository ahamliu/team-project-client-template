import React from 'react';
import Navbar from './navbar.js';
import Commentbox from './commentbox.js'
import Listingcontent from './listingcontent.js'
import Listinguser from './listinguser.js'
import Listingcomments from './listingcomments.js'
import {getListingById, postComment} from '../server.js'

export default class Listing extends React.Component{
  constructor(props){
    super(props)
    console.log("test")
    this.state = {
      "author": "",
      "location": "",
      "date": Date.now(),
      "animals": [],
      "title": "",
      "comments": []
    }
  }
  componentDidMount(){
    console.log("test")
    getListingById("000000000000000000000001", (data) => {
      this.setState(data)
      console.log(this.state.author)
    })
  }
  onCommentPost(e, comment){
    console.log(comment)
    e.preventDefault()
    postComment(comment.name, comment.text, "000000000000000000000001", (data) => {
      console.log(data)
      this.setState(data)
    })
  }
  render(){
    var content
    if(this.state.title){content = (
      <Listingcontent imgURL={this.state.animals[0].imgURL} date={this.state.date} name={this.state.animals[0].name} type={this.state.animals[0].type} breed={this.state.animals[0].breed} gender={this.state.animals[0].gender} age={this.state.animals[0].age} location={this.state.location} characteristics={this.state.animals[0].characteristics}>
        {this.state.description}
      </Listingcontent>
    )}
    else{
      content = (<div></div>)
    }
    var comment
    if(this.state.title){comment = (
      <Listingcomments comments={this.state.comments}/>
    )}
    else{
      comment = (<div></div>)
    }
    var user
    if(this.state.title){user =(
      <Listinguser user={this.state.author}/>
    )}
    else{
      user = (<div></div>)
    }
      return (
        <div>
          <center><label for="formGroupExampleInput"><font size="6"><b>{this.state.title}</b></font></label></center>
          <div className="col-md-2">
          </div>

          <div className="col-md-2">
            {user}
            {comment}

          </div>

          <div className="col-md-6">
            {content}
            <Commentbox onClick={(e, comment) => this.onCommentPost(e, comment)}/>
          </div>
        </div>
      )
  }
}
