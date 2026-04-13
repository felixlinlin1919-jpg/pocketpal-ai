import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    contentContainer: {
      padding: 16,
      gap: 16,
    },
    summaryCard: {
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      padding: 16,
      gap: 8,
    },
    summaryTitle: {
      color: theme.colors.onSurfaceVariant,
    },
    summaryValue: {
      color: theme.colors.onSurface,
    },
    addButton: {
      alignSelf: 'flex-start',
    },
    emptyCard: {
      borderRadius: 16,
      backgroundColor: theme.colors.background,
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
      borderRadius: 16,
      backgroundColor: theme.colors.background,
    },
    selectedCard: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    cardPressable: {
      padding: 16,
      gap: 16,
    },
    profileRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: theme.colors.surfaceVariant,
    },
    avatarPlaceholder: {
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surfaceVariant,
    },
    infoContainer: {
      flex: 1,
      gap: 4,
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
      backgroundColor: theme.colors.surfaceVariant,
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
    },
    editorScrollContent: {
      padding: 16,
      gap: 16,
      paddingBottom: 32,
    },
    editorCard: {
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      padding: 16,
      gap: 18,
    },
    sectionBlock: {
      gap: 14,
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
      borderRadius: 16,
      backgroundColor: theme.colors.background,
      padding: 16,
      gap: 8,
    },
  });
