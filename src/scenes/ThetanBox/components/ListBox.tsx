import React from 'react';
import {StyleSheet, View} from 'react-native';
import {normalize} from '../../../utils/utils';
import BoxCard from './BoxCard';
import {BoxItemType} from './GiftBox';

const fakeDataGiftBox: BoxItemType[] = [
  {
    bgPath: 'thetanbox/bg_3.png',
    blurColor: '',
    boxType: 3,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_3.png',
    name: 'Legendary',
    openTime: 86400,
    refType: 0,
    systemPrice: {
      decimals: 8,
      name: 'THC',
      type: 11,
      value: 50000000000,
    },
    ribbonPath: 'thetanbox/ribbon_3.png',
    textColor: '#00F0FF',
  },
  {
    bgPath: 'thetanbox/bg_2.png',
    blurColor: '',
    boxType: 2,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_2.png',
    name: 'Epic',
    openTime: 86400,
    systemPrice: {
      decimals: 8,
      name: 'THC',
      type: 11,
      value: 50000000000,
    },
    refType: 0,
    ribbonPath: 'thetanbox/ribbon_2.png',
    textColor: '#00F0FF',
  },
  {
    bgPath: 'thetanbox/bg_7.png',
    blurColor: '',
    boxType: 7,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_7.png',
    name: 'Cosmetic',
    openTime: 86400,
    systemPrice: {
      decimals: 8,
      name: 'THC',
      type: 11,
      value: 50000000000,
    },
    refType: 0,
    ribbonPath: 'thetanbox/ribbon_7.png',
    textColor: '#00F0FF',
  },
  {
    bgPath: 'thetanbox/bg_1.png',
    blurColor: '',
    boxType: 1,
    color: '#00C2FF',
    cycleSize: 10000,
    defaultRewardBox: 11,
    highRewardLimitBoxes: 10000,
    imgPath: 'thetanbox/box_1.png',
    name: 'Common',
    openTime: 86400,
    systemPrice: {
      decimals: 8,
      name: 'THC',
      type: 11,
      value: 50000000000,
    },
    refType: 0,
    ribbonPath: 'thetanbox/ribbon_1.png',
    textColor: '#00F0FF',
  },
];

const ListBox: React.FC = () => {
  return (
    <View style={styles.container}>
      {fakeDataGiftBox.map(item => (
        <BoxCard key={item.boxType} data={item} />
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
});
export default ListBox;
