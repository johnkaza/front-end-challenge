import React, { Component } from 'react';
import { container } from './styles.js';

export class Price extends Component {
  render() {
    return (
      <div css={container}>
        <div className="discounted-price">40$</div>
        <div className="current-price">35$</div>
      </div>
    );
  }
}

export default Price;
