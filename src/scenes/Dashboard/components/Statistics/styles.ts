import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils/utils';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(20),
    marginVertical: normalize(16),
    backgroundColor:
      'linear-gradient(180deg, rgba(32, 14, 91, 0.6) 0%, rgba(108, 26, 213, 0.6) 100%), #1e0e59',
    borderColor: 'rgba(255,255,255,.1)',
    borderWidth: normalize(3),
    borderRadius: normalize(4),
  },
  tabs: {
    paddingTop: normalize(16),
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: normalize(3),
  },
  tab: {
    color: 'white',
    position: 'relative',
    fontSize: normalize(14),
    fontWeight: '600',
    lineHeight: normalize(24),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(9),
  },
  borderActive: {
    position: 'absolute',
    width: '100%',
    height: normalize(4),
    bottom: 0,
    left: 0,
    backgroundColor: '#795CF5',
  },
  content: {
    display: 'flex',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(24),
    gap: normalize(8),
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    gap: normalize(16),
    alignItems: 'center',
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
  title: {
    fontWeight: '400',
    fontSize: normalize(12),
    lineHeight: normalize(20),
    color: '#C4B7FC',
  },
  value: {
    fontWeight: '600',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    color: 'white',
  },
});

export default styles;
