import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils/utils';

const styles = StyleSheet.create({
  container: {
    height: normalize(133),
  },
  itemSlide: {
    flex: 1,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.33)',
    width: normalize(12),
    height: normalize(5),
    borderRadius: normalize(3),
    marginLeft: normalize(5),
    marginRight: normalize(5),
    marginTop: normalize(5),
    marginBottom: normalize(5),
  },
  paginationStyle: {
    bottom: normalize(10),
    padding: normalize(6),
  },
  bgWhite: {
    backgroundColor: 'white',
  },
});

export default styles;
