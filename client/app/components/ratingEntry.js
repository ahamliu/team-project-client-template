import React from 'react';

export default class RatingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handlePost(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    var statusUpdateText = this.state.value.trim();
    if (statusUpdateText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */
      // Reset status update.
      this.props.onPost(statusUpdateText);
      this.setState({value: ""});
    }
  }

  handleChange(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    this.setState({value: e.target.value});
  }

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
                  <textarea className="form-control" rows="2" placeholder="What's on your mind?" value={this.state.value} onChange={(e) => this.handleChange(e)} />
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
                  <button type="button" className="btn btn-default" onClick={(e) => this.handlePost(e)}>
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
