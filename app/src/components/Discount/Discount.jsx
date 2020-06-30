import React, { Component } from 'react';
import { container } from './styles.js';

export class Discount extends Component {
  render() {
    const { percentage } = this.props;

    return <div css={container}>{percentage}</div>;
  }
}

export default Discount;
