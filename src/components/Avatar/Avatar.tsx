import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';

import {MessageType, Theme} from '../../utils/types';
import {getUserAvatarNameColor, getUserInitials} from '../../utils';
import {characterProfileStore} from '../../store';
import {getCharacterImageSource} from '../../utils/characterImageSource';

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
    const [characterAvatarFailed, setCharacterAvatarFailed] = React.useState(false);
    const selectedCharacter = characterProfileStore.selectedCharacter;
    const characterAvatarSource = getCharacterImageSource(selectedCharacter?.avatar);

    React.useEffect(() => {
      setCharacterAvatarFailed(false);
    }, [selectedCharacter?.avatar]);

    const renderAvatar = () => {
      const color = getUserAvatarNameColor(
        author,
        theme.colors.userAvatarNameColors,
      );
      const initials = getUserInitials(author);

      if (characterAvatarSource && !characterAvatarFailed) {
        return (
          <Image
            accessibilityRole="image"
            testID="avatar-image"
            resizeMode="cover"
            source={characterAvatarSource}
            onError={() => setCharacterAvatarFailed(true)}
            style={[styles.image]}
          />
        );
      }

      if (author.imageUrl) {
        return (
          <Image
            accessibilityRole="image"
            testID="avatar-image"
            resizeMode="cover"
            source={{uri: author.imageUrl}}
            style={[styles.image]}
          />
        );
      }

      return (
        <View style={[styles.avatarBackground, {backgroundColor: color}]}>
          <Text style={styles.initialsText}>{initials}</Text>
        </View>
      );
    };

    return !currentUserIsAuthor && showUserAvatars ? (
      <View testID="AvatarContainer">
        {showAvatar ? renderAvatar() : <View style={styles.placeholder} />}
      </View>
    ) : null;
  }),
);

const styles = StyleSheet.create({
  avatarBackground: {
    alignItems: 'center',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    marginRight: 10,
    width: 36,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  image: {
    alignItems: 'center',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    marginRight: 10,
    width: 36,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  placeholder: {
    width: 46,
  },
  initialsText: {
    color: '#0f172a',
    fontWeight: '700',
  },
});
