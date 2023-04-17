import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {toImageUri} from '../../../../utils/utils';
import {
  bgItemHero,
  bgLevel,
  icRoleAssasin,
  icShoppingCart,
  icTHC,
  icTrophyD,
} from '../../../../assets/img';
import OxaniumText from '../../../../components/OxaniumText';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
const fakeData = {
  battleCap: 227,
  battleCapMax: 227,
  created: '2023-02-15T09:19:35.863Z',
  dmg: 0,
  heroRarity: 0,
  heroRole: 1,
  heroTypeId: 0,
  hp: 0,
  id: '63eca3a7d96bfb86b536ff08',
  imageAvatar: 'skin/avatar/1.png',
  imageFull: 'skin/full/1.png',
  lastModified: '0001-01-01T00:00:00Z',
  level: 1,
  marketType: 0,
  name: 'Raidon',
  ownerAddress: '0xa03f89a06beeb7d4d49080ad1cbc671ee2c6df86',
  ownerId: '642e7822865d2f358ac10d58',
  price: 5000000000,
  refId: '63eca3a7d96bfb86b536ff08',
  refType: 0,
  rentOutInfo: {
    price: {
      decimals: 8,
      name: 'THC',
      type: 11,
      value: 5000000000,
    },
    periodHours: 1,
    rentBattles: 50,
    thcBonus: 3.25,
    winRateTHC: {
      65: 319,
    },
    systemCurrency: {decimals: 8, name: 'THC', type: 11, value: 5000000000},
    timestamp: '2023-04-10T09:12:15.644926131Z',
    tokenId: '16764527804346',
    trophyClass: 1,
  },
  skinId: 1,
  skinName: 'Galaxy Ranger',
  skinRarity: 0,
  status: 11,
};
const HeroCard = () => {
  console.log(toImageUri(fakeData.imageAvatar));

  return (
    <TouchableOpacity style={styles.root}>
      <Image
        source={{uri: toImageUri(fakeData.imageAvatar)}}
        style={styles.avatar}
      />
      <Image source={bgItemHero} style={styles.bgItem} />
      <View style={styles.contentTop}>
        <Image source={icTrophyD} />
        <View style={styles.level}>
          <Image source={bgLevel} style={styles.bgLevel} />
          <OxaniumText style={styles.valueLevel}>{fakeData.level}</OxaniumText>
        </View>
        <Image source={icRoleAssasin} style={styles.icRole} />
      </View>
      <View style={styles.content}>
        <LinearGradient
          colors={['rgba(0, 45, 206, 0.2)', '#0127AA']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.6615}}
          style={styles.itemInfo}>
          <View style={styles.info}>
            <View style={styles.borderRight} />
            <OxaniumText style={styles.nameSkin}>
              {fakeData.skinName}
            </OxaniumText>
            <OxaniumText style={styles.name}>{fakeData.name}</OxaniumText>
          </View>
          <View style={styles.flexSpaceBetween}>
            <OxaniumText style={styles.releasedTitle}>
              Released time
            </OxaniumText>
            <OxaniumText style={styles.textFontSize9}>
              12 minutes ago
            </OxaniumText>
          </View>
        </LinearGradient>
        <View style={styles.traddingEvent}>
          <OxaniumText style={styles.traddingEventTitle}>
            Trading Event
          </OxaniumText>
        </View>
        <View style={styles.statsItem}>
          <View style={styles.flexSpaceBetween}>
            <OxaniumText style={styles.textFontSize9}>gTHC battle</OxaniumText>
            <OxaniumText style={styles.battleCap}>{`${
              fakeData.battleCapMax - fakeData.battleCap
            }/${fakeData.battleCapMax}`}</OxaniumText>
          </View>
          <View style={styles.flexSpaceBetween}>
            <OxaniumText style={styles.textFontSize9}>Price</OxaniumText>
            <View style={styles.price}>
              <Image source={icTHC} style={styles.iconPrice} />
              <OxaniumText style={styles.valuePrice}>
                {fakeData.rentOutInfo.price.value /
                  Math.pow(10, fakeData.rentOutInfo.price.decimals)}
              </OxaniumText>
              <OxaniumText style={styles.typePrice}>
                {fakeData.rentOutInfo.price.name}
              </OxaniumText>
            </View>
          </View>
          <OxaniumText style={styles.priceDolaValue}>$ 209.45 USD</OxaniumText>
          <View style={styles.btnBuy}>
            <Image source={icShoppingCart} style={styles.icBuy} />
            <OxaniumText style={styles.titleBuy}>Buy</OxaniumText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeroCard;
