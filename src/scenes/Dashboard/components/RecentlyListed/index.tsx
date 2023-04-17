import React from 'react';
import {View} from 'react-native';
import OxaniumText from '../../../../components/OxaniumText';
import HeroCard from '../HeroCard';
import styles from './styles';

const RecentlyListed = () => {
  return (
    <View style={styles.root}>
      <OxaniumText>RecentlyListed</OxaniumText>
      <View></View>
      <View>
        <HeroCard />
      </View>
    </View>
  );
};

export default RecentlyListed;
