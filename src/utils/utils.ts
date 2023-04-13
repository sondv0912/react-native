import {Dimensions, PixelRatio, Platform} from 'react-native';

export function toImageUri(path: string): string {
  return `https://storage.googleapis.com/thetan-staging-asset/${path}`;
}
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 376;
export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
