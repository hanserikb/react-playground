var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hans'
    };
  }
  render() {
    return (
    <div>
      <h1>Hello</h1>
      <SubComponent text={this.state.name}/>
    </div>
    );
  }
}

const SubComponent = props => <h2>Hi {props.text}</h2>;
SubComponent.propTypes = {
  text: PropTypes.string.isRequired
}


module.exports = App;
ReactDOM.render(<App/>, document.getElementById('app'));