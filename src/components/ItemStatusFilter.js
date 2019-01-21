import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    stat: 'all',
  };

  btnAllHandler = val => {
    this.props.setFilterValue(val);
    this.setState({ stat: val });
  };

  render() {
    const classNameActive = 'btn btn-outline-secondary active';
    const className = 'btn btn-outline-secondary';

    return (
      <div className="btn-group">
        <button
          type="button"
          className={this.state.stat === 'all' ? classNameActive : className}
          onClick={() => this.btnAllHandler('all')}>
          All
        </button>
        <button
          type="button"
          className={this.state.stat === 'active' ? classNameActive : className}
          onClick={() => this.btnAllHandler('active')}>
          Active
        </button>
        <button
          type="button"
          className={this.state.stat === 'done' ? classNameActive : className}
          onClick={() => this.btnAllHandler('done')}>
          Done
        </button>
      </div>
    );
  }
}
