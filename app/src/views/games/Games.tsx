import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { useQuery } from 'react-query';

import App from '@/App';
import GamesList from './components/GamesList/GamesList';
import { Search } from '@/components';

import { GamesStateProps, GamesListItemProp, defaultValuesProps, tabGamesProps } from './types';
import { TabsContainer, searchContainer, TabsWrapper } from './styles';
import { getGames } from './actions';
import { debounce } from '@/utils/generalUtils';

const tabGamesDefaultValues: tabGamesProps = {
  topSellers: [],
  newTrending: [],
  beingPlayed: [],
  upComing: [],
};

const Games: React.FC<GamesStateProps> = () => {
  const [state, setState] = useState(tabGamesDefaultValues);

  const chunkPerCategory = (data: GamesListItemProp[]) => {
    const indexSplice = 0;
    const gamesPerTabLength = 10;

    return Object.keys(tabGamesDefaultValues).reduce(function (result: any, item: string) {
      result[item] = data.splice(indexSplice, gamesPerTabLength);
      return result;
    }, {});
  };

  const { data, isSuccess, isFetching } = useQuery('games', async () => {
    const response = await getGames();
    const games = response.data?.applist?.apps;

    const tabGames = chunkPerCategory(games);

    setState(tabGames);

    return tabGames;
  });

  const filterGames = (listName: keyof defaultValuesProps, text: string) => {
    return data[listName].filter((val: GamesListItemProp) => val.name.toLowerCase().includes(text));
  };

  const searchGames = debounce((listName: keyof defaultValuesProps, event: any) => {
    const text = event.target.value;

    const newList = filterGames(listName, text);

    setState({ ...state, [listName]: text ? newList : data[listName] });
  }, 250);

  const search = (listName: string, event: any) => {
    event.persist();
    searchGames(listName, event);
  };

  return (
    <App>
      <Container>
        <div css={TabsWrapper}>
          <Tabs
            id="games-tabs"
            mountOnEnter={true}
            css={TabsContainer}
            defaultActiveKey={'newTrending'}
          >
            <Tab eventKey="newTrending" title="New and Trending">
              {isSuccess && !isFetching && (
                <>
                  <div css={searchContainer}>
                    <Search onSearch={(text) => search('newTrending', text)} />
                  </div>
                  <GamesList list={state['newTrending']} />
                </>
              )}
            </Tab>
            <Tab eventKey="topSellers" title="Top Sellers">
              {isSuccess && (
                <>
                  <div css={searchContainer}>
                    <Search onSearch={(text) => search('topSellers', text)} />
                  </div>
                  <GamesList list={state['topSellers']} />{' '}
                </>
              )}
            </Tab>
            <Tab eventKey="beingPlayed" title="What's Being Played">
              {isSuccess && (
                <>
                  <div css={searchContainer}>
                    <Search onSearch={(text) => search('beingPlayed', text)} />
                  </div>
                  <GamesList list={state['beingPlayed']} />
                </>
              )}
            </Tab>
            <Tab eventKey="upComing" title="Upcoming">
              {isSuccess && (
                <>
                  <div css={searchContainer}>
                    <Search onSearch={(text) => search('upComing', text)} />
                  </div>
                  <GamesList list={state['upComing']} />
                </>
              )}
            </Tab>
          </Tabs>
        </div>
      </Container>
    </App>
  );
};

export default Games;
