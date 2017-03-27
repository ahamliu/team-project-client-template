import React from 'react';

export default class Result extends React.Component{
  render(){
      return (
      <div>
        <div className= "panel-body">
          <ul className="media-list">
            <li className="media">
              <div className="media-left">
                <img className="img-rounded" src={this.props.image} />
              </div>
              <div className="media-body">
                <div className="col-md-6">
                  <ul className="result-list-formatting">
                    <li>
                      <a href = "listing.html">{this.props.name}</a>
                    </li>
                    <li>
                      Location: {this.props.location}
                    </li>
                    <li>
                      Type: {this.props.type}
                    </li>
                    <li>
                      Breed: {this.props.breed}
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="result-list-formatting">
                    <li>
                      <br />
                    </li>
                    <li>
                      Age: {this.props.age}
                    </li>
                    <li>
                      Gender: {this.props.gender}
                    </li>
                    <li>
                      Characteristics: {this.props.characteristics}
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
