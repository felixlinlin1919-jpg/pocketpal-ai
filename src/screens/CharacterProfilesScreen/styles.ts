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
      gap: 12,
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
      padding: 18,
      gap: 16,
      position: 'relative',
      overflow: 'hidden',
    },
    cardBackgroundPreview: {
      ...StyleSheet.absoluteFillObject,
      opacity: 0.15,
    },
    cardBackgroundFallback: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: design.mutedSurface,
    },
    cardBackgroundOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.dark
        ? 'rgba(10, 12, 18, 0.82)'
        : 'rgba(255,255,255,0.84)',
    },
    profileRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    avatarPlaceholder: {
      width: 64,
      height: 64,
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    infoContainer: {
      flex: 1,
      gap: 6,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
    },
    profileName: {
      color: theme.colors.onSurface,
      flexShrink: 1,
    },
    profileMeta: {
      color: theme.colors.onSurfaceVariant,
    },
    selectedBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      borderRadius: 999,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.colors.primary,
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
      backgroundColor: design.mutedSurface,
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
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 4,
    },
    editorScrollContent: {
      padding: 16,
      gap: 16,
      paddingBottom: 32,
    },
    summaryCard: {
      ...design.cardStyle,
      overflow: 'hidden',
    },
    summaryEyebrow: {
      ...design.sectionTitle,
    },
    summaryHeading: {
      color: theme.colors.onSurface,
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
      backgroundColor: theme.dark
        ? 'rgba(10, 12, 18, 0.74)'
        : 'rgba(255,255,255,0.80)',
    },
    editorHeroFallback: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: design.mutedSurface,
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
      borderColor: 'rgba(255,255,255,0.14)',
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
    editorCard: {
      ...design.cardStyle,
      padding: 16,
      gap: 20,
    },
    sectionBlock: {
      gap: 16,
      padding: 14,
      borderRadius: 20,
      backgroundColor: design.mutedSurface,
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
      backgroundColor: theme.colors.surfaceVariant,
    },
    backgroundPreview: {
      height: 120,
      borderRadius: 14,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.surfaceVariant,
    },
    backgroundPreviewImage: {
      opacity: 0.28,
    },
    backgroundPreviewOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.dark
        ? 'rgba(0, 0, 0, 0.34)'
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
      backgroundColor: theme.colors.surfaceVariant,
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
