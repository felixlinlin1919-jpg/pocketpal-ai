import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      container: {
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        borderRadius: design.innerRadius,
        borderTopStartRadius: design.innerRadius,
        borderTopEndRadius: design.innerRadius,
        alignSelf: 'stretch',
        backgroundColor: design.inputSurface,
        overflow: 'hidden',
      },
      input: {
        backgroundColor: 'transparent',
      },
      placeholder: {
        opacity: 0.48,
      },
      divider: {
        width: 330,
        height: 0.33,
        backgroundColor: design.dividerColor,
        marginLeft: 20,
      },
    };
  })());
