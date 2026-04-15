import {StyleSheet} from 'react-native';

import {MessageType, Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const styles = ({
  currentUserIsAuthor,
  message,
  roundBorder,
  theme,
}: {
  currentUserIsAuthor: boolean;
  message: MessageType.Any;
  roundBorder: boolean;
  theme: Theme;
}) => {
  const design = getAppDesign(theme);
  const isUserMessage = currentUserIsAuthor && message.type !== 'image';
  const isDarkSurface = theme.variant === 'dark' || theme.variant === 'anime';

  return StyleSheet.create({
    contentContainer: {
      backgroundColor: isUserMessage
        ? theme.colors.userBubbleBackground
        : theme.colors.assistantBubbleBackground,
      borderRadius: 24,
      borderBottomLeftRadius: currentUserIsAuthor
        ? 24
        : roundBorder
          ? 24
          : 10,
      borderBottomRightRadius: currentUserIsAuthor
        ? roundBorder
          ? 24
          : 10
        : 24,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      borderColor: isUserMessage
        ? theme.colors.userBubbleBorder
        : theme.colors.assistantBubbleBorder,
      borderWidth: 1,
      overflow: 'hidden',
      paddingTop: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: isDarkSurface
        ? currentUserIsAuthor
          ? 0.18
          : 0.1
        : 0.08,
      shadowRadius: 14,
      elevation: 3,
    },
    dateHeader0: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
      marginTop: 16,
    },
    dateHeaderContainer: {
      textAlign: 'right',
      paddingBottom: 8,
      marginTop: -4,
      marginLeft: 16,
      marginRight: 4,
      flexDirection: 'row', // Added to align items horizontally
      alignItems: 'center', // Align items vertically centered
    },
    dateHeader: {
      //textAlign: 'right',
      color: theme.colors.textSecondary,
      fontSize: 10,
    },
    iconContainer: {
      marginRight: 5,
      color: theme.colors.textSecondary,
      fontSize: 16,
    },
  });
};
