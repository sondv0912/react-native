import {CosmeticType} from '../../models';

export interface InputArg {
  [key: string]:
    | unknown[]
    | InputArg
    | string
    | number
    | boolean
    | null
    | undefined;
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
