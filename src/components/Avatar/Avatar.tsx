import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {MessageType, Theme} from '../../utils/types';
import {getUserAvatarNameColor, getUserInitials} from '../../utils';
import {characterProfileStore, uiStore} from '../../store';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {UserCircleIcon} from '../../assets/icons';
import {getAppDesign} from '../../utils/appDesign';

// TDOD: Add model name and the user's name?
export const Avatar = React.memo(
  observer(
  ({
    author,
    currentUserIsAuthor,
    showAvatar,
    showUserAvatars,
    theme,
  }: {
    author: MessageType.Any['author'];
    currentUserIsAuthor: boolean;
    showAvatar: boolean;
    showUserAvatars?: boolean;
    theme: Theme;
  }) => {
    const styles = React.useMemo(() => createStyles(theme), [theme]);
    const [characterAvatarFailed, setCharacterAvatarFailed] = React.useState(false);
    const selectedCharacter = characterProfileStore.selectedCharacter;
    const characterAvatarSource = getCharacterImageSource(
      selectedCharacter?.avatar,
    );
    const currentUserAvatarSource = getCharacterImageSource(uiStore.userAvatar);

    React.useEffect(() => {
      setCharacterAvatarFailed(false);
    }, [selectedCharacter?.avatar, author.imageUrl, uiStore.userAvatar]);

    const renderAvatar = () => {
      const color = getUserAvatarNameColor(
        author,
        theme.colors.userAvatarNameColors,
      );
      const initials = getUserInitials(author);
      const resolvedAvatarSource = currentUserIsAuthor
        ? currentUserAvatarSource ?? (author.imageUrl ? {uri: author.imageUrl} : undefined)
        : characterAvatarSource;

      if (resolvedAvatarSource && !characterAvatarFailed) {
        return (
          <Image
            accessibilityRole="image"
            testID="avatar-image"
            resizeMode="cover"
            source={resolvedAvatarSource}
            onError={() => setCharacterAvatarFailed(true)}
            style={[
              styles.image,
              currentUserIsAuthor ? styles.selfSpacing : styles.peerSpacing,
            ]}
          />
        );
      }

      if (!currentUserIsAuthor && author.imageUrl) {
        return (
          <Image
            accessibilityRole="image"
            testID="avatar-image"
            resizeMode="cover"
            source={{uri: author.imageUrl}}
            style={[
              styles.image,
              currentUserIsAuthor ? styles.selfSpacing : styles.peerSpacing,
            ]}
          />
        );
      }

      if (currentUserIsAuthor) {
        return (
          <View
            style={[
              styles.avatarIconFallback,
              currentUserIsAuthor ? styles.selfSpacing : styles.peerSpacing,
            ]}>
            <UserCircleIcon
              width={18}
              height={18}
              stroke={theme.colors.onSurfaceVariant}
            />
          </View>
        );
      }

      if (selectedCharacter?.emoji?.trim()) {
        return (
          <View
            style={[
              styles.avatarIconFallback,
              currentUserIsAuthor ? styles.selfSpacing : styles.peerSpacing,
            ]}>
            <Text style={styles.emojiText}>{selectedCharacter.emoji.trim()}</Text>
          </View>
        );
      }

      return (
        <View
          style={[
            styles.avatarBackground,
            currentUserIsAuthor ? styles.selfSpacing : styles.peerSpacing,
            {backgroundColor: color},
          ]}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      );
    };

    return showUserAvatars ? (
      <View testID="AvatarContainer">
        {showAvatar ? renderAvatar() : <View style={styles.placeholder} />}
      </View>
    ) : null;
  }),
);

const createStyles = (theme: Theme) => {
  const design = getAppDesign(theme);

  return StyleSheet.create({
  avatarBackground: {
    alignItems: 'center',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    marginRight: 10,
    width: 36,
    borderWidth: 1,
    borderColor: design.cardBorderColor,
  },
  image: {
    alignItems: 'center',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
    borderWidth: 1,
    borderColor: design.cardBorderColor,
  },
  peerSpacing: {
    marginRight: 10,
  },
  selfSpacing: {
    marginLeft: 10,
  },
  placeholder: {
    width: 46,
  },
  avatarIconFallback: {
    alignItems: 'center',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
    borderWidth: 1,
    borderColor: design.cardBorderColor,
    backgroundColor: design.iconSurface,
  },
  initialsText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  emojiText: {
    fontSize: 18,
    lineHeight: 20,
  },
});
};
