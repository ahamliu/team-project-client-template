import React from 'react'
import Result from './result.js'

export default class ResultList extends React.Component{
  render(){
    var results = [];
    results = this.props.results;
    return (
      <div>
        <div className= "panel panel-default results-formatting">
          <div className= "panel-header">
            <h3>Results</h3>
          </div>
        </div>
        <div className= "panel-body results-formatting">
          <ul className="media-list">
            {results.forEach((result) => {
              return (
                <li className="media" key={result._id}>
                  <Result image={result.image} name={result.name} location={result.location} Type={result.type}
                     breed={result.breed} age={result.age} gender={result.gender} characteristics={result.characteristics} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
     )
  }
}
/*
<li className="media" key={result['000000000000000000000001']._id}>
  <Result image={result["000000000000000000000001"].image} name={result["000000000000000000000001"].name} location="Cleveland, OH" Type="Dog"
     breed="Beagle" age="Young" gender="Male" characteristics="Intelligent, Friendly" />
</li>
{this.props.results.map((result) => {
  return (
    <li className="media" key={result._id}>
      <Result image={result.image} name={result.name} location="Cleveland, OH" Type="Dog"
         breed="Beagle" age="Young" gender="Male" characteristics="Intelligent, Friendly" />
    </li>
  )
})}
*/
/*
<li className="media">
  <Result image="img/snake-thumbnail.jpg" name="Ekans" location="Amherst, MA" Type="Snake"
     breed="Milk Snake" age="Adult" gender="Unknown" characteristics="Untrustworthy" />
</li>
<li className="media">
  <Result image="img/harambe-thumbnail.jpg" name="Harambe" location="Cincinnati, OH" Type="Exotic"
     breed="Western Lowland Gorilla" age="Adult" gender="Male" characteristics="Heroic" />
</li>
*/
