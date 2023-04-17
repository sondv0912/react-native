import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import GiftBoxCard from './GiftBoxCard';
import {normalize} from '../../../utils/utils';
import OxaniumText from '../../../components/OxaniumText';

export type GiftBox = {
  bgPath: string;
  blurColor: string;
  boxType: number;
  color: string;
  cycleSize: number;
  defaultRewardBox: number;
  highRewardLimitBoxes: number;
  imgPath: string;
  isLimited: boolean;
  name: string;
  openTime: number;
  refType: number;
  ribbonPath: string;
  textColor: string;
};
export type BoxItemType = {
  bgPath: string;
  blurColor: string;
  boxType: number;
  color: string;
  cycleSize: number;
  defaultRewardBox: number;
  highRewardLimitBoxes: number;
  imgPath: string;
  name: string;
  openTime: number;
  refType: number;
  ribbonPath: string;
  textColor: string;
  systemPrice: {
    decimals: number;
    name: string;
    type: number;
    value: number;
  };
};

const fakeDataGiftBox: GiftBox[] = [
  {
    bgPath: 'thetanbox/bg_11.png',
    blurColor: '',
    boxType: 13,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_11.png',
    isLimited: false,
    name: 'Welcome',
    openTime: 86400,
    refType: 0,
    ribbonPath: 'thetanbox/ribbon_11.png',
    textColor: '#00F0FF',
  },
  {
    bgPath: 'thetanbox/bg_1.png',
    blurColor: '',
    boxType: 13,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_13.png',
    isLimited: true,
    name: 'Coinbase Loot',
    openTime: 86400,
    refType: 0,
    ribbonPath: 'thetanbox/ribbon_1.png',
    textColor: '#00F0FF',
  },
];

const GiftBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgGiftBox}>
        <View style={styles.bgHeader}>
          <Image
            source={require('../../../assets/svg/vector_header_giftbox.svg')}
            style={styles.vector}
          />
          <Image
            source={require('../../../assets/svg/vector_header_giftbox.svg')}
            style={styles.vector}
          />
          <OxaniumText style={styles.textGiftBox}>Gift Box</OxaniumText>
        </View>
      </View>
      {fakeDataGiftBox.map(item => (
        <GiftBoxCard key={item.name} data={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    position: 'relative',
    padding: normalize(20),
    marginTop: normalize(32),
  },
  bgGiftBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B1444',
    borderColor: '#5336D0',
    borderTopWidth: normalize(4),
    borderBottomWidth: normalize(3),
    borderStyle: 'solid',
  },
  bgHeader: {
    position: 'absolute',
    width: normalize(133),
    height: normalize(32),
    transform: [{translateY: -33}, {translateX: -66}],
    top: 0,
    left: '50%',
    backgroundColor: '#5336D0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: normalize(8),
    borderTopRightRadius: normalize(8),
  },
  textGiftBox: {
    fontSize: normalize(14),
    lineHeight: normalize(24),
    color: 'white',
    fontWeight: '700',
  },
  vector: {
    position: 'absolute',
    bottom: 0,
    left: normalize(-20),
    width: normalize(11),
    height: normalize(9),
  },
});

export default GiftBox;
