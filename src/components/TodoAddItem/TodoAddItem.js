import React from 'react';

import './TodoAddItem.css'

export default class TodoAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleTextChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { handleAddItem } = this.props;
    const { text } = this.state;
    handleAddItem(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="todo-add-item d-flex">
        <input
          type='text'
          className='form-control'
          onChange={this.handleTextChange}
          placeholder='What need to be done...'
          value={text}/>
        <button 
          className="btn btn-outline-primary btn-sm"
          type="submit">Add</button>
      </form>
    )
  }
}