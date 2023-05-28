import React from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import {
  avatar,
  icArrowLeft,
  icGift,
  icMagicpen,
  icMarket,
} from '../../assets/img';
import OxaniumText from '../../components/OxaniumText';
import styles from './Menu.styles';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
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

const Menu: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
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
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={styles.profile}>
        <Image alt="Avatar" style={styles.avatar} source={avatar} />
        <View style={styles.contentProfile}>
          <OxaniumText style={styles.name}>Do Hoang Long</OxaniumText>
          <OxaniumText style={styles.id}>
            Lorem ipsum ... adipiscing elit.
          </OxaniumText>
        </View>
        <Image alt="icon" style={styles.iconArrow} source={icArrowLeft} />
      </TouchableOpacity>
      <FlatList data={menu} renderItem={renderItem} keyExtractor={setKey} />
    </View>
  );
};

export default Menu;
