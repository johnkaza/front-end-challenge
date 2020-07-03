import React, { Component } from 'react';
import { gamesListcontainer, gamesListItemContainer } from './styles';

import { Discount, Price, Tags } from '@/components';
import { GamesListProps } from './types';
import Platforms from '@/components/Platforms/Platforms';

export class GamesList extends Component<GamesListProps> {
  render() {
    const { list } = this.props;

    return (
      <div css={gamesListcontainer}>
        {list?.map((val, key) => {
          return (
            <div css={gamesListItemContainer} key={key}>
              <div className="avatar">
                <img className="img-fluid" src={val.header_image} />
              </div>
              <div className="info">
                <div className="title">{val.name}</div>
                <div className="platforms">
                  <Platforms platformsList={val?.platforms} />
                </div>
                <div className="tags">
                  <Tags tagsList={val?.genres} />
                </div>
              </div>
              {val?.price_overview?.discount_percent > 0 && (
                <div className="discount">
                  <Discount percentage={val?.price_overview?.discount_percent} />
                </div>
              )}
              <div className="price">
                <Price
                  currentPrice={val?.price_overview?.final_formatted}
                  discountedPrice={val?.price_overview?.initial_formatted}
                  isFree={val?.is_free}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GamesList;
