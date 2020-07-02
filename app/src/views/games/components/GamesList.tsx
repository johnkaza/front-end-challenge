import React, { Component } from 'react';
import { container, listItemContainer } from './styles';
import { platformIcons } from '@/images';

import { Discount, Price } from '@/components';
import { getGame } from './actions';
import { GameProps, GamesListProps, StateProps, GameApp } from './types';

export class GamesList extends Component<GamesListProps> {
  state: StateProps = {
    gamesList: [],
    init: false,
  };

  componentDidMount() {
    this.getGamesList(this.props.list);
  }

  componentWillReceiveProps(nextProps: any) {
    const { list: nextList } = nextProps;
    const { list } = this.props;

    if (nextList !== list) {
      this.getGamesList(nextList);
    }
  }

  getGamesList = (list: GamesListProps[]) => {
    list.map((val) => {
      this.getGame(val?.appid);
    });
  };

  getGame = async (id: number) => {
    const response = await getGame({ appids: id });

    const data = response?.data;
    const firstKey = Object.keys(data)[0];
    const game = data[firstKey].data;

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
        {gamesList?.map((val: GameProps, key: number) => {
          return (
            <div css={listItemContainer} key={key}>
              <div className="avatar">
                <img className="img-fluid" src={val.header_image} />
              </div>
              <div className="info">
                <div className="title">{val.name}</div>
                <div className="platforms">
                  {Object.keys(val?.platforms).map((plat: string, key: number) => {
                    console.log(plat, 'plat');
                    return key ? <img key={key} src={platformIcons[plat]}></img> : '';
                  })}
                </div>
                <div className="tags">
                  {val?.genres?.map((genre: { description: string }, key) => {
                    return (
                      <div className="single-tag" key={key}>
                        {genre.description}
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
