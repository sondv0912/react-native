import {BannerItem, CosmeticItemType, HeroItemType} from '../models';

export type DashboardState = {
  dashboard: {
    banner?: BannerItem[];
    statistics?: string;
    listRecentlyHeroes?: HeroItemType[];
    listRecentlyCosmetics?: CosmeticItemType[];
  };
};

export type InitState = {
  dashboardState: DashboardState;
};

export const enum ActionType {
  UPDATE_BANNER_DASHBOARD = 'UPDATE_BANNER_DASHBOARD',
  UPDATE_STATISTICS_DASHBOARD = 'UPDATE_STATISTICS_DASHBOARD',
  UPDATE_RECENTLY_LISTED_DASHBOARD = 'UPDATE_RECENTLY_LISTED_DASHBOARD',
  UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD = 'UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD',
  UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD = 'UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD',
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
  | {type: ActionType.UPDATE_STATISTICS_DASHBOARD; statistics: string};

export type DashboardReducer = (
  state: DashboardState,
  action: Actions,
) => DashboardState;
