import {Dimensions, PixelRatio, Platform} from 'react-native';
import {CosmeticType, InputArg} from '../models';

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

export const parseCosmeticType = (type?: CosmeticType) => {
  if (!type) {
    return '';
  }
  switch (type) {
    case CosmeticType.AVATAR: {
      return 'Avatar';
    }
    case CosmeticType.AVATAR_FRAME: {
      return 'Avatar Frame';
    }
    case CosmeticType.EMOTE: {
      return 'Emote';
    }
    case CosmeticType.SPACESHIP: {
      return 'SpaceShip';
    }
    default: {
      return '';
    }
  }
};

export function formatParamPath(path: string, params: InputArg): string {
  let parsedPath = path;
  Object.entries(params).forEach(([key, value]) => {
    const regex = new RegExp(`{${key}}`);
    const replacement =
      typeof value === 'string' || typeof value === 'number'
        ? value.toString()
        : '';
    parsedPath = parsedPath.replace(regex, replacement);
  });

  return parsedPath;
}
