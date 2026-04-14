import React, {useContext} from 'react';
import {Image, Pressable, View} from 'react-native';
import {observer} from 'mobx-react';
import {IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../hooks';

import {createStyles} from './styles';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
} from '../../store';
import {Menu, RenameModal} from '..';
import {characterText} from '../../constants/characterText';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {ROUTES} from '../../utils/navigationConstants';
import {L10nContext} from '../../utils';
import {UserCircleIcon} from '../../assets/icons';

export const ChatHeaderTitle: React.FC = observer(() => {
  const l10n = useContext(L10nContext);
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const activeSessionId = chatSessionStore.activeSessionId;
  const activeSession = chatSessionStore.sessions.find(
    session => session.id === activeSessionId,
  );
  const activeModel = modelStore.activeModel;
  const selectedCharacter = characterProfileStore.selectedCharacter;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [renameVisible, setRenameVisible] = React.useState(false);
  const resolvedThinkingEnabled =
    selectedCharacter?.thinkingEnabled ??
    activeSession?.completionSettings?.enable_thinking ??
    chatSessionStore.newChatCompletionSettings?.enable_thinking ??
    false;
  const selectedCharacterName =
    selectedCharacter?.name?.trim() || characterText.noneSelected;
  const resolvedChatTitle =
    activeSession?.title?.trim() || l10n.components.chatHeaderTitle.defaultTitle;
  const modelStatusText = activeModel?.name?.trim() ? undefined : '尚未載入模型';
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
    <>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <View style={styles.anchorRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="快速切換角色"
              onPress={() => setMenuVisible(true)}
              style={styles.pressable}
              testID="chat-header-role-trigger">
              <View style={styles.container}>
                <View style={styles.titleRow}>
                  <Text numberOfLines={1} style={styles.title} variant="titleSmall">
                    {resolvedChatTitle}
                  </Text>
                  <View style={styles.switchPill}>
                    <Text style={styles.switchPillText}>切換角色</Text>
                  </View>
                </View>
                <Text
                  numberOfLines={1}
                  style={styles.subtitle}
                  variant="bodySmall">
                  {selectedCharacterName}
                </Text>
                <View style={styles.statusRow}>
                  <View style={styles.statusChip}>
                    <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
                      {resolvedThinkingEnabled ? 'Thinking 開啟' : 'Thinking 關閉'}
                    </Text>
                  </View>
                  {modelStatusText ? (
                    <View style={[styles.statusChip, styles.statusChipMuted]}>
                      <Text
                        numberOfLines={1}
                        style={styles.statusText}
                        variant="bodySmall">
                        {modelStatusText}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </Pressable>
            <IconButton
              icon="pencil-outline"
              size={18}
              style={styles.renameButton}
              iconColor="#dbe5ff"
              onPress={() => setRenameVisible(true)}
              accessibilityLabel="重新命名聊天室"
            />
          </View>
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
              icon={
                profile.id === selectedCharacter?.id ? 'check-circle' : undefined
              }
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
      <RenameModal
        visible={renameVisible}
        onClose={() => setRenameVisible(false)}
        session={activeSession ?? null}
      />
    </>
  );
});
