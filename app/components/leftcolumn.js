import React from 'react';
import Animal from './animal.js';
import AnimalList from './animallist.js';

export default class LeftColumn extends React.Component {
  render() {
    return (
      <div>
      <div className="row animals-title">
          <h5>Your Animals</h5>
      </div>

      <div className="row">
          <div className="col-md-12">
              <ul className="list-unstyled">
                      <h5><span className="label label-default left-column-list-label">Listed</span></h5>

                       <AnimalList>
                          <Animal image="img/listed1.jpg" name="Cat&tube"></Animal>
                          <Animal image="img/listed2.jpg" name="nice dog"></Animal>
                       </AnimalList>


                      <h5><span className="label label-default left-column-list-label">Favorited</span></h5>

                      <AnimalList>
                         <Animal image="img/fav1.jpg" name="Smuggers"></Animal>
                         <Animal image="img/fav2.jpg" name="goat4u"></Animal>
                      </AnimalList>

              </ul>
          </div>
      </div>
      <div className="row animals-title">
          <h5>Animals in Your Area</h5>
      </div>
      <div className="row">
          <div className="col-md-12">
              <ul className="list-unstyled">

              <AnimalList>
                 <Animal image="img/fav1.jpg" name="Smuggers"></Animal>
                 <Animal image="img/fav2.jpg" name="goat4u"></Animal>
              </AnimalList>

              </ul>
          </div>
      </div>
    </div>
    )
  }
}
