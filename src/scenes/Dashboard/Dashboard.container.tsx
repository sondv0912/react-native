import React from 'react';
import {ScrollView} from 'react-native';
import Banner from './components/Banner';
import {ConfigBanner} from '../../models';
import {callApi} from '../../https/fetch';
import {ReduxContext} from '../../components/ReduxProvider';
import {EnumActionType} from '../../store/type';
import Statistics from './components/Statistics';
import RecentlyListed from './components/RecentlyListed';

const Dashboard = () => {
  const {state, dispatch} = React.useContext(ReduxContext);
  const {banner} = React.useMemo(() => state.dashboardState.dashboard, [state]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await callApi<ConfigBanner>(
        'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/banner/getlist',
      );
      if (res.success && res.data?.listBanner) {
        dispatch({
          type: EnumActionType.UPDATE_BANNER_DASHBOARD,
          banners: res.data.listBanner,
        });
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <ScrollView>
      {!!banner && <Banner listBanner={banner} />}
      <Statistics />
      <RecentlyListed />
    </ScrollView>
  );
};

export default Dashboard;
