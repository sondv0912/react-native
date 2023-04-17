import {DashboardReducer, ActionType} from './type';

const dashboardReducer: DashboardReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_BANNER_DASHBOARD:
      return {dashboard: {...state.dashboard, banner: action.banners}};
    case ActionType.UPDATE_STATISTICS_DASHBOARD:
      return {dashboard: {...state.dashboard, statistics: action.statistics}};
    case ActionType.UPDATE_RECENTLY_LISTED_DASHBOARD:
      return {
        dashboard: {...state.dashboard, listRecently: action.listRecently},
      };
    default:
      return state;
  }
};

export default dashboardReducer;
