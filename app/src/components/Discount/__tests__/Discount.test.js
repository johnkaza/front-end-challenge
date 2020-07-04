import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Discount } from '@/components';

const data = {
  percentage: 30,
};

describe('Discount', () => {
  it('should render discount percentage', () => {
    const wrapper = shallow(<Discount percentage={data.percentage} />);

    expect(wrapper.text()).to.equal('-30%');
  });
});
