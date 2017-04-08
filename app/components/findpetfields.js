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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.type;
      value === 'checkbox'? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
  }
// When search button is pushed
  handleSearch(e){
    e.preventDefault();
    var locationText = this.state.location.trim();
    var typeText = this.state.type.trim();
    var subtypeText = this.state.subtype.trim();
    var ageText = this.state.age.trim();
    var genderText = this.state.gender.trim();
    var characteristicsText = this.state.characteristics.trim();
    if(locationText !== ""){

    }
  }

// Handle changes in input text areas
  handleChange(e) {
   e.preventDefault();
   this.setState({value: e.target.value});
 }

  render(){
      return (
        <form>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" className="form-control" placeholder="Enter location"
               name="locationName" value={this.state.location} onChange={this.handleInputChange} />
             <small className="form-text text-muted">City, State or Zip.</small>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select className="form-control" name="typeName" value={this.state.type}>
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
              value={this.state.subtype} onChange={this.handleInputChange} />
          </div>

          <row>
            <div className= "col-md-6">
              <div className= "form-group">
                <label htmlFor="age">Age</label>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isInfant" checked={this.state.isInfant}
                      onChange={this.handleInputChange} /> infant
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isYoung" checked={this.state.isYoung}
                      onChange={this.handleInputChange} /> Young
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isAdult" checked={this.state.isAdult}
                      onChange={this.handleInputChange}/> Adult
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isSenior" checked={this.state.isSenior}
                      onChange={this.handleInputChange} /> Senior
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
                      onChange={this.handleInputChange}/> Male
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isFemale" checked={this.state.isFemale}
                      onChange={this.handleInputChange}/> Female
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="isUnknown" checked={this.state.isUnknown}
                      onChange={this.handleInputChange} /> Unknown
                  </label>
                </div>
              </div>
            </div>
          </row>

          <div className="form-group pull-left">
            <label htmlFor="characteristics">Characteristics</label>
            <input type="text" className="form-control" placeholder="Enter characteristics" name="characteristicName"
              value={this.state.characteristic} onChange={this.handleInputChange} />
            <small id="characteristicsHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
          </div>
        </form>
    )
  }
}
