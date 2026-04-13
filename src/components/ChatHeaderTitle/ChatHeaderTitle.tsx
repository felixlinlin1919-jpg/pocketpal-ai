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
  const selectedCharacterName = selectedCharacter?.name?.trim() || '未選擇角色';
  const characterProfiles = characterProfileStore.characterProfiles;

  const handleOpenManager = React.useCallback(() => {
    setMenuVisible(false);
    navigation.navigate(ROUTES.CHARACTER_PROFILES);
  }, [navigation]);

  const handleSelectCharacter = React.useCallback((characterId: string) => {
    characterProfileStore.setSelectedCharacter(characterId);
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
              {`目前角色：${selectedCharacterName}`}
            </Text>
            <View style={styles.statusRow}>
              <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
                {`Thinking：${resolvedThinkingEnabled ? '開' : '關'}`}
              </Text>
              <Text
                numberOfLines={1}
                style={styles.statusDivider}
                variant="bodySmall">
                {'•'}
              </Text>
              <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
                {`角色提示詞：${resolvedRolePromptEnabled ? '已啟用' : '未啟用'}`}
              </Text>
            </View>
          </View>
        </Pressable>
      }>
      <Menu.Item label="快速切換角色" isGroupLabel />
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
                      目前使用中
                    </Text>
                  )
                : undefined
            }
          />
        );
      })}
      {characterProfiles.length > 0 && <Menu.Separator />}
      <Menu.Item
        label="管理角色卡"
        onPress={handleOpenManager}
        leadingIcon="account-cog-outline"
      />
    </Menu>
  );
});
