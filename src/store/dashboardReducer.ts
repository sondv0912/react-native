import {DashboardReducer, EnumActionType} from './type';

const dashboardReducer: DashboardReducer = (state, action) => {
  switch (action.type) {
    case EnumActionType.UPDATE_BANNER_DASHBOARD:
      return {dashboard: {...state.dashboard, banner: action.banners}};
    case EnumActionType.UPDATE_STATISTICS_DASHBOARD:
      return {dashboard: {...state.dashboard, statistics: action.statistics}};
    default:
      return state;
  }
};

export default dashboardReducer;
