import React, {Component} from 'react';
import ApplicationTableCell from './ApplicationTableCell';

let counter = 0;

function createData(name, description, image, time, price) {
  counter += 1;
  return {id: counter, name, description, image, time, price};
}

class AssignmentTable extends Component {
  state = {
    data: [
      createData('Saans Application', 'Renewal', require('assets/images/userAvatar/john-smith.png'), '6:06', '$54.20'),
      createData('Chatbull Application', 'Support', require('assets/images/userAvatar/alex-dolgove.png'), '9:20', '$25.12'),
      createData('Teri App', 'It was popularised in the 1960s with the', require('assets/images/userAvatar/domnic-brown.png'), '4:30', '$15.99'),
      createData('Mili Products', 'Marketing', require('assets/images/userAvatar/domnic-harris.jpg'), '9:20', '$21.25'),
      createData('G-axon Products', 'Service', require('assets/images/userAvatar/garry-sobars.jpg'), '4:30', '$2.99'),
      createData('Wallet Application', 'Renewal, a Latin professor', require('assets/images/userAvatar/stella-johnson.png'), '7:50', '$3.10'),
      createData('Chatbull Application', 'Support', require('assets/images/userAvatar/jimmy-jo.jpg'), '9:20', '$25.12'),
    ],
  };

  render() {
    const {data} = this.state;
    return (
      <div className="table-responsive-material">
        <table className="default-table table table-sm table-hover">
          <thead>
          <tr>
            <th>Application</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {data.map(data => {
            return (
              <ApplicationTableCell key={data.id} data={data}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AssignmentTable;