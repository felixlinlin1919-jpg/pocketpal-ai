import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
      stepItem: {
        paddingVertical: 8,
        marginVertical: 2,
      },
      stepRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
      },
      textContainer: {
        flex: 1,
        marginLeft: 12,
      },
      stepText: {
        fontSize: 14,
        color: theme.colors.onSurface,
      },
      errorDetails: {
        marginTop: 10,
        padding: 12,
        backgroundColor: theme.colors.errorContainer,
        borderRadius: design.innerRadius,
        borderWidth: 1,
        borderColor: `${theme.colors.error}44`,
      },
      errorText: {
        color: theme.colors.error,
        fontSize: 13,
      },
    stepsContainer: {
      marginTop: 16,
      backgroundColor: design.rowSurface,
      borderRadius: design.innerRadius,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
        paddingVertical: 6,
      },
    };
  })());
