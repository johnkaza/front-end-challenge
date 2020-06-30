import React, { Component } from 'react';
import { container } from './styles.js';

export class Search extends Component {
  render() {
    const { onSearch } = this.props;

    return (
      <div css={container}>
        <input className="search-input" placeholder="Search..." type="text" onChange={onSearch} />
      </div>
    );
  }
}

export default Search;
