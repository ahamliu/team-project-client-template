import React from 'react';

export default class Commentbox extends React.Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
              </div>
              <div className="form-group col-md-6">
                <label for="formGroupExampleInput2">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="(eg. @potato.com)"/>
              </div>
            </div>
            <div className="form-group list-description">
              <label for="exampleTextarea">Comment</label>
              <textarea className="form-control" id="exampleTextarea" placeholder="Enter comment..." rows="6"></textarea>
            </div>
            <div>
              <button className="btn btn-primary" type="submit" href="listing.html" role="button">Submit</button>
            </div>
          </form>
        </div>

      </div>
    )
  }
}
