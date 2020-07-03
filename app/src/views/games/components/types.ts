import { GameProps as GP } from '../types';

interface GameProps extends GP {}

export interface GamesListProps {
  list?: Array<GameProps>;
}
