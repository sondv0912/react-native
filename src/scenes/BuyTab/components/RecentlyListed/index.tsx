import React from 'react';
import {View} from 'react-native';
import HeroCard from '../HeroCard';
import styles from './styles';
import {ReduxContext} from '../../../../components/ReduxProvider';
import {TabCategoryItem} from '../../../../models';
import CosmeticsCard from '../CosmetisCard';

type Props = {
  tab: TabCategoryItem;
};

const RecentlyListed: React.FC<Props> = ({tab}) => {
  const {state} = React.useContext(ReduxContext);
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

  return <View style={styles.list}>{renderList()}</View>;
};

export default RecentlyListed;
