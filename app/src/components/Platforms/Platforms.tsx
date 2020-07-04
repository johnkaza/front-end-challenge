import React from 'react';
import { PlatformsProps } from './types';
import { platformIcons } from '@/images';

const Platforms: React.FC<PlatformsProps> = ({ platformsList }) => {
  return (
    <>
      {Object.keys(platformsList)?.map((plat: string, key: number) => {
        return (
          platformsList[plat] && <img className={plat} key={key} src={platformIcons[plat]}></img>
        );
      })}
    </>
  );
};

export default Platforms;
