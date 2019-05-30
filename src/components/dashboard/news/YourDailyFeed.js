import React, {Component} from 'react';
import YourDailyFeedCell from './YourDailyFeedCell';


let counter = 0;

function createData(title, time, image, isSocial) {
  counter += 1;
  return {id: counter, title, time, image, isSocial};
}

class YourDailyFeed extends Component {
  state = {
    feeds: [
      createData([<span className="jr-link" key={7}>Guptil</span>, " has sent you an invitation to join project ",
        <span
          className="jr-link"
          key={1}>Mouldifi</span>,], 'Today 06:30 pm - 12.10.17', require('assets/images/userAvatar/guptil-3.jpg')),
      createData([<span className="jr-link" key={2}>Mich</span>, " uploaded 6 new photos in ",
        <span className="jr-link" key={3}>Art
          Lovers</span>, ' group'], 'Today 06:30 pm - 12.10.17', require('assets/images/userAvatar/mich-1.jpg')),
      createData([<span
        className="jr-link"
        key={4}>Joshua </span>, 'has shared a post saying this is bigening'], 'Today 06:30 pm - 12.10.17', require('assets/images/userAvatar/joshua.jpg'), 'true'),
      createData(["Artist of the month ", <span className="jr-link" key={5}>Domnic
        Harris</span>, ' awarded today'], 'Today 06:30 pm - 12.10.17', require('assets/images/userAvatar/domnic-harris2.jpg')),
      createData([<span className="jr-link" key={6}>Domnic
        harris</span>, ' commented on 4 keys to make your business unique'], 'Today 06:30 pm - 12.10.17', require('assets/images/userAvatar/michael-dogov.jpg')),
    ],
  };

  render() {
    const {feeds} = this.state;
    return (

      <div className="pb-3">
        {feeds.map(feed => {
          return (
            <YourDailyFeedCell key={feed.id} feed={feed}/>
          );
        })}
      </div>
    );
  }
}

export default YourDailyFeed;