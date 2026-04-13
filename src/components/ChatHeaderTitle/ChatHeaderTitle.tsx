import React, {useContext} from 'react';
import {Image, Pressable, View} from 'react-native';
import {observer} from 'mobx-react';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
  palStore,
} from '../../store';
import {Menu} from '..';
import {characterText} from '../../constants/characterText';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {ROUTES} from '../../utils/navigationConstants';
import {L10nContext} from '../../utils';
import {UserCircleIcon} from '../../assets/icons';

export const ChatHeaderTitle: React.FC = observer(() => {
  const l10n = useContext(L10nContext);
  const navigation = useNavigation<any>();
  const activeSessionId = chatSessionStore.activeSessionId;
  const activeSession = chatSessionStore.sessions.find(
    session => session.id === activeSessionId,
  );
  const activeModel = modelStore.activeModel;
  const selectedCharacter = characterProfileStore.selectedCharacter;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const resolvedPalId = activeSession?.activePalId ?? chatSessionStore.activePalId;
  const activePal = resolvedPalId
    ? palStore.pals.find(pal => pal.id === resolvedPalId)
    : undefined;
  const resolvedThinkingEnabled =
    selectedCharacter?.thinkingEnabled ??
    activeSession?.completionSettings?.enable_thinking ??
    chatSessionStore.newChatCompletionSettings?.enable_thinking ??
    false;
  const resolvedRolePromptEnabled = selectedCharacter
    ? !!selectedCharacter.systemPrompt?.trim()
    : !!activePal?.systemPrompt?.trim();
  const selectedCharacterName =
    selectedCharacter?.name?.trim() || characterText.noneSelected;
  const characterProfiles = characterProfileStore.characterProfiles;

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
    <Menu
      visible={menuVisible}
      onDismiss={() => setMenuVisible(false)}
      anchor={
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="快速切換角色"
          onPress={() => setMenuVisible(true)}
          style={styles.pressable}
          testID="chat-header-role-trigger">
          <View style={styles.container}>
            <Text numberOfLines={1} style={styles.title} variant="titleSmall">
              {activeSession?.title || l10n.components.chatHeaderTitle.defaultTitle}
            </Text>
            {activeModel?.name && (
              <Text numberOfLines={1} style={styles.subtitle} variant="bodySmall">
                {activeModel?.name}
              </Text>
            )}
            <Text numberOfLines={1} style={styles.subtitle} variant="bodySmall">
              {`${characterText.currentRole}：${selectedCharacterName}`}
            </Text>
            <View style={styles.statusRow}>
              <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
                {resolvedThinkingEnabled
                  ? characterText.thinkingOn
                  : characterText.thinkingOff}
              </Text>
              <Text
                numberOfLines={1}
                style={styles.statusDivider}
                variant="bodySmall">
                {'•'}
              </Text>
              <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
                {resolvedRolePromptEnabled
                  ? characterText.rolePromptEnabled
                  : characterText.rolePromptDisabled}
              </Text>
            </View>
          </View>
        </Pressable>
      }>
      <Menu.Item label="快速切換角色" isGroupLabel />
      <Menu.Item
        label={characterText.noRole}
        onPress={handleClearCharacter}
        leadingIcon="account-off-outline"
        trailingIcon={
          !selectedCharacter
            ? () => (
                <Text style={styles.menuStatusText} variant="bodySmall">
                  {characterText.defaultChatSettings}
                </Text>
              )
            : undefined
        }
        style={styles.clearRoleItem}
      />
      <Menu.Item
        label={characterText.addCharacter}
        onPress={handleCreateCharacter}
        leadingIcon="account-plus-outline"
        style={styles.createRoleItem}
      />
      {characterProfiles.length > 0 && <Menu.Separator />}
      {characterProfiles.map(profile => {
        const profileAvatarSource = getCharacterImageSource(profile.avatar);
        return (
          <Menu.Item
            key={profile.id}
            label={profile.name}
            onPress={() => handleSelectCharacter(profile.id)}
            selected={profile.id === selectedCharacter?.id}
            leadingIcon={() =>
              profileAvatarSource ? (
                <Image source={profileAvatarSource} style={styles.menuAvatar} />
              ) : (
                <View style={styles.menuAvatarFallback}>
                  <UserCircleIcon
                    width={16}
                    height={16}
                    stroke="#6b7280"
                  />
                </View>
              )
            }
            icon={profile.id === selectedCharacter?.id ? 'check-circle' : undefined}
            trailingIcon={
              profile.id === selectedCharacter?.id
                ? () => (
                    <Text style={styles.menuStatusText} variant="bodySmall">
                      {characterText.currentlyActive}
                    </Text>
                  )
                : undefined
            }
          />
        );
      })}
      <Menu.Separator />
      <Menu.Item
        label={characterText.manageCharacters}
        onPress={handleOpenManager}
        leadingIcon="account-cog-outline"
      />
    </Menu>
  );
});
