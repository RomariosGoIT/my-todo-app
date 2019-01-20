import React, { Component } from 'react';

class TodoAddItem extends Component {
  state = {
    label: '',
  };

  handleLabelValue = ({ target }) => {
    let value = target.value;
    this.setState({ label: value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label !== '') {
      this.props.onAddItem(this.state.label);
      this.setState({ label: '' });
    }
  };

  render() {
    return (
      <form className="top-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          placeholder="What need to be done?"
          onChange={this.handleLabelValue}
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}

export default TodoAddItem;
