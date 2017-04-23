import React from 'react';

export default class Profile2 extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 font">
            <img src={this.props.image} width="100%" className="img-rounded"/>{this.props.name}
          </div>
          <div className="col-md-12">
           <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> mobile: {this.props.mobile}<br></br>
           <span className="glyphicon glyphicon-phone" aria-hidden="true"></span> email: {this.props.email}<br></br>
           <a href="#"><span className="glyphicon glyphicon-pencil pull-right">edit</span></a>

          </div>
        </div>
        <div className="row border">
          <div className="col-md-12">
            <span className="glyphicon glyphicon-user" aria-hidden="true">Bio</span><br></br>
            {this.props.children}<br></br>
            <a href="#"><span className="glyphicon glyphicon-pencil pull-right">edit</span></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span className="glyphicon glyphicon-time" aria-hidden="true"></span> Joined {this.props.time}
          </div>
        </div>
      </div>
    )
  }
}
