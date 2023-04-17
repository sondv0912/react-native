import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import OxaniumText from '../../../../components/OxaniumText';
import HeroCard from '../HeroCard';
import styles from './styles';
import {HeroItemType} from '../../../../models';
import {icCosmetic, icHero} from '../../../../assets/img';

type Props = {
  data: HeroItemType[];
};

const RecentlyListed: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.root}>
      <OxaniumText style={styles.heading}>RecentlyListed</OxaniumText>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Image source={icHero} />
          <OxaniumText style={styles.tabTitle}>Heroes</OxaniumText>
          <View style={styles.borderActive} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={icCosmetic} />
          <OxaniumText style={styles.tabTitle}>Cosmetic</OxaniumText>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {data.map(item => (
          <HeroCard data={item} key={item.id} />
        ))}
      </View>
      <View style={styles.wrapperBtn}>
        <TouchableOpacity style={styles.btnMore}>
          <OxaniumText style={styles.btnTitle}>
            View more recently listed
          </OxaniumText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecentlyListed;
