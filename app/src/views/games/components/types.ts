interface GameApp {
  name?: string | undefined;
  appid?: number | undefined;
}

export interface GamesListProps {
  list?: Array<GameApp>;
  appid?: number;
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

export interface StateProps {
  gamesList: Array<GameProps>;
}
