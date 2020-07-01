import React, { Component } from 'react';
import { container, listItemContainer } from './styles';
import { platformIcons } from '@/images';

import { Discount, Price } from '@/components';
import { getGame } from './_actions';

interface GameProps {
  gamesList: Array<{
    name: string;
    appid: number;
    platforms: {
      windows: boolean;
      mac: boolean;
      linux: boolean;
    };
    genres: Array<{
      id: string;
      description: string;
    }>;
    price_overview: {
      initial_formatted: string;
      final_formatted: string;
      discount_percent: number;
    };
    header_image: string;
    is_free: boolean;
  }>;
  init: boolean;
}

interface GamesListProps {
  list: Array<{ name?: string | undefined; appid?: number | undefined }>;
}

const discountPrice = true;

export class GamesList extends Component<GamesListProps> {
  state: GameProps = {
    gamesList: [],
    init: false,
  };

  componentDidMount() {
    const { list } = this.props;

    list.map((val) => {
      console.log(val, 'val');
      this.getGame(val.appid);
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextprops');
    if (nextProps.list !== this.props.list) {
      nextProps.list.map((val) => {
        console.log(val, 'val');
        this.getGame(val.appid);
      });
    }
  }

  getGame = async (id) => {
    const response = await getGame({ appids: id });

    const data = response?.data;
    const firstKey = Object.keys(data)[0];
    const game = data[firstKey].data;

    console.log(game, 'game');

    if (response && game) {
      this.setState({
        ...this.state,
        gamesList: [...this.state.gamesList, game],
      });
    }
  };

  render() {
    const { gamesList } = this.state;

    return (
      <div css={container}>
        {gamesList?.map((val, key) => {
          return (
            <div css={listItemContainer} key={key}>
              <div className="avatar">
                <img className="img-fluid" src={val.header_image} />
              </div>
              <div className="info">
                <div className="title">{val.name}</div>
                <div className="platforms">
                  {Object.keys(val?.platforms).map((plat, key) => {
                    return key ? <img key={key} src={platformIcons[plat]}></img> : '';
                  })}
                </div>
                <div className="tags">
                  {val?.genres.map((val, key) => {
                    return (
                      <div className="single-tag" key={key}>
                        {val.description}
                      </div>
                    );
                  })}
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
