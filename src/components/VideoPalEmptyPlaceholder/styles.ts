import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    container: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingTop: 28,
      gap: 18,
      minHeight: 400,
    },
    content: {
      alignItems: 'center',
      gap: 10,
      maxWidth: 320,
    },
    title: {
      color: theme.colors.onSurface,
      textAlign: 'center',
      fontSize: 28,
      lineHeight: 34,
      fontWeight: '800',
    },
    subtitle: {
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
      ...theme.fonts.bodyMedium,
    },
    experimentalNotice: {
      backgroundColor: `${theme.colors.primary}18`,
      borderRadius: 999,
      paddingHorizontal: 12,
      paddingVertical: 6,
      marginBottom: 6,
      maxWidth: '100%',
      borderWidth: 1,
      borderColor: design.accentBorder,
    },
    experimentalText: {
      color: '#cfe0ff',
      textAlign: 'center',
      ...theme.fonts.bodySmall,
    },
    instructionsContainer: {
      alignItems: 'flex-start',
      gap: 5,
      width: '100%',
      padding: 16,
      borderRadius: design.cardRadius,
      backgroundColor: design.mutedSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    instructionsTitle: {
      color: theme.colors.onSurface,
      marginBottom: 6,
      ...theme.fonts.titleSmall,
    },
    instructionStep: {
      color: theme.colors.onSurfaceVariant,
      ...theme.fonts.bodySmall,
    },

    logo: {
      width: 84,
      height: 84,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.accentTint,
      borderWidth: 1,
      borderColor: design.accentBorder,
    },
    };
  })());
