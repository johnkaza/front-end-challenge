import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Price } from '@/components';

const data = {
  currentPrice: '40$',
  discountedPrice: '50$',
};

describe('Price', () => {
  it('should render discount price and current price', () => {
    const wrapper = shallow(
      <Price
        currentPrice={data.currentPrice}
        discountedPrice={data.discountedPrice}
        isFree={false}
      />
    );

    expect(wrapper.find('.current-price').text()).to.equal('40$');
    expect(wrapper.find('.discounted-price').text()).to.equal('50$');
  });

  it('should render free to play', () => {
    const wrapper = shallow(
      <Price
        currentPrice={data.currentPrice}
        discountedPrice={data.discountedPrice}
        isFree={true}
      />
    );

    expect(wrapper.find('.free').text()).to.equal('Free to Play');
  });
});
