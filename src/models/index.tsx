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

export type HeroItemType = {
  battleCap: number;
  battleCapMax: number;
  created: '2023-02-15T09:19:35.863Z';
  dmg: number;
  heroRarity: number;
  heroRole: number;
  heroTypeId: number;
  hp: number;
  id: string;
  imageAvatar: string;
  imageFull: string;
  lastModified: string;
  level: number;
  marketType: number;
  name: string;
  ownerAddress: string;
  ownerId: string;
  price: number;
  refId: string;
  refType: number;
  rentOutInfo: {
    price: {
      decimals: number;
      name: string;
      type: number;
      value: number;
    };
    periodHours: number;
    rentBattles: number;
    thcBonus: number;
    winRateTHC: Record<string, number>;
    systemCurrency: {
      decimals: number;
      name: string;
      type: number;
      value: number;
    };
    timestamp: string;
    tokenId: string;
    trophyClass: number;
  };
  skinId: number;
  skinName: string;
  skinRarity: number;
  status: number;
};

export type ConfigBanner = {
  listBanner: BannerItem[];
  timeout: number;
};
export type ConfigRecently = {
  listItem: HeroItemType[];
  timeout: number;
};
