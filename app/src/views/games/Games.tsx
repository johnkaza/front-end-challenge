import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import App from '@/App';
import GamesList from './components/GamesList';
import { Search } from '@/components';
import { GamesStateProps, GamesListItemProp, defaultValuesProps, tabGamesProps } from './types';
import { TabsContainer, searchContainer, TabsWrapper } from './styles';
import { getGames, getGame } from './actions';
import { debounce } from '@/utils/generalUtils';

const tabsDefaultValues: defaultValuesProps = {
  topSellers: [],
  newTrending: [],
  beingPlayed: [],
  upComing: [],
};

const tabGamesDefaultValues: tabGamesProps = {
  topSellers: [],
  newTrending: [],
  beingPlayed: [],
  upComing: [],
};

class Games extends React.Component<{}, GamesStateProps> {
  constructor(props: any) {
    super(props);

    this.state = {
      tabGames: tabGamesDefaultValues,
      defaultValues: tabsDefaultValues,
      activeTab: 'newTrending',
      ...tabsDefaultValues,
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = async () => {
    const response = await getGames({ tag: 'RPG' });
    const games = response.data?.applist?.apps;
    const { activeTab } = this.state;

    if (response && games) {
      const indexSplice = 0;
      const gamesPerTabLength = 10;
      const tabGames = Object.keys(tabsDefaultValues).reduce(function (result: any, item: string) {
        result[item] = games.splice(indexSplice, gamesPerTabLength);
        return result;
      }, {});

      this.setState(
        {
          ...this.state,
          tabGames,
        },
        () => {
          this.selectTab();
        }
      );
    }
  };

  getGame = async (id: number, listName: keyof GamesStateProps) => {
    const response = await getGame({ appids: id });

    const data = response?.data;
    const firstKey = Object.keys(data)[0];
    const game = data[firstKey].data;

    if (response && game) {
      this.setState({
        ...this.state,
        defaultValues: {
          ...this.state.defaultValues,
          [listName]: [...this.state[listName], game],
        },
        [listName]: [...this.state[listName], game],
      });
    }
  };

  search = debounce((listName: keyof defaultValuesProps, event: any) => {
    const text = event.target.value;
    const { defaultValues } = this.state;

    const newList = defaultValues[listName].filter((val: GamesListItemProp) =>
      val.name.toLowerCase().includes(text)
    );

    this.setState({
      ...this.state,
      [listName]: newList,
    });
  }, 500);

  searchGames = (listName: string, event: any) => {
    event.persist();
    this.search(listName, event);
  };

  selectTab = (tabKeyName: keyof defaultValuesProps = 'newTrending') => {
    const { tabGames, defaultValues } = this.state;
    if (defaultValues[tabKeyName].length == 0) {
      tabGames[tabKeyName].map((val) => {
        this.getGame(val?.appid, tabKeyName);
      });
    }
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
              onSelect={this.selectTab}
            >
              <Tab eventKey="newTrending" title="New and Trending">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('newTrending', text)} />
                </div>
                <GamesList list={newTrending} />
              </Tab>
              <Tab eventKey="topSellers" title="Top Sellers">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('topSellers', text)} />
                </div>
                <GamesList list={topSellers} />
              </Tab>
              <Tab eventKey="beingPlayed" title="What's Being Played">
                <div css={searchContainer}>
                  <Search onSearch={(text) => this.searchGames('beingPlayed', text)} />
                </div>
                <GamesList list={beingPlayed} />
              </Tab>
              <Tab eventKey="upComing" title="Upcoming">
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
