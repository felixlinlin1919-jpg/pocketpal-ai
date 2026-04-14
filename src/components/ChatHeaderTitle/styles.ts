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
      borderRadius: 18,
      backgroundColor: 'transparent',
      paddingHorizontal: 6,
      paddingVertical: 4,
      minWidth: 0,
    },
    container: {
      flexShrink: 1,
      gap: 6,
    },
    identityRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      minWidth: 0,
    },
    identityAvatar: {
      width: 36,
      height: 36,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    identityAvatarFallback: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.elevatedSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    identityEmoji: {
      fontSize: 18,
      lineHeight: 22,
    },
    titleBlock: {
      flex: 1,
      minWidth: 0,
      gap: 1,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 0,
    },
    title: {
      flexShrink: 1,
      color: theme.colors.onSurface,
      fontSize: 17,
      lineHeight: 20,
      fontWeight: '800',
    },
    subtitle: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '500',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      flexShrink: 1,
      paddingLeft: 46,
    },
    statusChip: {
      borderRadius: design.pillRadius,
      paddingHorizontal: 8,
      paddingVertical: 3,
      backgroundColor: design.mutedSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    statusChipMuted: {
      opacity: 0.9,
    },
    statusText: {
      color: '#b8c2d9',
      fontSize: 10,
      lineHeight: 14,
      fontWeight: '600',
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
    menuEmoji: {
      fontSize: 14,
      lineHeight: 16,
    },
    clearRoleItem: {
      opacity: 0.94,
    },
    createRoleItem: {
      opacity: 0.98,
    },
  });
};
