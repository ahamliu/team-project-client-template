import React from 'react';

export default class FindPetsPage extends React.Component {
  render() {
    return (
      <div>
        <div id="db-reset"></div>
          <div className="container-fluid">
            <div className="row">

              <div className="col-md-3">
                <form>
                  <div className="form-group">

                    <label for="location">Location</label>
                    <input type="text" className="form-control" id="location" aria-describedby="locationHelp" placeholder="Enter location"></input>
                    <small id="locationHelp" className="form-text text-muted">City, State or Zip.</small>
                  </div>

                  <div className="form-group">
                    <label for="type">Type</label>
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
                    <label for="sub-type">Sub-type (breed)</label>
                    <select className="form-control" id="sub-type" disabled>
                      <option>Please select type</option>
                    </select>
                  </div>


                  <row>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="age">Age</label>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="ageCheckboxI" value="optionInfant"> infant </input>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="ageCheckboxY" value="optionYoung"> Young </input>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="ageCheckboxA" value="optionAdult"> Adult </input>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="ageCheckboxS" value="optionSenior"> Senior </input>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="age">Gender</label>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="genderCheckboxM" value="optionMale"> Male </input>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="genderCheckboxF" value="optionFemale"> Female </input>
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="genderCheckboxU" value="optionUknown"> Unknown </input>
                          </label>
                        </div>
                      </div>
                    </div>
                  </row>

                  <div className="form-group pull-left">
                    <label for="characteristics">Characteristics</label>
                    <input type="email" className="form-control" id="characteristic" aria-describedby="characteristicsHelp" placeholder="Enter characteristics"></input>
                    <small id="characteristicsHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
                  </div>
                </form>
              </div>

              <div className="col-md-6">
                <div id="results"></div>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
      </div>
    )
  }
}
