import React from 'react';

export default class Listform extends React.Component{
  render(){
    return(
      <div className = "container">
        <div className = "row">


          <div className="col-md-2">

          </div>

            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-body .panel-body">

                  <form>
                    <div className="form-inline .forminline">
                      <div className="form-group .form-group">
                        <label for="formGroupExampleInput">Type</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="(eg. cat, dog)"/>
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Breed</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="(eg. siamese)"/>
                      </div>
                    </div>

                    <label for="exampleTextarea">Gender</label>
                    <div className="form-check form-check-inline .form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="genderRadio1" value="Male"/> Male
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="genderRadio2" value="Female"/> Female
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="genderRadio3" value="Unknown"/> Unknown
                      </label>
                    </div>

                    <label for="exampleTextarea">Age</label>
                    <div className="form-check form-check-inline .form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio1" value="Infant"/> Infant
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio2" value="Young"/> Young
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio3" value="Adult"/> Adult
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio4" value="Senior"/> Senior
                      </label>
                    </div>

                    <div className="form-group">
                      <label for="formGroupExampleInput2">Location</label>
                      <input type="text" className="form-control" id="locationInput" aria-describedby="locationHelp" placeholder="Enter location"/>
                      <small id="locationHelp" className="form-text text-muted">City, State or Zip.</small>
                    </div>


                    <div className="form-group list-description">
                      <label for="descriptionTextarea">Description</label>
                      <textarea className="form-control" id="desctriptionTextarea" placeholder="Enter description" rows="10"></textarea>
                    </div>

                    <div className="form-group">
                      <label for="characteristicsInput">Key characteristics</label>
                      <input type="text" className="form-control" id="characteristicsInput" aria-describedby="characteristicHelp" placeholder="Enter characteristics"/>
                      <small id="characteristicHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
                    </div>

                    <label for="exampleTextarea">Is this pet part of a litter?</label>
                    <div className="form-check form-check-inline .form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio1" value="Infant"/> Yes
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="ageRadio2" value="Young"/> No
                      </label>
                    </div>


                    <div className="form-group">
                      <label for="exampleInputFile">File input</label>
                      <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                      <small id="fileHelp" className="form-text text-muted">Add a picture of your pet!</small>
                    </div>

                    <div className= "pull-right">
                      <button className="btn btn-primary" type="submit" href="listing.html" role="button">View listing</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
