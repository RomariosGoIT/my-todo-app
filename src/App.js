import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import TodoAddItem from './components/TodoAddItem';
import './main.scss';

let maxID = 100;

class App extends Component {
  state = {
    data: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Make Awosome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: '',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: maxID++,
    };
  }

  toggleItemProp(id, prop) {
    const arr = [...this.state.data];
    let el = arr.find(el => el.id === id);
    el[prop] = !el[prop];
    return arr;
  }

  deleteItem = id => {
    this.setState({ data: [...this.state.data].filter(el => el.id !== id) });
  };

  addItem = val => {
    const newItem = this.createTodoItem(val);
    const newData = [...this.state.data, newItem];
    this.setState({ data: newData });
  };

  onToggleImportant = id => {
    this.setState({ data: this.toggleItemProp(id, 'important') });
  };

  onToggleDone = id => {
    this.setState({ data: this.toggleItemProp(id, 'done') });
  };

  setSearchValue = str => {
    this.setState({ term: str.toLowerCase() });
  };

  setFilterValue = val => {
    this.setState({ filter: val });
  };

  searchHandler = (data, val) => {
    if (val === '') return data;
    return data.filter(item => item.label.toLowerCase().indexOf(val) > -1);
  };

  filterHandler = (data, filter) => {
    switch (filter) {
      case 'all':
        return data;
      case 'done':
        return data.filter(el => el.done === true);
      case 'active':
        return data.filter(el => el.done === false);
      default:
        return data;
    }
  };

  render() {
    const { data, term, filter } = this.state;
    const updatedData = this.filterHandler(
      this.searchHandler(data, term),
      filter,
    );
    const doneCount = data.filter(el => el.done).length;
    const todoCount = data.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel setSearchValue={this.setSearchValue} />
          <ItemStatusFilter setFilterValue={this.setFilterValue} />
        </div>
        <TodoAddItem onAddItem={this.addItem} />
        <TodoList
          todos={updatedData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

export default App;
