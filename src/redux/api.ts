import {callApi} from '../https/fetch';
import {ConfigBanner} from '../models';

export const getBannerDashboard = async () => {
  const res = await callApi<ConfigBanner>(
    'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/banner/getlist',
  );
  if (res.data?.listBanner && res.success) {
    return res.data.listBanner;
  }
  return undefined;
};
