import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    menu: {
      backgroundColor: 'transparent',
      shadowColor: theme.variant === 'dark' ? '#000000' : '#5f4631',
      shadowRadius: theme.variant === 'cream' ? 18 : 28,
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: theme.variant === 'dark' ? 0.28 : 0.1,
      elevation: theme.variant === 'dark' ? 10 : 5,
      borderRadius: 22,
      maxWidth: '90%',
    },
    menuWithSubmenu: {
      elevation: 0,
      shadowOpacity: 0,
    },
    content: {
      paddingVertical: 8,
      backgroundColor: theme.colors.menuBackground,
      borderRadius: 22,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    contentWithSubmenu: {
      backgroundColor: theme.colors.menuBackground,
    },
    groupSeparator: {
      height: 6,
      flexShrink: 0,
      backgroundColor: 'transparent',
    },
    separator: {
      backgroundColor: design.dividerColor,
    },
    };
  })());
