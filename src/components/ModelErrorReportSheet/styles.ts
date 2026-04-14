import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
    container: {
      paddingHorizontal: 16,
      paddingTop: 8,
      gap: 12,
    },
    privacyNote: {
      color: design.palette.textMuted,
      lineHeight: 18,
      backgroundColor: design.rowSurface,
      padding: 12,
      borderRadius: design.innerRadius,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    errorSection: {
      backgroundColor: theme.colors.errorContainer,
      padding: 12,
      borderRadius: design.innerRadius,
    },
    errorLabel: {
      color: theme.colors.onErrorContainer,
      marginBottom: 4,
    },
    errorText: {
      color: theme.colors.onErrorContainer,
    },
    groupContainer: {
      backgroundColor: design.rowSurface,
      borderRadius: design.innerRadius,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      overflow: 'hidden',
    },
    groupDisabled: {
      opacity: 0.5,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 12,
    },
    groupTitle: {
      flex: 1,
      color: theme.colors.onSurface,
    },
    groupContent: {
      paddingHorizontal: 12,
      paddingBottom: 10,
      gap: 4,
    },
    fieldRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 2,
    },
    fieldLabel: {
      color: theme.colors.onSurfaceVariant,
      flex: 1,
    },
    fieldValue: {
      color: theme.colors.onSurface,
      flex: 2,
      textAlign: 'right',
    },
    jsonText: {
      color: theme.colors.onSurface,
      fontSize: 11,
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      backgroundColor: design.rowSurfaceMuted,
      padding: 8,
      borderRadius: 10,
    },
    additionalSection: {
      gap: 6,
    },
    label: {
      color: theme.colors.onSurface,
    },
    textInput: {
      backgroundColor: design.inputSurface,
      fontSize: 14,
    },
    button: {},
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 16,
    },
  };
  })());
