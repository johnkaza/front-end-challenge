import React from 'react';
import { container } from './styles.js';
import { PriceProps } from './types';

const Price: React.FC<PriceProps> = ({ currentPrice, discountedPrice, isFree }) => {
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
};

export default Price;
