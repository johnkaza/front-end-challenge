import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Platforms } from '@/components';
import { platformIcons } from '@/images';

const data = { windows: true, mac: true, linux: false };

describe('Platforms', () => {
  it('should render icons for windows and mac', () => {
    const wrapper = shallow(<Platforms platformsList={data} />);

    expect(wrapper.find('.windows').prop('src')).to.equal(platformIcons.windows);
    expect(wrapper.find('.mac').prop('src')).to.equal(platformIcons.mac);
  });
});
