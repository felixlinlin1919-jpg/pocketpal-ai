import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    menu: {
      shadowColor: 'rgba(0, 0, 0, 0.14)',
      shadowRadius: 32,
      shadowOffset: {width: 0, height: 12},
      elevation: 10,
      borderRadius: 22,
      maxWidth: '90%',
    },
    menuWithSubmenu: {
      elevation: 0,
      shadowOpacity: 0,
    },
    content: {
      paddingVertical: 8,
      backgroundColor: design.elevatedSurface,
      borderRadius: 22,
      marginRight: 10,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    contentWithSubmenu: {
      backgroundColor: design.elevatedSurface,
    },
    groupSeparator: {
      height: 6,
      flexShrink: 0,
      backgroundColor: 'transparent',
    },
    separator: {
      backgroundColor: design.subtleBorderColor,
    },
    };
  })());
