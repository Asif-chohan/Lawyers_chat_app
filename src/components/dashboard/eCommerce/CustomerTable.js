import React, {Component} from 'react';
import CustomerCell from './CustomerCell';

let counter = 0;

function createData(name, userId, image, order) {
  counter += 1;
  return {id: counter, name, userId, image, order};
}

class CustomerTable extends Component {
  state = {
    data: [
      createData('John Smith', 'Co-Founder', require('assets/images/userAvatar/john-smith.png'), '3'),
      createData('Alex Dolgove', 'CEO', require('assets/images/userAvatar/alex-dolgove.png'), '1'),
      createData('Domnic Brown', 'Co-Founder', require('assets/images/userAvatar/domnic-brown.png'), '0'),
    ],
  };

  render() {
    const {data} = this.state;
    return (

      <table className="default-table table table-sm table-responsive-sm table-hover">
        <tbody>
        {data.map(data => {
          return (
            <CustomerCell key={data.id} data={data}/>
          );
        })}
        </tbody>
      </table>
    );
  }
}

export default CustomerTable;