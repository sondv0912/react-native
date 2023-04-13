import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BoxItemType} from './GiftBox';
import {normalize, toImageUri} from '../../../utils/utils';
import OxaniumText from '../../../components/OxaniumText';

type Props = {
  data: BoxItemType;
};

const BoxCard: React.FC<Props> = ({data}) => {
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
        <View style={styles.boxPrice}>
          <View style={styles.rowTop}>
            <OxaniumText style={styles.titlePrice}>Price</OxaniumText>
            <View style={styles.price}>
              <Image
                style={styles.iconPrice}
                source={require('../../../assets/img/ic_THC.png')}
              />
              <OxaniumText style={styles.valuePrice}>
                {data.systemPrice.value /
                  Math.pow(10, data.systemPrice.decimals)}
              </OxaniumText>
              <OxaniumText style={styles.typePrice}>
                {data.systemPrice.name}
              </OxaniumText>
            </View>
          </View>
          <OxaniumText style={styles.priceDolaValue}>$ 209.45 USD</OxaniumText>
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
  },
  limited: {},
  name: {
    color: 'white',
    fontSize: normalize(12),
    lineHeight: normalize(15),
    textTransform: 'uppercase',
    fontWeight: '700',
    paddingHorizontal: normalize(8),
    marginBottom: normalize(4),
  },
  boxPrice: {
    padding: normalize(8),
    backgroundColor: '#000',
  },
  rowTop: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: normalize(2),
    alignItems: 'center',
  },
  titlePrice: {
    color: 'white',
    fontSize: normalize(8),
    lineHeight: normalize(10),
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    gap: normalize(4),
    textAlign: 'right',
  },
  iconPrice: {
    width: normalize(12),
    height: normalize(12),
  },
  valuePrice: {
    fontSize: normalize(12),
    fontWeight: '700',
    color: '#FFE076',
  },
  typePrice: {
    fontSize: normalize(8),
    color: '#FFE076',
    fontWeight: '400',
  },
  priceDolaValue: {
    fontSize: normalize(8),
    lineHeight: normalize(10),
    color: '#C6C9DC',
    textAlign: 'right',
  },
});

export default BoxCard;
