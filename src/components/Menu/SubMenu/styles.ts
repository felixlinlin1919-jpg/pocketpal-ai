import {StyleSheet} from 'react-native';

import {Theme} from '../../../utils/types';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    menu: {
      maxWidth: '90%',
      marginTop: 0,
      marginLeft: 0,
      backgroundColor: 'transparent',
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
