import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) => {
  const design = getAppDesign(theme);

  return StyleSheet.create({
    pressable: {
      flexShrink: 1,
      borderRadius: 20,
      backgroundColor: 'transparent',
      paddingHorizontal: 4,
      paddingVertical: 2,
      minWidth: 0,
    },
    container: {
      flexShrink: 1,
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
      gap: 2,
    },
    title: {
      flexShrink: 1,
      color: theme.colors.onSurface,
      fontSize: 18,
      lineHeight: 22,
      fontWeight: '800',
    },
    subtitle: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 13,
      lineHeight: 17,
      fontWeight: '500',
    },
    metaText: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 11,
      lineHeight: 15,
    },
    menuAvatar: {
      width: 34,
      height: 34,
      borderRadius: 17,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    menuAvatarFallback: {
      width: 34,
      height: 34,
      borderRadius: 17,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: design.iconSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    menuStatusText: {
      fontSize: 11,
      lineHeight: 15,
      color: theme.colors.onSurfaceVariant,
    },
    characterMenuRow: {
      minHeight: 58,
      marginHorizontal: 6,
      marginVertical: 2,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    characterMenuTextBlock: {
      flex: 1,
      minWidth: 0,
      gap: 2,
    },
    characterMenuName: {
      color: theme.colors.onSurface,
      fontSize: 14,
      lineHeight: 18,
      fontWeight: '700',
    },
    menuTrailing: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    menuCheck: {
      fontSize: 12,
      lineHeight: 14,
      fontWeight: '800',
      color: theme.colors.primary,
    },
    menuEmoji: {
      fontSize: 17,
      lineHeight: 19,
    },
    selectedMenuItem: {
      backgroundColor: design.accentSoft,
      borderRadius: 14,
    },
    clearRoleItem: {
      opacity: 0.94,
    },
    createRoleItem: {
      opacity: 0.98,
    },
  });
};
