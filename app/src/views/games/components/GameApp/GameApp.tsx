import React from 'react';
import { useQuery } from 'react-query';

import { Discount, Price, Tags, Platforms } from '@/components';
import { gameAppContainer, unAvailableContainer } from './styles';
import { getGame } from './actions';

const GameApp: React.FC<{ appId: number }> = ({ appId }) => {
  const { data } = useQuery(`app-${appId}`, async () => {
    const response = await getGame({ appids: appId });

    const firstKey = Object.keys(response.data)[0];
    const game = response.data[firstKey].data;

    return game;
  });

  return (
    <div css={gameAppContainer}>
      {data ? (
        <>
          <div className="avatar">
            <img className="img-fluid" src={data?.header_image} />
          </div>
          <div className="info">
            <div className="title">{data?.name}</div>
            <div className="platforms">
              {data?.platforms && <Platforms platformsList={data?.platforms} />}
            </div>
            <div className="tags">
              <Tags tagsList={data?.genres} />
            </div>
          </div>
          {data?.price_overview?.discount_percent > 0 && (
            <div className="discount">
              <Discount percentage={data?.price_overview?.discount_percent} />
            </div>
          )}
          <div className="price">
            <Price
              currentPrice={data?.price_overview?.final_formatted}
              discountedPrice={data?.price_overview?.initial_formatted}
              isFree={data?.is_free}
            />
          </div>
        </>
      ) : (
        <div css={unAvailableContainer}>Game currently unavailable</div>
      )}
    </div>
  );
};

export default GameApp;
