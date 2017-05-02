import React from 'react'
import Result from './result.js'

export default class ResultList extends React.Component{
  render(){
    var results;
    if(this.props.haveresults){

      results = (
        <ul className="media-list">
          <li className="media" key={this.props.results[0]._id}>
            <Result image={this.props.results[0].image} name={this.props.results[0].name} location={this.props.results[0].location} type={this.props.results[0].type}
               breed={this.props.results[0].subtype} age={this.props.results[0].age} gender={this.props.results[0].gender} characteristics={this.props.results[0].characteristics} />
          </li>
          <li className="media" key={this.props.results[1]._id}>
            <Result image={this.props.results[1].image} name={this.props.results[1].name} location={this.props.results[1].location} type={this.props.results[1].type}
               breed={this.props.results[1].subtype} age={this.props.results[1].age} gender={this.props.results[1].gender} characteristics={this.props.results[1].characteristics} />
          </li>
          <li className="media" key={this.props.results[2]._id}>
            <Result image={this.props.results[2].image} name={this.props.results[2].name} location={this.props.results[2].location} type={this.props.results[2].type}
               breed={this.props.results[2].subtype} age={this.props.results[2].age} gender={this.props.results[2].gender} characteristics={this.props.results[2].characteristics} />
          </li>
        </ul>
      )
    }
    return (
      <div>
        <div className= "panel panel-default results-formatting">
          <div className= "panel-header">
            <h3>Results</h3>
          </div>
        </div>
        <div className= "panel-body results-formatting">
                  {results}
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
