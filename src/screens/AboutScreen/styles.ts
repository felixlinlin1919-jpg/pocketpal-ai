import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flexGrow: 1,
      padding: theme.spacing.default,
      paddingBottom: theme.spacing.default + insets.bottom,
    },
    card: {
      ...design.cardStyle,
      overflow: 'hidden',
    },
    header: {
      padding: theme.spacing.default * 2,
      backgroundColor: design.mutedSurface,
      borderBottomWidth: 1,
      borderBottomColor: design.subtleBorderColor,
    },
    headerContent: {
      gap: theme.spacing.default,
    },
    title: {
      ...theme.fonts.headlineLarge,
      color: theme.colors.onSurface,
      marginBottom: theme.spacing.default / 2,
      letterSpacing: -0.5,
    },
    description: {
      color: theme.colors.onSurfaceVariant,
      marginBottom: theme.spacing.default,
      lineHeight: 24,
    },
    buildBadge: {
      alignSelf: 'flex-start',
      backgroundColor: 'rgba(96, 165, 250, 0.14)',
      borderRadius: 999,
      paddingHorizontal: theme.spacing.default,
      paddingVertical: 6,
    },
    buildBadgeText: {
      ...theme.fonts.labelMedium,
      color: '#bfdbfe',
    },
    versionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.default / 2,
    },
    versionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceContainerHigh,
      paddingHorizontal: theme.spacing.default,
      paddingVertical: theme.spacing.default / 2,
      borderRadius: design.innerRadius,
      gap: theme.spacing.default / 2,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    versionText: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurface,
    },
    llamaBuildText: {
      ...theme.fonts.bodySmall,
      color: theme.colors.onSurfaceVariant,
      marginTop: theme.spacing.default / 2,
      opacity: 0.7,
    },
    section: {
      padding: theme.spacing.default * 2,
      borderBottomWidth: 1,
      borderBottomColor: design.subtleBorderColor,
    },
    sectionTitle: {
      ...theme.fonts.titleMedium,
      color: theme.colors.onSurface,
      marginBottom: theme.spacing.default,
    },
    actionButton: {
      borderWidth: 1,
      borderColor: theme.colors.surfaceVariant,
    },
    noticeCard: {
      marginTop: theme.spacing.default,
      borderRadius: design.innerRadius,
      padding: theme.spacing.default,
      backgroundColor: design.mutedSurface,
      gap: theme.spacing.default / 2,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    noticeTitle: {
      ...theme.fonts.titleSmall,
      color: theme.colors.onSurface,
    },
    noticeText: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurfaceVariant,
    },
    };
  })());
