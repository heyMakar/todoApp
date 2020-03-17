import React from "react";
import cn from 'classnames';

import './TodoStatusFilter.css';

class TodoStatusFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeName: 'all' };
  }

  selectAll = () => {
    const { handleFilterByButton } = this.props;
    this.setActive('all')
    handleFilterByButton('all')
  };

  selectActive = () => {
    const { handleFilterByButton } = this.props;
    this.setActive('active');
    handleFilterByButton('active');
  };

  selectDone = () => {
    const { handleFilterByButton } = this.props;
    this.setActive('done');
    handleFilterByButton('done');
  };

  setActive = (name) => this.setState({ activeName: name });

  render() {
    const { activeName } = this.state;

    const sharedButtons = {
      btn: true,
      'btn-outline-primary': true,
    };
    const buttonClassAll = {
      ...sharedButtons,
      allButton: true,
      active: activeName === 'all',
    };
    const buttonClassActive = {
      ...sharedButtons,
      activeButton: true,
      active: activeName === 'active',
    };
    const buttonClassDone = {
      ...sharedButtons,
      doneButton: true,
      active: activeName === 'done'
    }
    return (
      <div className="btn-group">
        <button 
          type="button"
          className={cn(buttonClassAll)}
          onClick={this.selectAll}>All</button>
        <button 
          type="button"
          className={cn(buttonClassActive)}
          onClick={this.selectActive}>Active</button>
        <button 
          type="button"
          className={cn(buttonClassDone)}
          onClick={this.selectDone}>Done</button>
      </div>
    );
  }
}

export default TodoStatusFilter;