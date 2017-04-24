import React from 'react';
import {getStats} from '../server.js'




export default class RightColumn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      "listing": "",
      "users": "",
      "animal": ""
    }
  }

  componentDidMount(){
    console.log("test")
    console.log(getStats("animal"))
    this.setState({"listing":getStats("listing")})
    this.setState({"users":getStats("user")})
    this.setState({"animal":getStats("animal")})
    console.log(this.state)
  }

  render() {
    return (
      <div>
      <div className="row potm">
        <div className="panel panel-default statistics-styling">
            <h3 className="panel-title text-center">Statistics</h3>
            <div className="panel-body">
              <ul>
                <li>
                  Total # of adoptions: 0
                </li>
                <li>
                  # of registered users: {this.state.users}
                </li>
                <li>
                  # of adoptable pets: {this.state.animal}
                </li>
              </ul>
            </div>
        </div>
      </div>

      <div className="row potm">
          <div className="col-md-12">

              <h4 className="text-center">Pet of the Month</h4>
              <div className="media">
                  <div className="media-left">
                      <img className="media-object potm-image img-rounded" src="img/potm.jpeg" />
                  </div>
                  <div className="media-body">
                      <h5 className="potm-title">name</h5>
                      <p className="potm-text">
                          Dr Snakeman
                      </p>
                      <h5 className="potm-title">gender</h5>
                      <p className="potm-text">
                          ???
                      </p>
                      <h5 className="potm-title">species</h5>
                      <p className="potm-text">
                          snake
                      </p>
                  </div>
              </div>
              <p className="potm-descript">
                  "found in my kitchen pls come pick up. txt or call anytime"
              </p>
              <a className="btn btn-primary btn-block potm-button" href="#" role="button">Interested?</a>

          </div>
      </div>
      </div>
    );
    }
}
