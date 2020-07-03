import React from 'react';
import { searchContainer } from './styles.js';
import { SearchProps } from './types';

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div css={searchContainer}>
      <input className="search-input" placeholder="Search..." type="text" onChange={onSearch} />
    </div>
  );
};

export default Search;
