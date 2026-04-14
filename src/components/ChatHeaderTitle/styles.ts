import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) => {
  const design = getAppDesign(theme);

  return StyleSheet.create({
    anchorRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flexShrink: 1,
    },
    pressable: {
      flexShrink: 1,
      borderRadius: 22,
      backgroundColor: design.elevatedSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      paddingHorizontal: 14,
      paddingVertical: 10,
      minWidth: 0,
    },
    container: {
      flexShrink: 1,
      gap: 4,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
    },
    title: {
      flexShrink: 1,
      color: theme.colors.onSurface,
      fontSize: 16,
      lineHeight: 20,
      fontWeight: '700',
    },
    subtitle: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      lineHeight: 16,
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
      flexShrink: 1,
    },
    statusText: {
      color: '#b8c2d9',
      fontSize: 11,
      lineHeight: 15,
      fontWeight: '600',
    },
    statusDivider: {
      color: '#63708a',
      fontSize: 11,
    },
    switchPill: {
      borderRadius: design.pillRadius,
      backgroundColor: design.accentTint,
      borderWidth: 1,
      borderColor: design.accentBorder,
      paddingHorizontal: 8,
      paddingVertical: 3,
    },
    switchPillText: {
      fontSize: 10,
      lineHeight: 12,
      color: '#d7e7ff',
      fontWeight: '700',
    },
    renameButton: {
      margin: 0,
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: design.elevatedSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    menuAvatar: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    menuAvatarFallback: {
      width: 24,
      height: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.mutedSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    menuStatusText: {
      fontSize: 11,
      lineHeight: 14,
      color: theme.colors.onSurfaceVariant,
    },
    clearRoleItem: {
      opacity: 0.94,
    },
    createRoleItem: {
      opacity: 0.98,
    },
  });
};
