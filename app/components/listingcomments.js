import React from 'react'

export default class Listingcomments extends React.Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">Comments</div>
        <div className="panel-body comments-body">

          <ul className="media-list">
            {this.props.comments.map((comment) => {
              return (
                <li className="media" key={comment._id}>
                  <div className="media-left media-top">
                  </div>
                  <div className="media-body">
                    <a href="#">{comment.author}</a> {comment.text}
                  </div>
                </li>
              )

            })}

          </ul>
        </div>
      </div>
    )
  }
}
