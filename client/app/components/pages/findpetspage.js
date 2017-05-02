import React from 'react';
import FindpetFields from '../findpetfields.js';
import ResultList from '../resultlist.js';

export default class FindPetsPage extends React.Component {
  render() {
    return(
        <div className="row">
          <div>
            <FindpetFields />
          </div>
          <div className="col-md-3">
          </div>
        </div>
    )
  }
}
