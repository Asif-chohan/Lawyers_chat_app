import React from "react";

import Widget from "components/Widget";
import Avatar from '@material-ui/core/Avatar';

const userImageList = [
  {
    id: 1,
    image: require('assets/images/userAvatar/domnic-brown.png'),
  },
  {
    id: 2,
    image: require('assets/images/userAvatar/jimmy-jo.jpg'),
  },
  {
    id: 3,
    image: require('assets/images/userAvatar/domnic-harris.jpg'),

  },
  {
    id: 4,
    image: require('assets/images/userAvatar/stella-johnson.png'),
    name: 'Mila Alba',
    rating: '5.0',
    deals: '27 Deals'
  },
];

const NewCustomers = () => {
  return (
    <Widget title="New Customers" styleName="jr-card-metrics p-4">
      <div className="jr-customers">
        <ul className="list-inline mb-0">
          {userImageList.map((user, index) =>
            <li className="list-inline-item mr-0" key={index}>
              <Avatar className="size-50" src={user.image}/>
            </li>
          )
          }
        </ul>
      </div>
    </Widget>
  );
}


export default NewCustomers;
