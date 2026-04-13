import {ImageSourcePropType} from 'react-native';

const REMOTE_URI_PATTERN = /^(https?:\/\/|file:\/\/|content:\/\/|asset:\/\/|data:image\/)/i;

export const resolveCharacterImageUri = (
  path?: string,
): string | undefined => {
  const trimmedPath = path?.trim();

  if (!trimmedPath) {
    return undefined;
  }

  if (REMOTE_URI_PATTERN.test(trimmedPath)) {
    return trimmedPath;
  }

  if (trimmedPath.startsWith('/')) {
    return `file://${trimmedPath}`;
  }

  return trimmedPath;
};

export const getCharacterImageSource = (
  path?: string,
): ImageSourcePropType | undefined => {
  const uri = resolveCharacterImageUri(path);

  if (!uri) {
    return undefined;
  }

  return {uri};
};
