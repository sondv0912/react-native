import {StyleSheet} from 'react-native';
import {normalize} from '../../../../utils/utils';

const styles = StyleSheet.create({
  root: {
    padding: normalize(20),
  },
  heading: {
    fontSize: normalize(16),
    fontWeight: '700',
    lineHeight: normalize(22),
    color: 'white',
    marginBottom: normalize(8),
  },
  tabs: {
    paddingTop: normalize(16),
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(255,255,255,.1)',
    borderBottomWidth: normalize(3),
    marginBottom: normalize(12),
  },
  tab: {
    position: 'relative',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(9),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(10),
  },
  tabTitle: {
    lineHeight: normalize(24),
    fontWeight: '600',
    fontSize: normalize(14),
    color: 'white',
  },
  borderActive: {
    position: 'absolute',
    height: normalize(4),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#795CF5',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(15),
  },
  wrapperBtn: {
    display: 'flex',
    alignItems: 'center',
  },
  btnMore: {
    marginTop: normalize(24),
    backgroundColor: '#5336D0',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(8),
    borderRadius: normalize(4),
  },
  btnTitle: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: 'white',
    lineHeight: normalize(24),
  },
});

export default styles;
