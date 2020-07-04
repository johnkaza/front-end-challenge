import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Search } from '@/components';

describe('Search', () => {
  it('should render input', () => {
    const wrapper = shallow(<Search onChange={() => {}} />);

    expect(wrapper.find('.search-input')).to.have.lengthOf(1);
  });
});
