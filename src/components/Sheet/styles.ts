import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      container: {
        position: 'relative',
      },
      closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: design.iconSurface,
        borderWidth: 1,
        borderColor: design.subtleBorderColor,
      },
      header: {
        marginHorizontal: 16,
        marginTop: 4,
        marginBottom: 8,
        paddingBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: design.dividerColor,
      },
      title: {
        color: theme.colors.onSurface,
      },
    };
  })());
