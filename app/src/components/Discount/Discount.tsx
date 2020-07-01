import React, { Component } from 'react';
import { container } from './styles.js';

interface DiscountProps {
  percentage: number;
}

export class Discount extends Component<DiscountProps> {
  render() {
    const { percentage } = this.props;

    return <div css={container}>{'-' + percentage + '%'}</div>;
  }
}

export default Discount;
