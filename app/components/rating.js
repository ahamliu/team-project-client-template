import React from 'react';
import RatingThread from './ratingThread.js'
import RatingEntry from './ratingEntry.js'
import {getFeedData,postStatusUpdate} from '../server';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  refresh() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

    onPost(postContents) {
      // Send to server.
      // We could use geolocation to get a location, but let's fix it to Amherst
      // for now.
      postStatusUpdate(4, "Amherst, MA", postContents, () => {
        // Database is now updated. Refresh the feed.
        this.refresh();
      });
    }

    componentDidMount() {
      this.refresh();
    }

  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <span className="glyphicon glyphicon-stats rating" aria-hidden="true">Ratings</span>
                {this.state.contents.map((feedItem) => {
                  return (
                    <RatingThread key={feedItem._id} data={feedItem} />
                  );
                })}


              <RatingEntry onPost={(postContents) => this.onPost(postContents)}/>
            </div>
          </div>
        </div>
    )
  }
}
