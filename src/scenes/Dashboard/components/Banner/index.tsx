import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BannerItem} from '../../../../models';
import {normalize, toImageUri} from '../../../../utils/utils';
import styles from './styles';
import Swiper from 'react-native-swiper';

type Props = {
  listBanner: BannerItem[];
};

const Banner: React.FC<Props> = ({listBanner}) => {
  return (
    <View style={styles.container}>
      <Swiper
        height={normalize(133)}
        autoplay
        horizontal
        loop
        autoplayTimeout={3}
        paginationStyle={styles.paginationStyle}
        dot={
          <TouchableOpacity>
            <View style={styles.dot} />
          </TouchableOpacity>
        }
        activeDot={<View style={[styles.dot, styles.bgWhite]} />}
        removeClippedSubviews={false}>
        {listBanner.map(item => (
          <Image
            source={{uri: toImageUri(item.bgImageMobile)}}
            style={styles.itemSlide}
            key={item.bgImageMobile}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default Banner;
