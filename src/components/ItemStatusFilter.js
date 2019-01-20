import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    active: false,
  };

  btnAllHandler = e => {
    this.setState({ active: !this.state.active });
    if (this.state.active) {
      e.target.className = 'btn btn-info';
    } else {
      e.target.className = 'btn btn-outline-secondary';
    }
  };

  render() {
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn item-status-btn btn-info"
          onClick={this.props.showAllItems}>
          All
        </button>
        <button
          type="button"
          className="btn item-status-btn btn-outline-secondary">
          Active
        </button>
        <button
          type="button"
          className="btn item-status-btn btn-outline-secondary"
          onClick={this.props.showDoneItems}>
          Done
        </button>
      </div>
    );
  }
}
