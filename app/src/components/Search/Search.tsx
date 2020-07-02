import React, { Component } from 'react';
import { searchContainer } from './styles.js';
import { SearchProps } from './types';

export class Search extends Component<SearchProps> {
  render() {
    const { onSearch } = this.props;

    return (
      <div css={searchContainer}>
        <input className="search-input" placeholder="Search..." type="text" onChange={onSearch} />
      </div>
    );
  }
}

export default Search;
