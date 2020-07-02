import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import App from '@/App';
import GamesList from './components/GamesList';
import { Search } from '@/components';
import { TabsContainer, searchContainer, TabsWrapper } from './styles';
import { getGames } from './actions';
import { GamesStateProps, GamesListItemProp } from './types';

const tabsDefaultValues: {
  topSellers: Array<GamesListItemProp>;
  newTrending: Array<GamesListItemProp>;
  beingPlayed: Array<GamesListItemProp>;
  upComing: Array<GamesListItemProp>;
} = {
  topSellers: [],
  newTrending: [],
  beingPlayed: [],
  upComing: [],
};

class Games extends React.Component {
  state: GamesStateProps = {
    defaultValues: tabsDefaultValues,
    activeTab: 'new-trending',
    ...tabsDefaultValues,
  };

  componentDidMount() {
    this.getGames();
  }

  getGames = async () => {
    const response = await getGames({ tag: 'RPG' });
    const games = response.data?.applist?.apps;

    if (response && games) {
      const indexSplice = 0;
      const gamesPerTabLength = 10;
      const tabGames = Object.keys(tabsDefaultValues).reduce(function (result: any, item: string) {
        result[item] = games.splice(indexSplice, gamesPerTabLength);
        return result;
      }, {});

      this.setState({
        ...this.state,
        defaultValues: tabGames,
        ...tabGames,
      });
    }
  };

  searchGames = (listName: string, event: any) => {
    const text = event.target.value;
    const { defaultValues } = this.state;

    const newList = defaultValues[listName].filter((val: GamesListItemProp) =>
      val.name.toLowerCase().includes(text)
    );

    console.log(newList, 'newList');

    this.setState({
      ...this.state,
      [listName]: newList,
    });
  };

  render() {
    const { topSellers, newTrending, beingPlayed, upComing, activeTab } = this.state;

    return (
      <App>
        <Container>
          <div css={TabsWrapper}>
            <Tabs
              id="games-tabs"
              mountOnEnter={true}
              css={TabsContainer}
              defaultActiveKey={activeTab}
            >
              <Tab eventKey="new-trending" title="New and Trending">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('newTrending', text)} />
                </div>
                <GamesList list={newTrending} />
              </Tab>
              <Tab eventKey="top-sellers" title="Top Sellers">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('topSellers', text)} />
                </div>
                <GamesList list={topSellers} />
              </Tab>
              <Tab eventKey="played" title="What's Being Played">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('beingPlayed', text)} />
                </div>
                <GamesList list={beingPlayed} />
              </Tab>
              <Tab eventKey="upcoming" title="Upcoming">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('upComing', text)} />
                </div>
                <GamesList list={upComing} />
              </Tab>
            </Tabs>
          </div>
        </Container>
      </App>
    );
  }
}

export default Games;
