import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import OxaniumText from '../../../../components/OxaniumText';
import HeroCard from '../HeroCard';
import styles from './styles';
import {icCosmetic, icHero} from '../../../../assets/img';
import {ReduxContext} from '../../../../components/ReduxProvider';
import {ConfigRecently, TabCategoryItem} from '../../../../models';
import {callApi} from '../../../../https/fetch';
import {ActionType} from '../../../../store/type';
import CosmeticsCard from '../CosmetisCard';

const RecentlyListed: React.FC = () => {
  const {state, dispatch} = React.useContext(ReduxContext);
  const [tab, setTab] = React.useState<TabCategoryItem>(TabCategoryItem.HEROES);
  const {listRecentlyHeroes, listRecentlyCosmetics} = React.useMemo(
    () => state.dashboardState.dashboard,
    [state],
  );
  const renderListHeroes = () => {
    return (
      <>
        {listRecentlyHeroes &&
          listRecentlyHeroes.map((item, index) => (
            <HeroCard data={item} key={item.id + index} />
          ))}
      </>
    );
  };
  const renderListCosmetics = () => {
    return (
      <>
        {listRecentlyCosmetics &&
          listRecentlyCosmetics.map((item, index) => (
            <CosmeticsCard data={item} key={item.id + index} />
          ))}
      </>
    );
  };
  const renderList = () => {
    switch (tab) {
      case TabCategoryItem.HEROES:
        return renderListHeroes();
      case TabCategoryItem.COSMETICS:
        return renderListCosmetics();
      default:
        return renderListHeroes();
    }
  };
  React.useEffect(() => {
    const onFetch = async () => {
      const resRecently = await callApi<ConfigRecently>(
        'https://data.staging.thetanarena.com/theta/v1/mkpdashboard/hero/getrecentlylisted?size=10',
      );
      if (resRecently.success && resRecently.data?.listItem) {
        dispatch({
          type: ActionType.UPDATE_RECENTLY_LISTED_HEROES_DASHBOARD,
          listRecentlyHeroes: resRecently.data.listItem,
        });
      }
    };
    onFetch();
  }, [dispatch]);
  return (
    <View style={styles.root}>
      <OxaniumText style={styles.heading}>RecentlyListed</OxaniumText>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setTab(TabCategoryItem.HEROES)}>
          <Image source={icHero} />
          <OxaniumText style={styles.tabTitle}>Heroes</OxaniumText>
          {/* {tab === TabCategoryItem.HEROES && (
            <View style={styles.borderActive} />
          )} */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setTab(TabCategoryItem.COSMETICS)}>
          <Image source={icCosmetic} />
          <OxaniumText style={styles.tabTitle}>Cosmetic</OxaniumText>
          {/* {tab === TabCategoryItem.COSMETICS && (
            <View style={styles.borderActive} />
          )} */}
        </TouchableOpacity>
      </View>
      <View style={styles.list}>{renderList()}</View>
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
