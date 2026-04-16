import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {observer} from 'mobx-react';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks';

import {createStyles} from './styles';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
} from '../../store';
import {Menu} from '..';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {ROUTES} from '../../utils/navigationConstants';
import {UserCircleIcon} from '../../assets/icons';
import {L10nContext} from '../../utils';

export const ChatHeaderTitle: React.FC = observer(() => {
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const l10n = React.useContext(L10nContext);
  const activeSessionId = chatSessionStore.activeSessionId;
  const activeSession = chatSessionStore.sessions.find(
    session => session.id === activeSessionId,
  );
  const activeModel = modelStore.activeModel;
  const selectedCharacter = characterProfileStore.selectedCharacter;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const resolvedThinkingEnabled =
    selectedCharacter?.thinkingEnabled ??
    activeSession?.completionSettings?.enable_thinking ??
    chatSessionStore.newChatCompletionSettings?.enable_thinking ??
    false;
  const selectedCharacterName =
    selectedCharacter?.name?.trim() ||
    l10n.components.chatHeaderTitle.noCharacterSelected;
  const sessionTitle = activeSession?.title?.trim();
  const resolvedChatTitle =
    sessionTitle && sessionTitle !== 'New Session'
      ? sessionTitle
      : l10n.components.chatHeaderTitle.defaultSessionTitle;
  const modelStatusText = activeModel?.name?.trim()
    ? undefined
    : l10n.components.chatHeaderTitle.modelNotLoaded;
  const metaText = [
    resolvedThinkingEnabled
      ? l10n.components.chatHeaderTitle.thinkingOn
      : l10n.components.chatHeaderTitle.thinkingOff,
    modelStatusText,
  ]
    .filter(Boolean)
    .join(' · ');
  const characterProfiles = characterProfileStore.characterProfiles;
  const selectedCharacterAvatarSource = getCharacterImageSource(
    selectedCharacter?.avatar,
  );
  const [selectedAvatarLoadFailed, setSelectedAvatarLoadFailed] =
    React.useState(false);

  React.useEffect(() => {
    setSelectedAvatarLoadFailed(false);
  }, [selectedCharacter?.avatar]);

  const handleOpenManager = React.useCallback(() => {
    setMenuVisible(false);
    navigation.navigate(ROUTES.CHARACTER_PROFILES);
  }, [navigation]);

  const handleCreateCharacter = React.useCallback(() => {
    setMenuVisible(false);
    navigation.navigate(ROUTES.CHARACTER_PROFILES, {
      screen: 'CharacterProfileEditor',
      params: {
        autoSelectOnSave: true,
        returnToChatOnSave: true,
      },
    });
  }, [navigation]);

  const handleSelectCharacter = React.useCallback((characterId: string) => {
    characterProfileStore.setSelectedCharacter(characterId);
    setMenuVisible(false);
  }, []);

  const handleClearCharacter = React.useCallback(() => {
    characterProfileStore.setSelectedCharacter(undefined);
    setMenuVisible(false);
  }, []);

  return (
    <>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={l10n.components.chatHeaderTitle.quickSwitch}
            onPress={() => setMenuVisible(true)}
            style={styles.pressable}
            testID="chat-header-role-trigger">
            <View style={styles.container}>
              <View style={styles.identityRow}>
                {selectedCharacterAvatarSource && !selectedAvatarLoadFailed ? (
                  <Image
                    source={selectedCharacterAvatarSource}
                    style={styles.identityAvatar}
                    onError={() => setSelectedAvatarLoadFailed(true)}
                  />
                ) : selectedCharacter?.emoji?.trim() ? (
                  <View style={styles.identityAvatarFallback}>
                    <Text style={styles.identityEmoji}>
                      {selectedCharacter.emoji.trim()}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.identityAvatarFallback}>
                    <UserCircleIcon
                      width={16}
                      height={16}
                      stroke={theme.colors.onSurfaceVariant}
                    />
                  </View>
                )}
                <View style={styles.titleBlock}>
                  <Text
                    numberOfLines={1}
                    style={styles.title}
                    variant="titleSmall">
                    {resolvedChatTitle}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={styles.subtitle}
                    variant="bodySmall">
                    {selectedCharacterName}
                  </Text>
                  {!!metaText && (
                    <Text
                      numberOfLines={1}
                      style={styles.metaText}
                      variant="bodySmall">
                      {metaText}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </Pressable>
        }>
        <Menu.Item label={l10n.components.chatHeaderTitle.quickSwitch} isGroupLabel />
        <Menu.Item
          label={l10n.components.chatHeaderTitle.noRole}
          onPress={handleClearCharacter}
          leadingIcon="account-off-outline"
          trailingIcon={
            !selectedCharacter
              ? () => (
                  <Text style={styles.menuStatusText} variant="bodySmall">
                    {l10n.components.chatHeaderTitle.defaultChatSettings}
                  </Text>
                )
              : undefined
          }
          style={styles.clearRoleItem}
        />
        <Menu.Item
          label={l10n.components.chatHeaderTitle.addCharacter}
          onPress={handleCreateCharacter}
          leadingIcon="account-plus-outline"
          style={styles.createRoleItem}
        />
        {characterProfiles.length > 0 && <Menu.Separator />}
        {characterProfiles.map(profile => {
          const profileAvatarSource = getCharacterImageSource(profile.avatar);
          const isCurrent = profile.id === selectedCharacter?.id;
          return (
            <Pressable
              key={profile.id}
              onPress={() => handleSelectCharacter(profile.id)}
              accessibilityRole="button"
              accessibilityLabel={`切換到${profile.name}`}
              style={[
                styles.characterMenuRow,
                isCurrent && styles.selectedMenuItem,
              ]}>
              {profileAvatarSource ? (
                <Image source={profileAvatarSource} style={styles.menuAvatar} />
              ) : profile.emoji?.trim() ? (
                <View style={styles.menuAvatarFallback}>
                  <Text style={styles.menuEmoji}>{profile.emoji.trim()}</Text>
                </View>
              ) : (
                <View style={styles.menuAvatarFallback}>
                  <UserCircleIcon
                    width={16}
                    height={16}
                    stroke={theme.colors.onSurfaceVariant}
                  />
                </View>
              )}
              <View style={styles.characterMenuTextBlock}>
                <Text
                  numberOfLines={1}
                  style={styles.characterMenuName}
                  variant="bodyMedium">
                  {profile.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={styles.menuStatusText}
                  variant="bodySmall">
                  {isCurrent
                    ? l10n.components.chatHeaderTitle.currentlyActive
                    : profile.description?.trim() ||
                      l10n.components.chatHeaderTitle.tapToSwitch}
                </Text>
              </View>
              {isCurrent && <Text style={styles.menuCheck}>✓</Text>}
            </Pressable>
          );
        })}
        <Menu.Separator />
        <Menu.Item
          label={l10n.components.chatHeaderTitle.manageCharacters}
          onPress={handleOpenManager}
          leadingIcon="account-cog-outline"
        />
      </Menu>
    </>
  );
});
