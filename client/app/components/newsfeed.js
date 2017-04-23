import React from 'react';
import NewsItem from './newsitem.js';


export default class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div id="news">
            <h1 className="home-header">News</h1>
            <ul>
            <NewsItem />
            </ul>
              </div>
            </div>
          </div>
        )
      }
    }
