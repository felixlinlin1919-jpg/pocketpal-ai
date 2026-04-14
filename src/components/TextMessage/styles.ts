import {StyleSheet} from 'react-native';

import {getUserAvatarNameColor} from '../../utils';
import {MessageType, Theme, User} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const styles = ({
  message,
  theme,
  user,
}: {
  message: MessageType.Text;
  theme: Theme;
  user?: User;
}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    descriptionText: {
      ...(user?.id === message.author.id
        ? theme.fonts.sentMessageLinkDescriptionTextStyle
        : theme.fonts.receivedMessageLinkDescriptionTextStyle),
      marginTop: 4,
    },
    headerText: {
      ...theme.fonts.userNameTextStyle,
      color: getUserAvatarNameColor(
        message.author,
        theme.colors.userAvatarNameColors,
      ),
      fontSize: 12,
      lineHeight: 16,
      opacity: 0.92,
      marginBottom: 8,
      marginLeft: 4,
      letterSpacing: 0.2,
      fontWeight: '700',
    },
    titleText: {
      ...(user?.id === message.author.id
        ? theme.fonts.sentMessageLinkTitleTextStyle
        : theme.fonts.receivedMessageLinkTitleTextStyle),
    },
    text: {
      ...(user?.id === message.author.id
        ? theme.fonts.sentMessageBodyTextStyle
        : theme.fonts.receivedMessageBodyTextStyle),
    },
    textContainer: {
      marginHorizontal: theme.insets.messageInsetsHorizontal + 4,
      marginVertical: theme.insets.messageInsetsVertical + 6,
    },
    imageContainer: {
      marginBottom: 12,
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    imageThumbnail: {
      width: 92,
      height: 92,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    imageContent: {
      width: '100%',
      height: '100%',
    },
    imagePreviewModal: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagePreviewCloseButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      zIndex: 1,
    },
    imagePreviewContent: {
      width: '100%',
      height: '80%',
    },
    };
  })());
