import React, { Component } from 'react';

class Filter extends Component {
  constructor() {
    super();
  }

  render() {
    (<div>
      <input
        className="rides--filter"
        placeholder="Search..."
        type="text"
        onChange={this.onFilterTextChanged}
      />
    </div>)
  }
};

export default Filter;
