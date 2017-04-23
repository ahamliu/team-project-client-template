import React from 'react';
import WishList from './wishList.js'
import PostHistoryS from './postHistoryS.js'
import PostHistoryC from './postHistoryC.js'
import {getWishListByUserId} from '../server'



export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  componentDidMount() {
    getWishListByUserId(this.props.user, (wishListData) => {
    this.setState(wishListData);
  });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <div className= "row wishHistoryBorder">
              <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> Wish List
                <div className= "col-md-12">
                  <div className= "row panel_padding">
                    {this.state.contents.map((wishListItem) => {
                      return (
                        <WishList key={wishListItem._id} data={wishListItem}></WishList>
                      );
                    })}    
                    </div>
                </div>
            </div>
            <div className= "row">
              <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Post History
              <div className="col-md-12">
                <div className= "row panel_padding">
                  <PostHistoryS date="February 29, 2016" location="Amherst, MA">Succeeded: Adopted <a href="#">Doge</a> from <a href="#">Duncan</a>
                  </PostHistoryS>
                </div>

                <div className= "row">
                  <PostHistoryC date="November 25, 2012" location="Jinan">Canceled: Gived away <a href="#">Kokoro</a> to <a href="#">Guangyu Xu</a>
                  </PostHistoryC>
                </div>
            </div>
          </div>
        </div>
      </div>



    )
  }
}
