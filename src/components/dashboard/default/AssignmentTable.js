import React, {Component} from 'react';
import AssignmentTableCell from './AssignmentTableCell';

let counter = 0;

function createData(name, description, image, task, status) {
  counter += 1;
  return {id: counter, name, description, image, task, status};
}

class AssignmentTable extends Component {
  state = {
    data: [
      createData('John Smith', 'Efficiently rendering large', require('assets/images/userAvatar/john-smith.png'), '25/50', 'In Progress'),
      createData('Alex Dolgove', 'At Tata Projects, we are always striving', require('assets/images/userAvatar/alex-dolgove.png'), '50/50', 'Completed'),
      createData('Domnic Brown', 'It was popularised in the 1960s with the', require('assets/images/userAvatar/domnic-brown.png'), '75/100', 'In Progress'),
      createData('Domnic Harris', 'Many desktop publishing packages and web', require('assets/images/userAvatar/domnic-harris.jpg'), '29/65', 'Cancelled'),
      createData('Garry Sobars', 'There are many variations of passages of', require('assets/images/userAvatar/garry-sobars.jpg'), '20/120', 'In Progress'),
      createData('Stella Johnson', 'Richard McClintock, a Latin professor', require('assets/images/userAvatar/stella-johnson.png'), '29/56', 'In Progress'),
    ],
  };

  render() {
    const {data} = this.state;
    return (
      <div className="table-responsive-material">
        <table className="default-table assignment-table table">
          <thead>
          <tr>
            <th>Assignments</th>
            <th>Lead</th>
            <th className="text-center">Evolution</th>
            <th className="text-center">No. Tasks</th>
            <th className="status-cell text-right">Status</th>
          </tr>
          </thead>

          <tbody>
          {data.map(data => {
            return (
              <AssignmentTableCell key={data.id} data={data}/>
            );
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AssignmentTable;