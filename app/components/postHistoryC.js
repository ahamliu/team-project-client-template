import React from 'react';

export default class PostHistoryC extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="media">
            <div className="media-left"><span className="glyphicon glyphicon-remove"></span></div>
            <div className="media-body">
              <div className="row">
                <div className="col-md-12 wish_list-time">
                  {this.props.date} - {this.props.location}
                </div>
              </div>{this.props.children}
          </div>
        </div>
      </div>
    </div>

    )
  }
}
