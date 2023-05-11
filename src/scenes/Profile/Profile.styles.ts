import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';
import styled from 'styled-components/native';
export const Root = styled.View`
    background-color: #0F0933,
    display: flex,
    flex: 1,
  `;
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#0F0933',
    display: 'flex',
    flex: 1,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#5336D0',
    position: 'relative',
    justifyContent: 'center',
    paddingVertical: normalize(30),
    gap: normalize(8),
    alignItems: 'center',
  },
  avatar: {
    width: normalize(80),
    height: normalize(80),
  },
  contentProfile: {
    display: 'flex',
    gap: normalize(6),
    alignItems: 'center',
  },
  iconBg: {
    position: 'absolute',
    height: normalize(100),
    width: normalize(92),
    bottom: 0,
    left: 0,
  },
  iconBg2: {
    left: undefined,
    right: 0,
    top: normalize(10),
    bottom: undefined,
    height: normalize(90),
    width: normalize(64),
  },
  name: {
    fontSize: normalize(18),
    lineHeight: normalize(20),
    fontWeight: '700',
    color: '#fff',
  },
  id: {
    fontSize: normalize(14),
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
