export interface GamesListItemProp {
  name?: string | undefined;
  appid?: number | undefined;
}

export interface GamesStateProps {
  readonly defaultValues: {
    [key: string]: Array<GamesListItemProp>;
    topSellers: Array<GamesListItemProp>;
    newTrending: Array<GamesListItemProp>;
    beingPlayed: Array<GamesListItemProp>;
    upComing: Array<GamesListItemProp>;
  };
  topSellers: Array<GamesListItemProp>;
  newTrending: Array<GamesListItemProp>;
  beingPlayed: Array<GamesListItemProp>;
  upComing: Array<GamesListItemProp>;
  activeTab: string;
}
