import React from 'react';
import cn from 'classnames';

import './TodoListItem.css';

class TodoListItem extends React.Component {

  render() {
    const { 
      text, 
      done,
      important,
      handleRemove, 
      onToggleImportant, 
      onToggleDone } = this.props;
      
    const itemClasses = cn('todo-list-item', { done, important });

    return (
      <span className={ itemClasses }>
        <span 
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          { text }
        </span>
        <button
          type="button"
          onClick={ onToggleImportant }
          className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          onClick={ handleRemove }
          className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}

export default TodoListItem;