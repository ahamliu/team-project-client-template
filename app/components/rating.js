import React from 'react';
import RatingThread from './ratingThread.js'
import RatingEntry from './ratingEntry.js'


export default class Rating extends React.Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <span className="glyphicon glyphicon-stats rating" aria-hidden="true">Ratings</span>
              <RatingThread author="Duncan" postDate="Yesterday at 2:29pm" location="Amherst, MA" noagree="29" nodisagree="2">
                I am a big fan of Cardie!</RatingThread>
              <RatingThread author="Anonymous" postDate="September 1, 2012" location="Austin, TX" noagree="0" nodisagree="1">
                  Don't trust Cardie, he is atrocious.</RatingThread>
              <RatingEntry />
            </div>
          </div>
        </div>
    )
  }
}
