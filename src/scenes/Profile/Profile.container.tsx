import React from 'react';
import {View, FlatList, Image} from 'react-native';
import OxaniumText from '../../components/OxaniumText';
import {
  avatar,
  icArrowLeft,
  icGift,
  icHexagon,
  icHexagon2,
  icMagicpen,
  icMarket,
} from '../../assets/img';
import styles, {Root} from './Profile.styles';
export type MenuType = {title: string; name: string; icon: any};
export const menu: MenuType[] = [
  {
    title: 'Vesting Safe',
    name: 'Vesting Safe',
    icon: icGift,
  },
  {
    title: 'Creator Corner',
    name: 'Creator Corner',
    icon: icMagicpen,
  },
  {
    title: 'Conversion Program',
    name: 'Conversion Program',
    icon: icMarket,
  },
];
const Profile: React.FC = () => {
  const renderItem = React.useCallback(
    (item: any) => (
      <View style={styles.item}>
        <Image alt="icon" source={item.item.icon} />
        <OxaniumText style={styles.itemTitle}>{item.item.title}</OxaniumText>
        <Image alt="icon" source={icArrowLeft} style={styles.iconArrow} />
      </View>
    ),
    [],
  );
  const setKey = React.useCallback((item: MenuType) => item.title, []);
  return (
    <Root>
      <View style={styles.profile}>
        <Image alt="icHexagon" style={styles.iconBg} source={icHexagon} />
        <Image
          alt="icHexagon"
          style={[styles.iconBg, styles.iconBg2]}
          source={icHexagon2}
        />
        <View style={styles.contentProfile}>
          <Image alt="icHexagon" style={styles.avatar} source={avatar} />
          <OxaniumText style={styles.name}>Do Hoang Long</OxaniumText>
          <OxaniumText style={styles.id}>0x4121eb5...70cad37a</OxaniumText>
        </View>
      </View>
      <FlatList data={menu} renderItem={renderItem} keyExtractor={setKey} />
    </Root>
  );
};

export default Profile;
