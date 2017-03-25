import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import Listing from './components/listing.js';
import List from './components/list.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('listing') !== null) {
  ReactDOM.render(
    <Listing />,
    document.getElementById('listing')
  );
}
else if (document.getElementById('list') !== null) {
  ReactDOM.render(
    <List />,
    document.getElementById('list')
  );
}
