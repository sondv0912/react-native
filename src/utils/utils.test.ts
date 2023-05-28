import {Dimensions, PixelRatio, Platform} from 'react-native';
import {formatParamPath, normalize} from './utils';

describe('formatParamPath', () => {
  test('returns the same path if no parameter is provided', () => {
    const path = '/api/user';
    const params = {};
    const result = formatParamPath(path, params);
    expect(result).toEqual('/api/user');
  });

  test('replaces parameter values correctly', () => {
    const path = '/api/user/{id}/profile/{section}';
    const params = {id: 123, section: 'bio'};
    const result = formatParamPath(path, params);
    expect(result).toEqual('/api/user/123/profile/bio');
  });

  test('ignores non-string or non-number parameter values', () => {
    const path = '/api/user/{id}/profile/{section}';
    const params = {id: 123, section: {type: 'basic'}};
    const result = formatParamPath(path, params);
    expect(result).toEqual('/api/user/123/profile/');
  });
});
describe('normalize', () => {
  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const scale = SCREEN_WIDTH / 376;
  test('normalizes font size for iOS', () => {
    Object.defineProperty(Platform, 'OS', {get: () => 'ios'});
    jest.spyOn(PixelRatio, 'roundToNearestPixel').mockReturnValue(15);
    const size = 20;
    const result = normalize(size);

    expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(size * scale);
    expect(result).toBe(15);
  });

  test('normalizes font size for Android', () => {
    Object.defineProperty(Platform, 'OS', {get: () => 'android'});
    jest.spyOn(PixelRatio, 'roundToNearestPixel').mockReturnValue(16);

    const size = 20;
    const result = normalize(size);

    expect(PixelRatio.roundToNearestPixel).toHaveBeenCalledWith(size * scale);
    expect(result).toBe(14);
  });
});
