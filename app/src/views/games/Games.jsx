import React from 'react';
import App from '../../App';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { getData } from './_actions';
import GamesList from './components/GamesList';
import { TabsContainer } from './styles';

import { DATA } from '@/api/data';

class Games extends React.Component {
  state = {
    topRated: [],
    newTrending: [],
    beingPlayed: [],
    upComing: [],
  };

  componentDidMount() {
    this.getData();
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

    console.log(response, 'response');
    const games = DATA?.applist?.apps;

    if (response && games) {
      console.log(games);

      this.setState({
        ...this.state,
        topSellers: games.slice(0, 10),
        newTrending: games.slice(10, 20),
        beingPlayed: games.slice(20, 30),
        upComing: games.slice(30, 40),
      });
    }
  };

  render() {
    console.log(this.state, 'state');
    const { topSellers, newTrending, beingPlayed, upComing } = this.state;

    return (
      <App>
        <Container>
          <Tabs css={TabsContainer} defaultActiveKey="new-trending">
            <Tab eventKey="new-trending" title="New and Trending">
              <GamesList list={newTrending} />
            </Tab>
            <Tab eventKey="top-sellers" title="Top Sellers">
              <GamesList list={topSellers} />
            </Tab>
            <Tab eventKey="played" title="What's Being Played">
              <GamesList list={beingPlayed} />
            </Tab>
            <Tab eventKey="upcoming" title="Upcoming">
              <GamesList list={upComing} />
            </Tab>
          </Tabs>
        </Container>
      </App>
    );
  }
}

export default Games;
