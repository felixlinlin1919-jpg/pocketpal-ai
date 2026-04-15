import {useTheme as usePaperTheme, MD3Theme} from 'react-native-paper';

import {uiStore} from '../store';

import {Theme} from '../utils/types';
import {animeTheme, creamTheme, darkTheme, lightTheme} from '../utils/theme';

export const useTheme = (): Theme => {
  const paperTheme = usePaperTheme<MD3Theme>();

  const theme =
    uiStore.colorScheme === 'dark'
      ? darkTheme
      : uiStore.colorScheme === 'anime'
        ? animeTheme
      : uiStore.colorScheme === 'cream'
        ? creamTheme
        : lightTheme;

  return {
    ...paperTheme,
    ...theme,
  } as Theme;
};
