import {StyleSheet} from 'react-native';

import {Theme} from '../../../utils/types';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    modalRoot: {
      ...StyleSheet.absoluteFillObject,
    },
    dismissLayer: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
    },
    menu: {
      position: 'absolute',
      maxWidth: '90%',
      marginTop: 0,
      marginLeft: 0,
      backgroundColor: 'transparent',
      shadowColor: theme.variant === 'dark' ? '#000000' : '#5f4631',
      shadowRadius: theme.variant === 'cream' ? 18 : 24,
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: theme.variant === 'dark' ? 0.24 : 0.1,
      elevation: theme.variant === 'dark' ? 8 : 4,
    },
    content: {
      paddingVertical: 6,
      backgroundColor: theme.colors.menuBackground,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    };
  })());
