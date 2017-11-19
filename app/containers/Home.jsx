import React from 'react';
import Rides from '../Rides';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.name} <a target="_blank" rel="noopener noreferrer" href="http://hertzfreerider.se/unauth/list_transport_offer.aspx">Book</a></h1>
        <Rides />
      </div>
    );
  }
}

export default connect()(Home);
