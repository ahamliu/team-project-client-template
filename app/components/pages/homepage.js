import React from 'react';
import LeftColumn from '../leftcolumn.js';
import RightColumn from '../rightcolumn.js';
import NewsFeed from '../newsfeed.js'

export default class HomePage extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col-md-3" id="leftcolumn">
          <LeftColumn />
        </div>

        <div className="col-md-6" id="newsfeed">
          <NewsFeed />
        </div>

        <div className="col-md-3" id="rightcolumn">
          <RightColumn />
        </div>
      </div>
    )
  }
}
