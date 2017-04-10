import React from 'react';
import StatusUpdate from './statusupdate.js'
import {unlikeFeedItem, likeFeedItem} from '../server'

export default class RatingThread extends React.Component {
  constructor(props) {
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    this.state = props.data;
  }
  handleLikeClick(clickEvent) {
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
      var callbackFunction = (updatedLikeCounter) => {
        this.setState({likeCounter: updatedLikeCounter});
      };
      if (this.didUserLike()) {
        unlikeFeedItem(this.state._id, 4, callbackFunction);
      } else {
        likeFeedItem(this.state._id, 4, callbackFunction);
      }
    }
  }
  didUserLike() {
    var likeCounter = this.state.likeCounter;
    var liked = false;
    for (var i = 0; i < likeCounter.length; i++) {
      if (likeCounter[i]._id === 4) {
        liked = true;
        break;
      }
    }
    return liked;
  }

  render() {
    var data = this.props.data;
    var contents;
    var likeButtonText = "Like";
    if (this.didUserLike()) {
      likeButtonText = "Unlike";
    }
    switch(data.type) {
      case "statusUpdate":
        contents = (
          <StatusUpdate key={data._id} author={data.contents.author} postDate={data.contents.postDate} location={data.contents.location}>
            {data.contents.contents.split("\n").map((line, i) => {
              // Note: 'i' is the index of line in data.contents.contents.
              return (
                <p key={"line" + i}>{line}</p>
              );})}
          </StatusUpdate>
        );
        break;
      default:
        throw new Error("Unknown FeedItem: " + data.type);
    }
    return (
      <div className="panel panel-default">
        <div className="panel-body">{contents}
            <div className="row">
              <div className="col-md-12"><hr />
                <ul className="list-inline thumb_Padding">
                  <li>
                    <a href="#" onClick={(e) => this.handleLikeClick(e)}>
                  <span className="glyphicon glyphicon-thumbs-up"></span> {likeButtonText}
                </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>

    )
  }
}
