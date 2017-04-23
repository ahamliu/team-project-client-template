import React from 'react';

export default class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }
  render() {
    var data = this.props.data;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-10 wish_list-time">
                  {data.time} - {data.location}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">{data.content}</div>
          </div>
        </div>
      </div>

    )
  }
}
