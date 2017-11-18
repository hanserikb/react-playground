import React from 'react';
import Rides from '../Rides';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Available freerider cars',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name} <a target="_blank" rel="noopener noreferrer" href="http://hertzfreerider.se/unauth/list_transport_offer.aspx">Book</a></h1>
        <Rides />
      </div>
    );
  }
}

export default Home;