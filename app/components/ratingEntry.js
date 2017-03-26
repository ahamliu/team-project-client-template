import React from 'react';

export default class RatingEntry extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <ul className="nav nav-pills">
            <li role="presentation" className="active">
              <a href="#"><strong>positive</strong></a>
            </li>
            <li role="presentation">
              <a href="#">
                <strong>neutral</strong></a>
            </li>
            <li role="presentation">
              <a href="#"><strong>negative</strong></a>
            </li>
          </ul>
            <div className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <div className="form-group">
                  <textarea className="form-control textarea" rows="2" placeholder="Write your review here"></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-camera"></span>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pull-right">
                  <button type="button" className="btn btn-default">
                    Post
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>

    )
  }
}
