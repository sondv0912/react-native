import axiosDefault from '../https/base';
import {ConfigBanner} from '../models';

export const getBannerDashboard = async () => {
  const res = await axiosDefault<ConfigBanner>({
    url: 'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/banner/getlist',
  });
  if (res.data?.listBanner && !res.status) {
    return res.data.listBanner;
  }
  return undefined;
};
