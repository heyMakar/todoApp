import React from 'react';
import { uniqueId } from 'lodash';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel/';
import TodoList from '../TodoList/';
import TodoStatusFilter from '../TodoStatusFilter/';
import TodoAddItem from '../TodoAddItem';

import './App.css';

const toggleProperty = (arr, id, propertyName) => {
  const data = arr.map((item) => {
    if (item.id === id) {
      const value = item[propertyName];
      return { ...item, [propertyName]: !value };
    }
    return item;
  });
  return data;
};

const switchShownState = (arr, status) => {
  switch(status) {
    case 'all':
      return arr;
    case 'active':
      return arr.filter(i => !i.done)
    case 'done':
      return arr.filter(i => i.done)
    default:
      console.error('wrong status');
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      todos: [
        { text: 'testTodo1', id: uniqueId(), important: false, done: false },
        { text: 'testTodo2', id: uniqueId(), important: false, done: false },
        { text: 'testTodo3', id: uniqueId(), important: true, done: false },
        { text: 'testTodo4', id: uniqueId(), important: false, done: true },
      ],
      searchText: '',
      filterButtonStatus: 'all',
    };
  }

  handleRemoveItem = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  }

  handleAddTodo = (text) => {
    const todo = { text, id: uniqueId(), important: false, done: false };
    console.log(this.state.todos)
    this.setState({ todos: [...this.state.todos, todo]});
  }

  onToggleDone = (id) => {
    const { todos } = this.state;
    const newData = toggleProperty(todos, id, 'done');
    this.setState({ todos: newData });
  }

  onToggleImportant = (id) => {
    const { todos } = this.state;
    const newData = toggleProperty(todos, id, 'important');
    this.setState({ todos: newData });
  }

  handleSearchItem = (text) => {
    this.setState({ searchText: text });
  }

  handleFilterByButton = (status) => {
    this.setState({ filterButtonStatus: status });
  }

  search = (items, text) => {
    if (text === '') {
      return items;
    }
    const data = items.filter(item => {
      return item.text.toLowerCase().includes(text.toLowerCase())
    });
    return data;
  }

  render() {
    const { todos, searchText, filterButtonStatus } = this.state
    const currentVisibleItems = switchShownState(this.search(todos, searchText), filterButtonStatus);
    const doneTodos = todos.filter(t => t.done).length
    const leftTodos = todos.length - doneTodos;
    return (
      <div className="todo-app">
        <AppHeader toDo={leftTodos} done={doneTodos} />
        <div className="top-panel d-flex">
          <SearchPanel
            handleSearchItem={this.handleSearchItem} />
          <TodoStatusFilter
            handleFilterByButton={this.handleFilterByButton} />
        </div>
        <TodoList 
          todos={ currentVisibleItems }
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          handleRemoveItem={this.handleRemoveItem} />
        <TodoAddItem
          handleAddItem={this.handleAddTodo} />
      </div>
    )
  }
}

export default App;