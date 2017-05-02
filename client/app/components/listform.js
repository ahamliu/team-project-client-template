import React from 'react';
import {postListing} from '../server.js'

export default class Listform extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "name": "",
      "type": "",
      "breed": "",
      "gender": "",
      "age": "",
      "location": "",
      "description": "",
      "characteristics": "",
      "imgURL": "",
      "title": "",
      "success": false

    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick(e){
    e.preventDefault()
    postListing(this.state, 1, (data) => {
      console.log(data)
      this.setState({
        success: true
      })
    })
  }
  render(){
    var responseMSG
    if(this.state.success) {responseMSG = (<h2>Success!</h2>)}
    else{
      {responseMSG = <div></div>}
    }
    return(
      <div className = "container">
        <div className = "row">


          <div className="col-md-2">

          </div>

            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-body .panel-body">

                  <form>
                    {responseMSG}
                    <div className="form-inline .forminline">
                      <div className="form-group">
                        <label for="formGroupExampleInput">Title</label>
                        <input type="text" className="form-control" name="title" placeholder="(eg. greatest C A T)" onChange={(e) => this.handleChange(e)}/>
                      </div>
                      <div className="form-group .form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" name="name" placeholder="(eg. potato)" onChange={(e) => this.handleChange(e)}/>
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput">Type</label>
                        <input type="text" className="form-control" name="type" placeholder="(eg. cat, dog)" onChange={(e) => this.handleChange(e)}/>
                      </div>
                      <div className="form-group">
                        <label for="formGroupExampleInput2">Breed</label>
                        <input type="text" className="form-control" name="breed" placeholder="(eg. siamese)" onChange={(e) => this.handleChange(e)}/>
                      </div>
                    </div>

                    <label for="exampleTextarea">Gender</label>
                    <div className="form-check form-check-inline .form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="gender" value="Male" onChange={(e) => this.handleChange(e)}/> Male
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="gender" value="Female" onChange={(e) => this.handleChange(e)}/> Female
                      </label>
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="gender" value="Unknown" onChange={(e) => this.handleChange(e)}/> Unknown
                      </label>
                    </div>

                    <label for="exampleTextarea">Age</label>
                    <div className="form-check form-check-inline .form-check">
                      <label className="form-check-label">
                      <input type="text" className="form-control" name="age" placeholder="(eg. 999)" onChange={(e) => this.handleChange(e)}/>
                      </label>
                    </div>

                    <div className="form-group">
                      <label for="formGroupExampleInput2">Location</label>
                      <input type="text" className="form-control" name="location" aria-describedby="locationHelp" placeholder="Enter location" onChange={(e) => this.handleChange(e)}/>
                      <small id="locationHelp" className="form-text text-muted">City, State or Zip.</small>
                    </div>


                    <div className="form-group list-description">
                      <label for="descriptionTextarea">Description</label>
                      <textarea className="form-control" name="description" placeholder="Enter description" rows="10" onChange={(e) => this.handleChange(e)}></textarea>
                    </div>

                    <div className="form-group">
                      <label for="characteristicsInput">Key characteristics</label>
                      <input type="text" className="form-control" name="characteristics" aria-describedby="characteristicHelp" placeholder="Enter characteristics" onChange={(e) => this.handleChange(e)}/>
                      <small id="characteristicHelp" className="form-text text-muted">i.e. friendly, smelly, etc.</small>
                    </div>


                    <div className="form-group">
                      <label for="exampleInputFile">File input</label>
                      <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                      <small id="fileHelp" className="form-text text-muted">Add a picture of your pet!</small>
                    </div>

                    <div className= "pull-right">
                      <button className="btn btn-primary" type="submit" href="listing.html" role="button" onClick={(e) => this.handleClick(e)}>View listing</button>
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
