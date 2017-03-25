import React from 'react'

export default class Listingcomments extends React.Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Comments</div>
        <div className="panel-body comments-body">

          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Someone1</a> Nunc tincidunt nisl massa, eu interdum turpis tempus ac.
              </div>
            </li>
          </ul>
          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Someone2</a> Proin in rhoncus metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam posuere luctus fermentum.
              </div>
            </li>
          </ul>
          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Someone3</a> Vivamus ut porttitor odio. Vivamus sed massa diam.
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
