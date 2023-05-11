import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#0F0933',
    display: 'flex',
    gap: normalize(12),
    flex: 1,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1B1444',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(8),
    gap: normalize(8),
    alignItems: 'center',
  },
  avatar: {
    width: normalize(52),
    height: normalize(52),
  },
  contentProfile: {
    display: 'flex',
    gap: normalize(6),
    flex: 1,
  },
  name: {
    fontSize: normalize(14),
    lineHeight: normalize(20),
    fontWeight: '700',
    color: '#fff',
  },
  id: {
    fontSize: normalize(10),
    lineHeight: normalize(16),
    fontWeight: '400',
    color: '#CFCED6',
  },
  iconArrow: {
    transform: [{rotate: '180deg'}],
  },
  menu: {
    display: 'flex',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: normalize(8),
    backgroundColor: '#1B1444',
    paddingHorizontal: normalize(20),
    alignItems: 'center',
    borderBottomWidth: normalize(3),
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: normalize(18),
  },
  itemTitle: {
    fontSize: normalize(14),
    lineHeight: normalize(20),
    fontWeight: '400',
    color: '#FFFFFF',
    flex: 1,
  },
});

export default styles;
