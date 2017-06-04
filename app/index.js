var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


var App = React.createClass({
  getInitialState: function() {
    return {
      name: 'Hans'
    }
  },
  render: function() {
    return (
    <div>
      <h1>Hello</h1>
      <SubComponent text={this.state.name}/>
    </div>
    );
  }
});

var SubComponent = function(props) {
  return <h2>Hi {props.text}</h2>
}

SubComponent.propTypes = {
  text: PropTypes.string.isRequired
}

ReactDOM.render(<App/>, document.getElementById('app'));