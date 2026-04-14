import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
      container: {
        gap: 8,
      },
      label: {
        color: theme.colors.onSurface,
      },
      sublabel: {
        color: theme.colors.onSurfaceVariant,
      },
      button: {
        justifyContent: 'space-between',
        borderRadius: design.innerRadius,
        borderColor: design.cardBorderColor,
        backgroundColor: design.mutedSurface,
      },
      buttonContent: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        minHeight: 52,
      },
      buttonError: {
        borderColor: theme.colors.error,
      },
      buttonDisabled: {
        opacity: 0.6,
      },
      selectedText: {
        color: theme.colors.onSurface,
      },
      placeholderText: {
        color: theme.colors.onSurfaceVariant,
      },
      disabledText: {
        color: theme.colors.onSurfaceVariant,
      },
      helperText: {
        color: theme.colors.onSurfaceVariant,
        marginTop: 4,
      },
      errorText: {
        color: theme.colors.error,
        marginTop: 4,
      },
    };
  })());
