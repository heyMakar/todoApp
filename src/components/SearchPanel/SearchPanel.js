import React from 'react';

import './SearchPanel.css';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
    this.props.handleSearchItem(text);
  }

  render() {
    return (
      <div>
        <input
        className="form-control search-panel"
        placeholder="search"
        onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SearchPanel;