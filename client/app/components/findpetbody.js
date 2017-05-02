import React from 'react';

import FindpetFields from './findpetfields.js';
import ResultList from './resultlist.js';

export default class FindpetBody extends React.Component{
  constructor(props) {
    super(props);
    this.callbackToFields = this.callbackToFields.bind(this);
    this.state = {
      contents: []
    };
  }

  callbackToFields(data) {
    this.setState(data);
    console.log(this.state);
  }

  render(){
    var callbackToFields = this.callbackToFields;
    return (
      <div>
        <div className="col-md-3">
          <FindpetFields callbackToFields={callbackToFields.bind(this)} />,
        </div>
        <div className="col-md-6">
          <ResultList />
        </div>
      </div>
     )
  }
}
