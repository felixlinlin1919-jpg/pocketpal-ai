import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme, insets: EdgeInsets) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    const isLayeredTheme =
      theme.variant === 'cream' || theme.variant === 'anime';
    const aboutCardStyle = isLayeredTheme
      ? design.flatCardStyle
      : design.cardStyle;

    return {
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    container: {
      flexGrow: 1,
      padding: theme.spacing.default,
      paddingBottom: theme.spacing.default + insets.bottom,
      gap: theme.spacing.default,
    },
    heroCard: {
      ...design.heroCardStyle,
      padding: theme.spacing.default,
      flexDirection: 'row',
      gap: theme.spacing.default,
      alignItems: 'center',
    },
    brandIcon: {
      width: 92,
      height: 92,
      borderRadius: 28,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      backgroundColor: design.mutedSurface,
    },
    heroContent: {
      flex: 1,
      gap: 8,
    },
    heroTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
    },
    brandName: {
      ...design.titleLarge,
      fontSize: 26,
      lineHeight: 31,
    },
    brandTagline: {
      ...theme.fonts.titleSmall,
      color: theme.colors.onSurface,
    },
    brandDescription: {
      ...design.bodyMuted,
    },
    card: {
      ...aboutCardStyle,
      padding: theme.spacing.default,
      gap: theme.spacing.default / 1.25,
    },
    title: {
      ...theme.fonts.headlineLarge,
      color: theme.colors.onSurface,
      letterSpacing: -0.5,
    },
    description: {
      color: theme.colors.onSurfaceVariant,
      marginBottom: theme.spacing.default,
      lineHeight: 24,
    },
    buildBadge: {
      alignSelf: 'flex-start',
      backgroundColor: design.accentTint,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: design.accentBorder,
    },
    buildBadgeText: {
      ...theme.fonts.labelMedium,
      color: design.palette.accentStrong,
    },
    versionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.default / 2,
    },
    versionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      backgroundColor: design.rowSurface,
      paddingHorizontal: 12,
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
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.default,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: design.subtleBorderColor,
    },
    infoLabel: {
      ...theme.fonts.bodyMedium,
      color: design.palette.textSubtle,
    },
    infoValue: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurface,
      flexShrink: 1,
      textAlign: 'right',
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
      ...design.sectionTitle,
      marginBottom: 2,
    },
    actionButton: {
      marginTop: theme.spacing.default,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      borderRadius: design.innerRadius,
    },
    navRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: design.subtleBorderColor,
    },
    navIcon: {
      width: 42,
      height: 42,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.iconSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    navText: {
      flex: 1,
      gap: 2,
    },
    navTitle: {
      ...theme.fonts.titleSmall,
      color: theme.colors.onSurface,
    },
    navSubtitle: {
      ...theme.fonts.bodySmall,
      color: design.palette.textSubtle,
      lineHeight: 18,
    },
    noticeCard: {
      ...aboutCardStyle,
      borderRadius: design.innerRadius,
      padding: theme.spacing.default,
      gap: theme.spacing.default / 2,
    },
    noticeTitle: {
      ...theme.fonts.titleSmall,
      color: theme.colors.onSurface,
    },
    noticeText: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurfaceVariant,
    },
    detailHero: {
      ...design.heroCardStyle,
      padding: theme.spacing.default * 1.25,
      gap: 8,
    },
    detailTitle: {
      ...design.titleLarge,
    },
    detailSubtitle: {
      ...design.bodyMuted,
    },
    detailCard: {
      ...aboutCardStyle,
      padding: theme.spacing.default,
      gap: theme.spacing.default * 1.25,
    },
    detailSection: {
      gap: 8,
      paddingBottom: theme.spacing.default,
      borderBottomWidth: 1,
      borderBottomColor: design.subtleBorderColor,
    },
    detailSectionTitle: {
      ...theme.fonts.titleMedium,
      color: theme.colors.onSurface,
      fontWeight: '700',
    },
    detailBody: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurfaceVariant,
      lineHeight: 22,
    },
    detailListItem: {
      ...theme.fonts.bodyMedium,
      color: theme.colors.onSurface,
      lineHeight: 22,
    },
    footerNote: {
      ...design.chipStyle,
      borderRadius: design.innerRadius,
    },
    footerNoteText: {
      ...theme.fonts.bodySmall,
      color: design.palette.textSubtle,
      lineHeight: 18,
    },
    };
  })());
