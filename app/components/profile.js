import React from 'react';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-md-12 font">
          <img src={this.props.image} width="100%" className="img-rounded" />{this.props.name}</div>
        <div className="col-md-12">
         <a className="btn btn-default btn-block" href="#" role="button">Contact me!</a></div>
      </div>
      <div className="row border">
        <div className="col-md-12">
          <span className="glyphicon glyphicon-user" aria-hidden="true"></span> Bio<br></br>
          {this.props.children}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span> Joined {this.props.time}</div>
      </div>
      </div>
    )
  }
}
