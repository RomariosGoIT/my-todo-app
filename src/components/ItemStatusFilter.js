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
    const styleActive = 'btn btn-outline-secondary active';
    const styleStd = 'btn btn-outline-secondary';

    return (
      <div className="btn-group">
        <button
          type="button"
          className={this.state.stat === 'all' ? styleActive : styleStd}
          onClick={() => this.btnAllHandler('all')}>
          All
        </button>
        <button
          type="button"
          className={this.state.stat === 'active' ? styleActive : styleStd}
          onClick={() => this.btnAllHandler('active')}>
          Active
        </button>
        <button
          type="button"
          className={this.state.stat === 'done' ? styleActive : styleStd}
          onClick={() => this.btnAllHandler('done')}>
          Done
        </button>
      </div>
    );
  }
}
