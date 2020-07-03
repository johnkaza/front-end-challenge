import React, { Component } from 'react';
import { gamesListcontainer } from './styles';

import { GamesListProps } from './types';
import GameApp from '../GameApp/GameApp';

export class GamesList extends Component<GamesListProps> {
  render() {
    const { list } = this.props;

    return (
      <div css={gamesListcontainer}>
        {list?.map((val, key) => {
          return <GameApp key={key} appId={val.appid} />;
        })}
      </div>
    );
  }
}

export default GamesList;
