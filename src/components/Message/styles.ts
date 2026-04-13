import {StyleSheet} from 'react-native';

import {MessageType, Theme} from '../../utils/types';

const styles = ({
  currentUserIsAuthor,
  message,
  messageWidth,
  roundBorder,
  theme,
}: {
  currentUserIsAuthor: boolean;
  message: MessageType.DerivedAny;
  messageWidth: number;
  roundBorder: boolean;
  theme: Theme;
}) =>
  StyleSheet.create({
    container: {
      alignItems: currentUserIsAuthor ? 'flex-end' : 'flex-start',
      alignSelf: currentUserIsAuthor ? 'flex-end' : 'flex-start',
      justifyContent: currentUserIsAuthor ? 'flex-end' : 'flex-start',
      flexDirection: 'row',
      marginBottom: message.type === 'dateHeader' ? 0 : 10 + message.offset,
      marginHorizontal: 12,
    },
    contentContainer: {
      backgroundColor:
        !currentUserIsAuthor || message.type === 'image'
          ? theme.colors.secondary
          : theme.colors.primary,
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
      borderColor: 'transparent',
      overflow: 'hidden',
    },
    dateHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
      marginTop: 16,
    },
    pressable: {
      maxWidth: messageWidth,
      flexShrink: 1,
    },
  });

export default styles;
