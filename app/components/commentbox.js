import React from 'react';

export default class Commentbox extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      "name": "",
      "text": ""
    }
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" name="name" placeholder="Name" onChange={(e) => this.handleChange(e)}/>
              </div>
            </div>
            <div className="form-group list-description">
              <label for="exampleTextarea">Comment</label>
              <textarea className="form-control" name="text" placeholder="Enter comment..." rows="6" onChange={(e) => this.handleChange(e)}></textarea>
            </div>
            <div>
              <button className="btn btn-primary" type="submit" href="listing.html" role="button" onClick={(e) => this.props.onClick(e, this.state)}>Submit</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
