import React from 'react';
import Rating2Thread from './rating2Thread.js'





export default class Rating2 extends React.Component {
  render() {
    return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <span className="glyphicon glyphicon-stats rating" aria-hidden="true">Ratings</span>
              <Rating2Thread author="Duncan" postDate="Yesterday at 2:29pm" location="Amherst, MA" noagree="29" nodisagree="2">
                I am a big fan of Cardie!</Rating2Thread>
              <Rating2Thread author="Anonymous" postDate="September 1, 2012" location="Austin, TX" noagree="0" nodisagree="1">
                  Don't trust Cardie, he is atrocious.</Rating2Thread>
            </div>
          </div>
        </div>
    )
  }
}
