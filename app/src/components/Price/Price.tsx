import React, { Component } from 'react';
import { container } from './styles.js';
import { PriceProps } from './types';

export class Price extends Component<PriceProps> {
  render() {
    const { currentPrice, discountedPrice, isFree } = this.props;
    return (
      <div css={container}>
        {!isFree ? (
          <div>
            {discountedPrice && <div className="discounted-price">{discountedPrice}</div>}
            <div className="current-price">{currentPrice}</div>
          </div>
        ) : (
          <div className="free">Free to Play</div>
        )}
      </div>
    );
  }
}

export default Price;
