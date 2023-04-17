import {BannerItem} from '../models';

export type DashboardState = {
  dashboard: {
    banner?: BannerItem[];
    statistics?: string;
  };
};

export type InitState = {
  dashboardState: DashboardState;
};

export const enum EnumActionType {
  UPDATE_BANNER_DASHBOARD = 'UPDATE_BANNER_DASHBOARD',
  UPDATE_STATISTICS_DASHBOARD = 'UPDATE_STATISTICS_DASHBOARD',
}
export type ActionType =
  | {type: 'UPDATE_BANNER_DASHBOARD'; banners: BannerItem[]}
  | {type: 'UPDATE_STATISTICS_DASHBOARD'; statistics: string};

export type DashboardReducer = (
  state: DashboardState,
  action: ActionType,
) => DashboardState;
