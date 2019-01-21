import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'all',
    button: [
      { name: 'all', isActive: false, id: 1 },
      { name: 'active', isActive: false, id: 2 },
      { name: 'done', isActive: false, id: 3 },
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
          let { isActive, name, id } = item;
          let style = 'btn-outline-secondary';
          isActive = this.state.filter === name;
          if (isActive) {
            style += ' active';
          }
          return (
            <button
              key={id}
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
