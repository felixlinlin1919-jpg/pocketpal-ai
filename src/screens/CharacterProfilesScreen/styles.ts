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
      alignItems: 'center',
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
    profileName: {
      color: theme.colors.onSurface,
    },
    profileMeta: {
      color: theme.colors.onSurfaceVariant,
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
      gap: 16,
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
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
    },
    switchTextContainer: {
      flex: 1,
      gap: 4,
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
