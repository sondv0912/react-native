export type BannerItem = {
  bgImageDesktop: string;
  bgImageMobile: string;
  ctaLink: string;
  displayFrom: string;
  displayTo: string;
  format: number;
  sortOrder: number;
  status: number;
};

export type ConfigBanner = {
  listBanner: BannerItem[];
  timeout: number;
};
