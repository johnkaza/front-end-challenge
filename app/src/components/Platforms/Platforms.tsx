import React, { Component } from 'react';
import { PlatformsProps } from './types';
import { platformIcons } from '@/images';

export class Platforms extends Component<PlatformsProps> {
  render() {
    const { platformsList } = this.props;

    return (
      <>
        {Object.keys(platformsList)?.map((plat: string, key: number) => {
          return platformsList[plat] ? <img key={key} src={platformIcons[plat]}></img> : '';
        })}
      </>
    );
  }
}

export default Platforms;
