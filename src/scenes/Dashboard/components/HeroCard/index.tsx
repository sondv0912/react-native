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
import {HeroItemType} from '../../../../models';

type Props = {
  data: HeroItemType;
};

const HeroCard: React.FC<Props> = ({data}) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        source={{uri: toImageUri(data.imageAvatar)}}
        style={styles.avatar}
      />
      <Image source={bgItemHero} style={styles.bgItem} />
      <View style={styles.contentTop}>
        <Image source={icTrophyD} />
        <View style={styles.level}>
          <Image source={bgLevel} style={styles.bgLevel} />
          <OxaniumText style={styles.valueLevel}>{data.level}</OxaniumText>
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
            <OxaniumText style={styles.nameSkin}>{data.skinName}</OxaniumText>
            <OxaniumText style={styles.name}>{data.name}</OxaniumText>
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
              data.battleCapMax - data.battleCap
            }/${data.battleCapMax}`}</OxaniumText>
          </View>
          <View style={styles.flexSpaceBetween}>
            <OxaniumText style={styles.textFontSize9}>Price</OxaniumText>
            <View style={styles.price}>
              <Image source={icTHC} style={styles.iconPrice} />
              <OxaniumText style={styles.valuePrice}>
                {data.rentOutInfo.price.value /
                  Math.pow(10, data.rentOutInfo.price.decimals)}
              </OxaniumText>
              <OxaniumText style={styles.typePrice}>
                {data.rentOutInfo.price.name}
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
