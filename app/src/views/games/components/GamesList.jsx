import React, { Component } from 'react';
import { container, listItemContainer } from './styles';
import { platformIcons } from '@/images';

import { Discount, Price } from '@/components';

const PLATFORMS = [
  { src: platformIcons.mac },
  { src: platformIcons.linux },
  { src: platformIcons.windows },
];

const TAGS = [
  {
    name: 'RPG',
  },
  {
    name: 'Action',
  },
  {
    name: 'Anime',
  },
];

const discountPrice = true;

export class GamesList extends Component {
  render() {
    const { list } = this.props;

    console.log(list, 'list');

    return (
      <div css={container}>
        {list?.map((val, key) => {
          return (
            <div css={listItemContainer} key={key}>
              <div className="avatar">
                <img className="img-fluid" src={'https://placeimg.com/184/69/any'} />
              </div>
              <div className="info">
                <div className="title">{val.name}</div>
                <div className="platforms">
                  {PLATFORMS?.map((val, key) => {
                    return <img key={key} src={val.src}></img>;
                  })}
                </div>
                <div className="tags">
                  {TAGS?.map((val, key) => {
                    return (
                      <div className="single-tag" key={key}>
                        {val.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              {discountPrice && (
                <div className="discount">
                  <Discount percentage="-40%" />
                </div>
              )}
              <div className="price">
                <Price total={'39$'} discountPrice={'39$'} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GamesList;
