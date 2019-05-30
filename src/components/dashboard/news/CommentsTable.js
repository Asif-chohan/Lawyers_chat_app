import React, {Component} from 'react';
import CommentsCell from './CommentsCell';


let counter = 0;

function createData(name, desc, image) {
  counter += 1;
  return {id: counter, name, desc, image};
}

class PopularAuthorsTable extends Component {
  state = {
    data: [
      createData('John Smith commented on 4 keys to make your business unique', 'Thank you for posting such a wonderful content. The writing was outstanding. Subscribed to latest from you as well :)', require('assets/images/userAvatar/guptil.jpg'), '45'),
      createData('Alex Dolgove commented on 4 keys to make your business unique', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making ', require('assets/images/userAvatar/avator14.jpg'), '73'),
      createData('Domnic Brown commented on 4 keys to make your business unique', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form', require('assets/images/userAvatar/domnic-harris2.jpg'), '13'),
    ],
  };

  render() {
    const {data} = this.state;
    return (

      <div className="jr-comments">
        {data.map(data => {
          return (
            <CommentsCell key={data.id} data={data}/>
          );
        })}
      </div>
    );
  }
}

export default PopularAuthorsTable;