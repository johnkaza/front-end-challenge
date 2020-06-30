import React, { Component } from 'react';
import { container } from './styles.js';

export class Search extends Component {
  render() {
    const { topSellers, newTrending, beingPlayed, upComing } = this.state;

    return (
      <div css={container}>
        <input class="search-input" type="text" onChange={} />
      </div>
    );
  }
}

export default Search;
