import React from 'react';

export default class Animal extends React.Component {
  render() {
    return (
      <div>
      <div className="media left-column-list-item">
          <div className="media-left media-middle">
              <img className="media-object listing-img" src={this.props.image} />
          </div>
          <div className="media-body media-middle">
              {this.props.name}
          </div>
      </div>
      </div>
    )
  }
}
