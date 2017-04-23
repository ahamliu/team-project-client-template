import React from 'react';

export default class AnimalList extends React.Component {
  render() {
    return (
      <ul className="left-column-list">
        {React.Children.map(this.props.children, function(child) {
          return (
            <li className="media">
              {child}
            </li>
          )
        })}
      </ul>
    )
  }
}
