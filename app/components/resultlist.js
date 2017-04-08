import React from 'react'
import Result from './result.js'

export default class ResultList extends React.Component{
  render(){
    return (
      <div>
        <div className= "panel panel-default results-formatting">
          <div className= "panel-header">
            <h3>Results</h3>
          </div>
        </div>
        <div className= "panel-body results-formatting">
          <ul className="media-list">
            <li className="media">
              <Result name="Randy" location="Cleveland, OH" Type="Dog"
                 breed="Beagle" age="Young" gender="Male" characteristics="Intelligent, Friendly" />
            </li>
            <li className="media">
              <Result name="Ekans" location="Amherst, MA" Type="Snake"
                 breed="Milk Snake" age="Adult" gender="Unknown" characteristics="Untrustworthy" />
            </li>
            <li className="media">
              <Result name="Harambe" location="Cincinnati, OH" Type="Exotic"
                 breed="Western Lowland Gorilla" age="Adult" gender="Male" characteristics="Heroic" />
            </li>
          </ul>
        </div>
      </div>
     )
  }
}
