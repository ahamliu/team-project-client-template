import React from 'react';
import {getUserById} from '../server'
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      time : "",
      fullName: "",
      bio: ""
    }
  }
  componentDidMount() {
    getUserById(this.props.user, (data) => {
       this.setState(data)
     })
  }
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-12 font">
          <img src={this.props.image} width="100%" className="img-rounded" />{this.state.fullName}</div>
        <div className="col-md-12">
         <a className="btn btn-default btn-block" href="#" role="button">Contact me!</a></div>
      </div>
      <div className="row border">
        <div className="col-md-12">
          <span className="glyphicon glyphicon-user" aria-hidden="true"></span> Bio<br></br>
          {this.state.bio}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span> Joined {this.state.time}</div>
      </div>
      </div>
    )
  }
}
