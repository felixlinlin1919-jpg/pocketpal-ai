import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      sheetScrollViewContainer: {
        padding: 16,
        paddingBottom: 28,
      },
      secondaryButtons: {
        flexDirection: 'row',
        gap: 10,
      },
      multimodalDivider: {
        marginVertical: 18,
        backgroundColor: design.dividerColor,
      },
      multimodalSectionTitle: {
        ...design.sectionTitle,
        marginBottom: 12,
      },
    };
  })());
