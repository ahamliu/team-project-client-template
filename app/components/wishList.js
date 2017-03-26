import React from 'react';

export default class WishList extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-10 wish_list-time">
                  {this.props.date} - {this.props.location}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">{this.props.children}</div>
          </div>
        </div>
      </div>

    )
  }
}
