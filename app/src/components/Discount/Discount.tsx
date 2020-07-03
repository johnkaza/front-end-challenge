import React from 'react';
import { container } from './styles.js';
import { DiscountProps } from './types';

const Discount: React.FC<DiscountProps> = ({ percentage }) => {
  return <div css={container}>{'-' + percentage + '%'}</div>;
};

export default Discount;
