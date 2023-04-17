import {BannerItem, HeroItemType} from '../models';

export type DashboardState = {
  dashboard: {
    banner?: BannerItem[];
    statistics?: string;
    listRecently?: HeroItemType[];
  };
};

export type InitState = {
  dashboardState: DashboardState;
};

export const enum ActionType {
  UPDATE_BANNER_DASHBOARD = 'UPDATE_BANNER_DASHBOARD',
  UPDATE_STATISTICS_DASHBOARD = 'UPDATE_STATISTICS_DASHBOARD',
  UPDATE_RECENTLY_LISTED_DASHBOARD = 'UPDATE_RECENTLY_LISTED_DASHBOARD',
}
export type Actions =
  | {type: ActionType.UPDATE_BANNER_DASHBOARD; banners: BannerItem[]}
  | {
      type: ActionType.UPDATE_RECENTLY_LISTED_DASHBOARD;
      listRecently: HeroItemType[];
    }
  | {type: ActionType.UPDATE_STATISTICS_DASHBOARD; statistics: string};

export type DashboardReducer = (
  state: DashboardState,
  action: Actions,
) => DashboardState;
