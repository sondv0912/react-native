import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
  formatParamPath,
  parseCosmeticType,
  toImageUri,
} from '../../../../utils/utils';
import {bgItemHero, icTHC} from '../../../../assets/img';
import OxaniumText from '../../../../components/OxaniumText';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {CosmeticItemType, CosmeticType} from '../../../../models';

type Props = {
  data: CosmeticItemType;
};

const CosmeticsCard: React.FC<Props> = ({data}) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Image
        source={{
          uri: toImageUri(
            formatParamPath('cosmetics/cosmetic_{id}.png', {
              id: data.cosmeticInfo.typeId,
            }),
          ),
        }}
        style={[
          styles.avatar,
          data.cosmeticType === CosmeticType.SPACESHIP &&
            styles.avatarSpaceship,
        ]}
      />
      <Image source={bgItemHero} style={styles.bgItem} />
      <View style={styles.content}>
        <LinearGradient
          colors={['rgba(0, 45, 206, 0.2)', '#0127AA']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.itemInfo}>
          <View style={styles.info}>
            <View style={styles.borderRight} />
            {!!data.cosmeticName && (
              <OxaniumText style={styles.nameSkin}>
                {data.cosmeticName}
              </OxaniumText>
            )}
            <OxaniumText style={styles.name}>
              {parseCosmeticType(data.cosmeticType)}
            </OxaniumText>
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
        <View style={styles.statsItem}>
          <View style={styles.flexSpaceBetween}>
            <OxaniumText style={styles.textFontSize9}>Price</OxaniumText>
            <View style={styles.price}>
              <Image source={icTHC} style={styles.iconPrice} />
              <OxaniumText style={styles.valuePrice}>
                {data.saleInfo.price.value /
                  Math.pow(10, data.saleInfo.price.decimals)}
              </OxaniumText>
              <OxaniumText style={styles.typePrice}>
                {data.saleInfo.price.name}
              </OxaniumText>
            </View>
          </View>
          <OxaniumText style={styles.priceDolaValue}>$ 209.45 USD</OxaniumText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CosmeticsCard;
