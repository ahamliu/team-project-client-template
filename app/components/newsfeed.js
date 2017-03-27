
// export default class NewsFeed extends React.Component {
//   render() {
//     return (
//       <div>
//       <div className="col-md-6">
//           <div id="news" style="overflow-y: hidden; height:400px;">
//             <h1 className="home-header">News</h1>
//               <ul className="media-list">
//                   <li className="media">
//                       <div className="media-left media-top">
//                           <span className="glyphicon glyphicon-hand-right"></span>
//                       </div>
//                       <div className="media-body">
//                           <a href="#">Panda costumes used to fool four-month-old cub</a>: The four-month-old cub is the first to be trained for reintroduction into the wild by the Hetaoping Research and Conservation Center for the Giant Panda in Wolong
//                           National Nature Reserve in Sichuan province, China.
//                       </div>
//                   </li>
//
//                   <li className="media">
//                       <div className="media-left media-top">
//                           <span className="glyphicon glyphicon-hand-right"></span>
//                       </div>
//                       <div className="media-body">
//                           <a href="#">Meet the two-legged pig</a>: The 10-month old piggy is somewhat of a celebrity and the local villagers have fondly named her ‘Zhu Jianqiang.’
//                       </div>
//                   </li>
//
//                   <div style="height:1000px;">
//                   </div>
//                   this is overflow.
//               </ul>
//           </div>
//       </div>
//     </div>
//     )
//   }
// }
import React from 'react';

 // style="overflow-y: hidden; height:400px;"


                   // <div style="height:1000px;">
                   // </div>
                   // this is overflow.

export default class NewsFeed extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div id="news">
            <h1 className="home-header">News</h1>
            <ul className="media-list">
              <li className="media">
                <div className="media-left media-top">
                  <span className="glyphicon glyphicon-hand-right"></span>
                </div>
                <div className="media-body">
                  <a href="#">Panda costumes used to fool four-month-old cub</a>: The four-month-old cub is the first to be trained for reintroduction into the wild by the Hetaoping Research and Conservation Center for the Giant Panda in Wolong
                    National Nature Reserve in Sichuan province, China.
                  </div>
                </li>

                <li className="media">
                  <div className="media-left media-top">
                    <span className="glyphicon glyphicon-hand-right"></span>
                  </div>
                  <div className="media-body">
                    <a href="#">Meet the two-legged pig</a>: The 10-month old piggy is somewhat of a celebrity and the local villagers have fondly named her ‘Zhu Jianqiang.’
                    </div>
                  </li>
                                    <div id="news-overflow">
                                    </div>

                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
