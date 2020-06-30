import React, { Component } from 'react';
import { container } from './styles.js';

export class Price extends Component {
  render() {
    const { currentPrice, discountedPrice, currency } = this.props;
    return (
      <div css={container}>
        <div className="discounted-price">
          {discountedPrice}
          {currency}
        </div>
        <div className="current-price">
          {currentPrice}
          {currency}
        </div>
      </div>
    );
  }
}

export default Price;
