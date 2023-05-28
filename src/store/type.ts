import {
  BannerItem,
  CosmeticItemType,
  HeroItemType,
  SkinItemType,
} from '../models';

export type DashboardState = {
  dashboard: {
    banner?: BannerItem[];
    statistics?: string;
    listRecentlyHeroes?: HeroItemType[];
    listRecentlyCosmetics?: CosmeticItemType[];
  };
};

export type BuyTabState = {
  heroes?: HeroItemType[];
  configSkin: SkinItemType[];
};

export type InitState = {
  dashboardState: DashboardState;
  buyTabState: BuyTabState;
};

export const enum ActionType {
  UPDATE_BANNER_DASHBOARD = 'UPDATE_BANNER_DASHBOARD',
  UPDATE_STATISTICS_DASHBOARD = 'UPDATE_STATISTICS_DASHBOARD',
  UPDATE_RECENTLY_LISTED_DASHBOARD = 'UPDATE_RECENTLY_LISTED_DASHBOARD',
  UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD = 'UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD',
  UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD = 'UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD',

  UPDATE_HEROES_BUY_TAB = 'UPDATE_HEROES_BUY_TAB',
}
export type Actions =
  | {type: ActionType.UPDATE_BANNER_DASHBOARD; banners: BannerItem[]}
  | {
      type: ActionType.UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD;
      listRecentlyHeroes: HeroItemType[];
    }
  | {
      type: ActionType.UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD;
      listRecentlyCosmetics: CosmeticItemType[];
    }
  | {type: ActionType.UPDATE_STATISTICS_DASHBOARD; statistics: string}
  | {type: ActionType.UPDATE_HEROES_BUY_TAB; heroes: HeroItemType[]};

export type DashboardReducer = (
  state: DashboardState,
  action: Actions,
) => DashboardState;
export type BuyTabReducer = (
  state: BuyTabState,
  action: Actions,
) => BuyTabState;
