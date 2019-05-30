import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

class ChipsArray extends Component {
  state = {
    chipData: [
      {key: 0, name: 'Domnic Harris', image: require('assets/images/userAvatar/domnic-harris.jpg')},
      {key: 1, name: 'Garry Sobars', image: require('assets/images/userAvatar/garry-sobars.jpg')},
      {key: 2, name: 'Stella Johnson', image: require('assets/images/userAvatar/stella-johnson.png')},
      {key: 3, name: 'Alex Dolgove', image: require('assets/images/userAvatar/alex-dolgove.png')},
      {key: 4, name: 'John Smith', image: require('assets/images/userAvatar/john-smith.png')},
    ],
  };

  handleRequestDelete = data => () => {
    const chipData = [...this.state.chipData];
    const chipToDelete = chipData.indexOf(data);
    chipData.splice(chipToDelete, 1);
    this.setState({chipData});
  };

  render() {

    return (
      <div className="manage-margin d-flex flex-wrap">
        {this.state.chipData.map(data => {
          return (
            <Chip
              avatar={<Avatar src={data.image}/>}
              label={data.name}
              key={data.key}
              onDelete={this.handleRequestDelete(data)}
            />
          );
        })}
      </div>
    );
  }
}

export default ChipsArray;