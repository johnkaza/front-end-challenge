export interface GamesListItemProp {
  name?: string | undefined;
  appid?: number | undefined;
}

export interface GameProps {
  name: string;
  appid: number;
  platforms?: {
    [key: string]: boolean;
    windows: boolean;
    mac: boolean;
    linux: boolean;
  };
  genres?:
    | Array<{
        id: string;
        description: string;
      }>
    | undefined;
  price_overview: {
    initial_formatted: string;
    final_formatted: string;
    discount_percent: number;
  };
  header_image: string;
  is_free: boolean;
}

export interface tabGamesProps {
  topSellers: Array<GamesListItemProp>;
  newTrending: Array<GamesListItemProp>;
  beingPlayed: Array<GamesListItemProp>;
  upComing: Array<GamesListItemProp>;
}

export interface defaultValuesProps {
  topSellers: Array<GameProps>;
  newTrending: Array<GameProps>;
  beingPlayed: Array<GameProps>;
  upComing: Array<GameProps>;
}
export interface GamesStateProps {
  readonly tabGames: tabGamesProps;
  defaultValues: defaultValuesProps;
  topSellers: Array<GameProps>;
  newTrending: Array<GameProps>;
  beingPlayed: Array<GameProps>;
  upComing: Array<GameProps>;
  activeTab: string;
}
