import React from 'react';
import {ScrollView} from 'react-native';
import Banner from './components/Banner';
import Statistics from './components/Statistics';
import RecentlyListed from './components/RecentlyListed';
import useAppDispatch from '../../redux/useAppDispatch';
import useAppSelector from '../../redux/useAppSelector';
import {
  fetchBanner,
  selectDashboardBanner,
} from '../../redux/reducer/dashboardSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const banner = useAppSelector(selectDashboardBanner);
  const fetchData = React.useCallback(async () => {
    dispatch(fetchBanner());
  }, [dispatch]);
  React.useEffect(() => {
    fetchData();
  }, [dispatch, fetchData]);
  return (
    <ScrollView>
      {!!banner && <Banner listBanner={banner} />}
      <Statistics />
      <RecentlyListed />
    </ScrollView>
  );
};

export default Dashboard;
