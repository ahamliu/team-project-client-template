import React from 'react';

export default class FindpetFields extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      typeName: "",
      subtypeName: "",
      isInfant: false,
      isYoung: false,
      isAdult: false,
      isSenior: false,
      isMale: false,
      isFemale: false,
      isUnknown: false,
      characteristicsName: ""
    };
  }

  handleLocation(e) {
    this.setState({ locationName: e.target.value });
  }
  handleType(e) {
    this.setState({ typeName: e.target.value });
  }
  handleSubtype(e) {
    this.setState({ subtypeName: e.target.value });
  }
  handleInfant(e) {
    if(e.target.checked) this.setState({ isInfant: true });
  }
  handleYoung(e) {
    if(e.target.checked) this.setState({ isYoung: true });
  }
  handleAdult(e) {
    if(e.target.checked) this.setState({ isAdult: true });
  }
  handleSenior(e) {
    if(e.target.checked) this.setState({ isSenior: true });
  }
  handleMale(e) {
    if(e.target.checked) this.setState({ isMale: true });
  }
  handleFemale(e) {
    if(e.target.checked) this.setState({ isFemalwe: true });
  }
  handleUknown(e) {
    if(e.target.checked) this.setState({ isUnknown: true });
  }
  handleCharacteristics(e) {
    this.setState({ characteristicsName: e.target.value });
  }


// When search button is pushed
  handleSearch(e){
    e.preventDefault();
    var locationVal = this.state.locationName.trim();
    var typeVal = this.state.typeName.trim();
    var subtypeVal = this.state.subtypeName.trim();
    var ageVal;
    var genderVal;
    if(this.state.isInfant === true) ageVal = "infant";
    else if(this.state.isYoung === true) ageVal = "young";
    else if(this.state.isAdult === true) ageVal = "adult";
    else if(this.state.isSenior === true) ageVal = "senior";

    if(this.state.isMale === true) genderVal = "male";
    else if(this.state.isFemale === true) genderVal = "female";
    else if(this.state.isUnknown === true) genderVal = "unknown";

    var characteristicsVal = this.state.characteristicsName.trim();

    if(locationVal !== "" && typeVal !== "" && subtypeVal !== "" && genderVal !== "" && characteristicsVal !== ""){
      console.log("TEST"+locationVal + typeVal + subtypeVal + ageVal + genderVal + characteristicsVal);
    }
  }

  render(){
      return (
        <form>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" placeholder="Enter location"
               name="locationName" value={this.state.location} onChange={(e) => this.handleLocation(e)} />
             <small className="form-text text-muted">City, State or Zip.</small>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="typeName" value={this.state.type} onChange={(e) => this.handleType(e)}>
              <option value="any">Any</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="smallandfluffy">Small and fluffy</option>
              <option value="horse">Horse</option>
              <option value="reptile">Reptile</option>
              <option value="aquatic">Aquatic</option>
              <option value="pig">Pig</option>
              <option value="barnyard">Barnyard</option>
              <option value="exotic">Exotic</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sub-type (breed)</label>
            <input type="text" className="form-control" placeholder="Enter breed" name="subtypeName"
              value={this.state.subtype} onChange={(e) => this.handleSubtype(e)} />
          </div>

          <row>
            <div className= "col-md-6">
              <div className= "form-group">
                <label htmlFor="age">Age</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isInfant" checked={this.state.isInfant}
                      onChange={(e) => this.handleInfant(e)} /> infant
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isYoung" checked={this.state.isYoung}
                      onChange={(e) => this.handleYoung(e)} /> Young
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isAdult" checked={this.state.isAdult}
                      onChange={(e) => this.handleAdult(e)}/> Adult
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isSenior" checked={this.state.isSenior}
                      onChange={(e) => this.handleSenior(e)} /> Senior
                  </label>
                </div>
              </div>
            </div>
            <div className= "col-md-6">
              <div className= "form-group">
                <label htmlFor="age">Gender</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isMale" checked={this.state.isMale}
                      onChange={(e) => this.handleMale(e)}/> Male
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isFemale" checked={this.state.isFemale}
                      onChange={(e) => this.handleFemale(e)}/> Female
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isUnknown" checked={this.state.isUnknown}
                      onChange={(e) => this.handleUknown(e)} /> Unknown
                  </label>
                </div>
              </div>
            </div>
          </row>
          <row>
            <div className="form-group pull-left">
              <label htmlFor="characteristics">Characteristics</label>
              <input type="text" className="form-control" placeholder="Enter characteristics" name="characteristicName"
                value={this.state.characteristic} onChange={(e) => this.handleCharacteristics(e)} />
              <small id="characteristicsHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
            </div>
            <br />
            <div className="btn-default pull-right" onClick={(e) =>this.handleSearch(e)}>Find</div>
          </row>
        </form>
    )
  }
}
