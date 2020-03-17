import React from 'react';

import TodoListItem from '../TodoListItem/';
import './TodoList.css';

const TodoList = (props) => {
  const {
    todos, 
    handleRemoveItem, 
    onToggleDone, 
    onToggleImportant,
  } = props;
  
  const viewData = (items) => items.map(item => {
    const { id, ...props } = item;
    return (
      <li key={id} className="list-group-item"><TodoListItem
        { ...props }
        handleRemove={() => handleRemoveItem(id)}
        onToggleDone={() => onToggleDone(id)}
        onToggleImportant={() => onToggleImportant(id)}/>
      </li>
    );
  });
  return (
    <ul className="list-group todo-list">
      { viewData(todos) }
    </ul>
  );
};

export default TodoList;