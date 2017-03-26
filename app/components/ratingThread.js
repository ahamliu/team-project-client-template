import React from 'react';

export default class RatingThread extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-10">
              <div className="media">
                <div className="media-left media-top">
                  PIC
                </div>
                <div className="media-body">
                  <a href="#">{this.props.author}</a>
                  <br /> {this.props.postDate} · {this.props.location}
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <span className="caret pull-right"></span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">{this.props.children}</div>
          </div>

            <div className="row">
              <div className="col-md-12"><hr />
                <ul className="list-inline thumb_Padding">
                  <li>
                    <a href="#"><span className="glyphicon glyphicon-thumbs-up">{this.props.noagree}</span></a>
                  </li>
                  <li>
                    <a href="#"><span className="glyphicon glyphicon-thumbs-down">{this.props.nodisagree}</span></a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>

    )
  }
}
