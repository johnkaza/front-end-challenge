import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import App from '@/App';
import GamesList from './components/GamesList';
import { Search } from '@/components';
import { TabsContainer, searchContainer, TabsWrapper } from './styles';
import { getGames } from './_actions';

interface ListItemProp {
  name?: string | undefined;
  appid?: number | undefined;
}

interface IState {
  readonly defaultValues: {
    topSellers: Array<ListItemProp>;
    newTrending: Array<ListItemProp>;
    beingPlayed: Array<ListItemProp>;
    upComing: Array<ListItemProp>;
  };
  topSellers: Array<ListItemProp>;
  newTrending: Array<ListItemProp>;
  beingPlayed: Array<ListItemProp>;
  upComing: Array<ListItemProp>;
  activeTab: string;
}

class Games extends React.Component {
  state: IState = {
    defaultValues: {
      topSellers: [],
      newTrending: [],
      beingPlayed: [],
      upComing: [],
    },
    topSellers: [],
    newTrending: [],
    beingPlayed: [],
    upComing: [],
    activeTab: 'new-trending',
  };

  componentDidMount() {
    this.getGames();
  }

  getGames = async () => {
    const response = await getGames({ tag: 'RPG' });

    const games = response.data?.applist?.apps;

    console.log(games);

    if (response && games) {
      this.setState({
        ...this.state,
        defaultValues: {
          topSellers: games.slice(0, 10),
          newTrending: games.slice(10, 20),
          beingPlayed: games.slice(20, 30),
          upComing: games.slice(30, 40),
        },
        topSellers: games.slice(0, 10),
        newTrending: games.slice(10, 20),
        beingPlayed: games.slice(20, 30),
        upComing: games.slice(30, 40),
      });
    }
  };

  searchGames = (listName, event) => {
    const text = event.target.value;
    const { defaultValues } = this.state;

    const newList = defaultValues[listName].filter((str) => str.name.toLowerCase().includes(text));

    this.setState({
      ...this.state,
      [listName]: newList,
    });
  };

  render() {
    const { topSellers, newTrending, beingPlayed, upComing, activeTab } = this.state;

    console.log(topSellers, newTrending, beingPlayed, upComing, 'lists');

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
                  <Search onSearch={(text: string) => this.searchGames('newTrending', text)} />
                </div>
                <GamesList list={newTrending} />
              </Tab>
              <Tab eventKey="top-sellers" title="Top Sellers">
                <div css={searchContainer}>
                  <Search onSearch={(text: string) => this.searchGames('topSellers', text)} />
                </div>
                <GamesList list={topSellers} />
              </Tab>
              <Tab eventKey="played" title="What's Being Played">
                <div css={searchContainer}>
                  <Search onSearch={(text: string) => this.searchGames('beingPlayed', text)} />
                </div>
                <GamesList list={beingPlayed} />
              </Tab>
              <Tab eventKey="upcoming" title="Upcoming">
                <div css={searchContainer}>
                  <Search onSearch={(text: string) => this.searchGames('upComing', text)} />
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
