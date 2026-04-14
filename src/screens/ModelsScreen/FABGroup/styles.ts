import {StyleSheet} from 'react-native';

import {Theme} from '../../../utils/types';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) => {
  const design = getAppDesign(theme);

  return StyleSheet.create({
    fab: {
      bottom: 0,
      right: 16,
      backgroundColor: design.sectionBackground,
      borderColor: design.cardBorderColor,
      borderWidth: 1,
      borderRadius: 18,
    },
    actionButton: {
      backgroundColor: design.sectionBackground,
      borderColor: design.cardBorderColor,
      borderWidth: 1,
      borderRadius: 18,
    },
    icon: {
      width: 24,
      height: 24,
    },
  });
};
