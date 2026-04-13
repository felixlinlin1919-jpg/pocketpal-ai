import {StyleSheet} from 'react-native';

import {MessageType, Theme} from '../../utils/types';

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
  return StyleSheet.create({
    contentContainer: {
      backgroundColor:
        !currentUserIsAuthor || message.type === 'image'
          ? `${String(theme.colors.surface)}E6`
          : theme.colors.authorBubbleBackground,
      borderRadius: theme.borders.messageBorderRadius,
      borderBottomLeftRadius: currentUserIsAuthor
        ? theme.borders.messageBorderRadius
        : roundBorder
          ? theme.borders.messageBorderRadius
          : 8,
      borderBottomRightRadius: currentUserIsAuthor
        ? roundBorder
          ? theme.borders.messageBorderRadius
          : 8
        : theme.borders.messageBorderRadius,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      borderColor: !currentUserIsAuthor
        ? `${String(theme.colors.outlineVariant)}AA`
        : 'transparent',
      borderWidth: !currentUserIsAuthor ? 1 : 0,
      overflow: 'hidden',
      paddingTop: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: currentUserIsAuthor ? 0.12 : 0.07,
      shadowRadius: 8,
      elevation: 2,
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
