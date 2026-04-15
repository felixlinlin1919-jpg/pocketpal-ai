import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      padding: 16,
      gap: 16,
    },
    headerStack: {
      gap: 12,
    },
    pageHeaderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
    },
    pageTitleBlock: {
      flex: 1,
      gap: 4,
    },
    pageTitle: {
      color: theme.colors.onSurface,
      fontWeight: '800',
    },
    pageMeta: {
      color: theme.colors.onSurfaceVariant,
    },
    addButton: {
      borderRadius: 999,
    },
    searchBlock: {
      gap: 8,
    },
    emptyCard: {
      ...design.cardStyle,
      padding: 24,
      alignItems: 'center',
      gap: 12,
    },
    emptyText: {
      textAlign: 'center',
      color: theme.colors.onSurfaceVariant,
    },
    listContent: {
      height: 12,
      paddingBottom: 24,
    },
    card: {
      ...design.cardStyle,
      overflow: 'hidden',
      backgroundColor: design.elevatedSurface,
    },
    selectedCard: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
      shadowOpacity: theme.dark ? 0.28 : 0.12,
    },
    cardPressable: {
      flexDirection: 'row',
      overflow: 'hidden',
    },
    cardVisual: {
      width: 112,
      minHeight: 178,
      position: 'relative',
      overflow: 'hidden',
    },
    cardBackgroundPreview: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.42,
    },
    cardBackgroundFallback: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: design.rowSurfaceMuted,
    },
    cardBackgroundOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.variant === 'dark'
          ? 'rgba(10, 12, 18, 0.44)'
        : theme.variant === 'cream'
          ? 'rgba(244, 234, 220, 0.54)'
          : 'rgba(255,255,255,0.36)',
    },
    visualGlow: {
      position: 'absolute',
      inset: 0,
      backgroundColor: theme.variant === 'dark'
        ? 'rgba(16, 20, 28, 0.22)'
        : theme.variant === 'cream'
          ? 'rgba(122, 90, 60, 0.05)'
          : 'rgba(255,255,255,0.12)',
    },
    visualAvatarShell: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 16,
    },
    floatingSelectedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      borderRadius: 999,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.colors.primary,
    },
    cardBody: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
      gap: 14,
      justifyContent: 'space-between',
      backgroundColor: design.rowSurface,
    },
    avatar: {
      width: 78,
      height: 78,
      borderRadius: 39,
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.16,
      shadowRadius: 18,
      elevation: 6,
    },
    avatarPlaceholder: {
      width: 78,
      height: 78,
      borderRadius: 39,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.rowSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 8},
      shadowOpacity: 0.16,
      shadowRadius: 18,
      elevation: 6,
    },
    avatarEmoji: {
      fontSize: 34,
      lineHeight: 40,
    },
    infoContainer: {
      flex: 1,
      gap: 7,
      minWidth: 0,
    },
    cardTopRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 10,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
    },
    profileName: {
      color: theme.colors.onSurface,
      flexShrink: 1,
      fontWeight: '800',
    },
    inlineEmoji: {
      fontSize: 18,
      lineHeight: 22,
    },
    profileMeta: {
      color: theme.colors.onSurfaceVariant,
      lineHeight: 21,
    },
    selectedBadgeText: {
      color: theme.colors.onPrimary,
    },
    statusRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4,
    },
    statusChip: {
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: design.rowSurfaceMuted,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    statusChipText: {
      color: theme.colors.onSurfaceVariant,
    },
    statusChipWarning: {
      backgroundColor: `${theme.colors.error}18`,
    },
    statusChipWarningText: {
      color: theme.colors.error,
    },
    hiddenBackgroundProbe: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 2,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: design.dividerColor,
    },
    editorScrollContent: {
      padding: 16,
      gap: 16,
      paddingBottom: 32,
    },
    summaryCard: {
      ...design.cardStyle,
      overflow: 'hidden',
      padding: 20,
    },
    summaryEyebrow: {
      ...design.sectionTitle,
    },
    summaryHeading: {
      color: theme.colors.onSurface,
      fontWeight: '800',
    },
    summaryCaption: {
      color: theme.colors.onSurfaceVariant,
    },
    searchLabel: {
      ...design.sectionTitle,
    },
    editorHeroBackground: {
      ...StyleSheet.absoluteFillObject,
    },
    editorHeroOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.variant === 'dark'
        ? 'rgba(10, 12, 18, 0.74)'
        : theme.variant === 'cream'
          ? 'rgba(255, 248, 239, 0.78)'
          : 'rgba(255,255,255,0.80)',
    },
    editorHeroFallback: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: design.rowSurfaceMuted,
    },
    editorHeroContent: {
      gap: 8,
      position: 'relative',
      zIndex: 1,
    },
    editorAvatarWrap: {
      marginBottom: 6,
    },
    editorAvatar: {
      width: 84,
      height: 84,
      borderRadius: 42,
      borderWidth: 2,
      borderColor: design.cardBorderColor,
      backgroundColor: theme.colors.surfaceVariant,
    },
    editorAvatarFallback: {
      width: 84,
      height: 84,
      borderRadius: 42,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 2,
      borderColor: design.cardBorderColor,
    },
    heroEmoji: {
      fontSize: 34,
      lineHeight: 40,
    },
    editorCard: {
      ...design.cardStyle,
      padding: 16,
      gap: 20,
    },
    sectionBlock: {
      gap: 16,
      padding: 14,
      borderRadius: 20,
      backgroundColor: design.rowSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    fieldGroup: {
      gap: 8,
    },
    fieldLabel: {
      color: theme.colors.onSurface,
    },
    fieldHint: {
      color: theme.colors.onSurfaceVariant,
    },
    pickerActionRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 8,
      flexWrap: 'wrap',
    },
    previewSection: {
      gap: 8,
      marginTop: 4,
    },
    previewLabel: {
      color: theme.colors.onSurfaceVariant,
      letterSpacing: 0.6,
      textTransform: 'uppercase',
    },
    previewHint: {
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
    },
    previewEmoji: {
      fontSize: 28,
      lineHeight: 32,
    },
    avatarPreview: {
      width: 72,
      height: 72,
      borderRadius: 36,
      backgroundColor: theme.colors.surfaceVariant,
    },
    avatarPreviewPlaceholder: {
      width: 72,
      height: 72,
      borderRadius: 36,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      padding: 8,
      backgroundColor: design.iconSurface,
    },
    backgroundPreview: {
      height: 120,
      borderRadius: 14,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: design.rowSurfaceMuted,
    },
    backgroundPreviewImage: {
      opacity: 0.28,
    },
    backgroundPreviewOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.variant === 'dark'
        ? 'rgba(0, 0, 0, 0.34)'
        : theme.variant === 'cream'
          ? 'rgba(248, 241, 232, 0.58)'
          : 'rgba(255, 255, 255, 0.50)',
    },
    backgroundPreviewText: {
      color: theme.colors.onSurface,
    },
    backgroundPreviewPlaceholder: {
      height: 120,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
      backgroundColor: design.rowSurfaceMuted,
    },
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
    },
    switchTextContainer: {
      flex: 1,
    },
    submitButton: {
      marginTop: 8,
    },
    helperCard: {
      ...design.cardStyle,
      padding: 16,
      gap: 8,
    },
    };
  })());
