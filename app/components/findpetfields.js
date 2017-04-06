import React from 'react';

export default class FindpetFields extends React.Component{
  render(){
      return (
        <form>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" id="location" aria-describedby="locationHelp" placeholder="Enter location" />
            <small id="locationHelp" className="form-text text-muted">City, State or Zip.</small>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select className="form-control" id="type">
              <option>Any</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Small and fluffy</option>
              <option>Horse</option>
              <option>Reptile</option>
              <option>Aquatic</option>
              <option>Pig</option>
              <option>Barnyard</option>
              <option>Exotic</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group disabled">
            <label htmlFor="sub-type">Sub-type (breed)</label>
            <select className="form-control" id="sub-type">
              <option>Please select type</option>
            </select>
          </div>

          <row>
            <div className= "col-md-6">
              <div className= "form-group">
                <label htmlFor="age">Age</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="ageCheckboxI" value="optionInfant" /> infant
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="ageCheckboxY" value="optionYoung" /> Young
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="ageCheckboxA" value="optionAdult" /> Adult
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="ageCheckboxS" value="optionSenior" /> Senior
                  </label>
                </div>
              </div>
            </div>
            <div className= "col-md-6">
              <div className= "form-group">
                <label htmlFor="age">Gender</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="genderCheckboxM" value="optionMale" /> Male
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="genderCheckboxF" value="optionFemale" /> Female
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" id="genderCheckboxU" value="optionUknown" /> Unknown
                  </label>
                </div>
              </div>
            </div>
          </row>

          <div className="form-group pull-left">
            <label htmlFor="characteristics">Characteristics</label>
            <input type="email" className="form-control" id="characteristic" aria-describedby="characteristicsHelp" placeholder="Enter characteristics" />
            <small id="characteristicsHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
          </div>
        </form>
    )
  }
}
