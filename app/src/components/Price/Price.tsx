import React, { Component } from 'react';
import { container } from './styles.js';

interface PriceProps {
  currentPrice: number;
  discountedPrice: number;
  isFree: boolean;
}

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
          <div>Free to Play</div>
        )}
      </div>
    );
  }
}

export default Price;
