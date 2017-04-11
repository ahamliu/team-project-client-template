import React from 'react';
import List from './list.js'


export default class ListPage extends React.Component {
  render() {
    return(
      <div>
        <div id="db-reset"></div>
        <List />
      </div>
    )
  }
}
