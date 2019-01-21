import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'all',
    button: [
      { name: 'all', isActive: false },
      { name: 'active', isActive: false },
      { name: 'done', isActive: false },
    ],
  };

  setFilterValue = val => {
    this.props.setFilterValue(val);
    this.setState({ filter: val });
  };

  render() {
    return (
      <div className="btn-group">
        {this.state.button.map(item => {
          let { isActive, name } = item;
          let style = 'btn-outline-secondary';
          isActive = this.state.filter === name;
          if (isActive) {
            style += ' active';
          }
          return (
            <button
              type="button"
              className={`btn ${style}`}
              onClick={() => this.setFilterValue(name)}>
              {name}
            </button>
          );
        })}
      </div>
    );
  }
}
