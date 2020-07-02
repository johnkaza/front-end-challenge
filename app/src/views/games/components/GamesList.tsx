import React, { Component } from 'react';
import { gamesListcontainer, gamesListItemContainer } from './styles';

import { Discount, Price, Tags } from '@/components';
import { getGame } from './actions';
import { GameProps, GamesListProps, StateProps } from './types';
import Platforms from '@/components/Platforms/Platforms';

export class GamesList extends Component<GamesListProps> {
  state: StateProps = {
    gamesList: [],
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
    this.setState(
      {
        gamesList: [],
      },
      () => {
        list.map((val) => {
          this.getGame(val?.appid);
        });
      }
    );
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
      <div css={gamesListcontainer}>
        {gamesList?.map((val: GameProps, key: number) => {
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
