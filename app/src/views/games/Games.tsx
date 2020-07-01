import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import App from '@/App';
import GamesList from './components/GamesList';
import { Search } from '@/components';
import { TabsContainer, searchContainer, TabsWrapper } from './styles';
import { getData } from './_actions';

import { DATA } from '@/api/data';

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
}

class Games extends React.Component {
  state: IState = {
    defaultValues: {
      topSellers: [{}],
      newTrending: [],
      beingPlayed: [],
      upComing: [],
    },
    topSellers: [],
    newTrending: [],
    beingPlayed: [],
    upComing: [],
  };

  componentDidMount() {
    // this.getData();

    const games = DATA?.applist?.apps;

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

  getData = async () => {
    // const response = await getData({ tag: 'RPG' });
    const response = await getData({
      tag: 'RPG',
      minviews: 1,
      tagid: 122,
      genreid: 0,
      categoryid: 0,
      maxbroadcasts: 12,
    });

    const games = DATA?.applist?.apps;

    if (response && games) {
      this.setState({
        ...this.state,
        topSellers: games.slice(0, 10),
        newTrending: games.slice(10, 20),
        beingPlayed: games.slice(20, 30),
        upComing: games.slice(30, 40),
      });
    }
  };

  searchGames = (listName, event) => {
    const text = event.target.value;
    const defaultValuesList = this.state.defaultValues;

    const newList = defaultValuesList[listName].filter((str) =>
      str.name.toLowerCase().includes(text)
    );

    this.setState({
      ...this.state,
      [listName]: newList,
    });
  };

  render() {
    const { topSellers, newTrending, beingPlayed, upComing } = this.state;

    return (
      <App>
        <Container>
          <div css={TabsWrapper}>
            <Tabs id="games-tabs" css={TabsContainer} defaultActiveKey="new-trending">
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
