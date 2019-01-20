import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import TodoAddItem from './components/TodoAddItem';
import './main.scss';

// const todoData = [
//   { label: 'Drink Cofee', important: false, id: 1 },
//   { label: 'Make Awosome App', important: true, id: 2 },
//   { label: 'Have a lunch', important: false, id: 3 },
// ];

let maxID = 100;

class App extends Component {
  state = {
    data: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Make Awosome App'),
      this.createTodoItem('Have a lunch'),
    ],
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

  showAllItems = () => {
    console.log('showAllItems');
  };

  showActiveItems = () => {
    console.log('showActiveItems');
  };

  showDoneItems = () => {
    console.log('showActiveItems');
  };

  render() {
    const { data } = this.state;
    const doneCount = data.filter(el => el.done).length;
    const todoCount = data.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter
            showAllItems={this.showAllItems}
            showActiveItems={this.showActiveItems}
            showDoneItems={this.showDoneItems}
          />
        </div>
        <TodoAddItem onAddItem={this.addItem} />
        <TodoList
          todos={data}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}

export default App;
