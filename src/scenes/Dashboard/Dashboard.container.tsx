import React from 'react';
import {ScrollView} from 'react-native';
import Banner from './components/Banner';
import {ConfigBanner, ConfigRecently} from '../../models';
import {callApi} from '../../https/fetch';
import {ReduxContext} from '../../components/ReduxProvider';
import {ActionType} from '../../store/type';
import Statistics from './components/Statistics';
import RecentlyListed from './components/RecentlyListed';

const Dashboard = () => {
  const {state, dispatch} = React.useContext(ReduxContext);
  const {banner, listRecently} = React.useMemo(
    () => state.dashboardState.dashboard,
    [state],
  );
  const fetchData = React.useCallback(async () => {
    const res = await callApi<ConfigBanner>(
      'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/banner/getlist',
    );
    if (res.success && res.data?.listBanner) {
      dispatch({
        type: ActionType.UPDATE_BANNER_DASHBOARD,
        banners: res.data.listBanner,
      });
    }
    const resRecently = await callApi<ConfigRecently>(
      'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/hero/getrecentlylisted?size=10',
    );
    if (resRecently.success && resRecently.data?.listItem) {
      dispatch({
        type: ActionType.UPDATE_RECENTLY_LISTED_DASHBOARD,
        listRecently: resRecently.data.listItem,
      });
    }
  }, [dispatch]);
  React.useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);
  return (
    <ScrollView>
      {!!banner && <Banner listBanner={banner} />}
      <Statistics />
      {!!listRecently && <RecentlyListed data={listRecently} />}
    </ScrollView>
  );
};

export default Dashboard;
