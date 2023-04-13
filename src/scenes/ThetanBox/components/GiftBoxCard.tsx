import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {GiftBox} from './GiftBox';
import {normalize, toImageUri} from '../../../utils/utils';
import OxaniumText from '../../../components/OxaniumText';

type Props = {
  data: GiftBox;
};

const GiftBoxCard: React.FC<Props> = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: toImageUri(data.imgPath),
        }}
        style={styles.imageBox}
      />
      <Image
        source={{
          uri: toImageUri(data.bgPath),
        }}
        style={styles.ribbon}
      />
      <View style={styles.content}>
        <OxaniumText style={styles.name}>{data.name} box</OxaniumText>
        <OxaniumText style={styles.remain}>
          Remain boxes : <OxaniumText style={styles.textYellow}>1</OxaniumText>
        </OxaniumText>
        <View style={styles.ribbonFree}>
          {/* <View>
            <OxaniumText>Event</OxaniumText>
          </View> */}
          <OxaniumText style={styles.textFree}>FREE</OxaniumText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '46%',
    height: normalize(204),
    color: 'white',
    marginHorizontal: '2%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  imageBox: {
    width: '100%',
    height: normalize(120),
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    right: 0,
  },
  ribbon: {
    width: '100%',
    position: 'absolute',
    height: normalize(77),
    top: normalize(50),
    zIndex: 1,
    left: 0,
    right: 0,
  },
  content: {
    height: normalize(122),
    backgroundColor: '#0C0524',
    display: 'flex',
    justifyContent: 'flex-end',
    marginHorizontal: normalize(6),
    paddingHorizontal: normalize(8),
    paddingBottom: normalize(42),
    borderRadius: normalize(4),
  },
  name: {
    color: 'white',
    fontSize: normalize(12),
    lineHeight: normalize(15),
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  remain: {
    color: 'white',
    lineHeight: normalize(10),
    fontSize: normalize(8),
    fontWeight: '400',
  },
  ribbonFree: {
    position: 'absolute',
    backgroundColor: '#FFBA16',
    left: 0,
    right: 0,
    bottom: normalize(24),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: normalize(17),
  },
  textYellow: {
    color: '#FFB800',
  },
  textFree: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});

export default GiftBoxCard;
