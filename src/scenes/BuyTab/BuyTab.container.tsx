import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import RecentlyListed from './components/RecentlyListed';
import {icCosmetic, icHero} from '../../assets/img';
import OxaniumText from '../../components/OxaniumText';
import {ConfigRecently, TabCategoryItem} from '../../models';
import {ReduxContext} from '../../components/ReduxProvider';
import {callApi} from '../../https/fetch';
import {ActionType} from '../../store/type';
import Pagination from '../../components/Pagination';
import ModalFilter from './components/ModalFilter';

const BuyTab = () => {
  const [tab, setTab] = React.useState<TabCategoryItem>(TabCategoryItem.HEROES);
  const [page, setPage] = React.useState<number>(1);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const {dispatch} = React.useContext(ReduxContext);
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
      <ScrollView>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTab(TabCategoryItem.HEROES)}>
            <Image source={icHero} />
            <OxaniumText style={styles.tabTitle}>Heroes</OxaniumText>
            {tab === TabCategoryItem.HEROES && (
              <View style={styles.borderActive} />
            )}
          </TouchableOpacity>
          <View style={styles.space} />
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTab(TabCategoryItem.COSMETICS)}>
            <Image source={icCosmetic} />
            <OxaniumText style={styles.tabTitle}>Cosmetic</OxaniumText>
            {tab === TabCategoryItem.COSMETICS && (
              <View style={styles.borderActive} />
            )}
          </TouchableOpacity>
        </View>
        <RecentlyListed tab={tab} />
        <Pagination
          page={page}
          onPageChange={pageCurrent => setPage(pageCurrent)}
          totalPages={10}
        />
      </ScrollView>
      <View style={styles.groupBtn}>
        <TouchableOpacity style={styles.btn} onPress={() => setShowModal(true)}>
          <OxaniumText style={styles.tabTitle}>Filter</OxaniumText>
        </TouchableOpacity>
      </View>
      <ModalFilter
        modalVisible={showModal}
        toggleModal={() => {
          setShowModal(!showModal);
        }}
      />
    </View>
  );
};

export default BuyTab;
