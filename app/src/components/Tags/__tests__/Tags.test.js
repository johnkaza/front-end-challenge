import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Tags } from '@/components';

const data = {
  tagsList: [
    { id: '9', description: 'Racing' },
    { id: '9', description: 'Action' },
  ],
};

describe('Tags', () => {
  it('should render Tags', () => {
    const wrapper = shallow(<Tags tagsList={data.tagsList} />);

    expect(wrapper.find('.single-tag').at(0).text()).to.equal('Racing');
    expect(wrapper.find('.single-tag').at(1).text()).to.equal('Action');
  });
});
