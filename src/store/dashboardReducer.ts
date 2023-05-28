import {DashboardReducer, ActionType} from './type';

const dashboardReducer: DashboardReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_BANNER_DASHBOARD:
      return {dashboard: {...state.dashboard, banner: action.banners}};
    case ActionType.UPDATE_STATISTICS_DASHBOARD:
      return {dashboard: {...state.dashboard, statistics: action.statistics}};
    case ActionType.UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD:
      return {
        dashboard: {
          ...state.dashboard,
          listRecentlyHeroes: action.listRecentlyHeroes,
        },
      };
    case ActionType.UPDATE_RECENTLY_LISTED_COSMETICS_DASHBOARD:
      return {
        dashboard: {
          ...state.dashboard,
          listRecentlyCosmetics: action.listRecentlyCosmetics,
        },
      };
    default:
      return state;
  }
};

export default dashboardReducer;
