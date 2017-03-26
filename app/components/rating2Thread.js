import React from 'react';

export default class Rating2Thread extends React.Component {
  render() {
    return (
      <div>
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
                    <span className="glyphicon glyphicon-thumbs-up">{this.props.noagree}</span>
                  </li>
                  <li>
                    <span className="glyphicon glyphicon-thumbs-down">{this.props.nodisagree}</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
        <div className="panel-footer">
          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Reply" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-share-alt"></span>
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>


      </div>

    </div>

    )
  }
}
