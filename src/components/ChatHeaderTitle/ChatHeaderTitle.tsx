import React, {useContext} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {Text} from 'react-native-paper';

import {styles} from './styles';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
  palStore,
} from '../../store';
import {L10nContext} from '../../utils';

export const ChatHeaderTitle: React.FC = observer(() => {
  const l10n = useContext(L10nContext);
  const activeSessionId = chatSessionStore.activeSessionId;
  const activeSession = chatSessionStore.sessions.find(
    session => session.id === activeSessionId,
  );
  const activeModel = modelStore.activeModel;
  const selectedCharacter = characterProfileStore.selectedCharacter;
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

  return (
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
        <Text numberOfLines={1} style={styles.statusDivider} variant="bodySmall">
          {'•'}
        </Text>
        <Text numberOfLines={1} style={styles.statusText} variant="bodySmall">
          {`角色提示詞：${resolvedRolePromptEnabled ? '已啟用' : '未啟用'}`}
        </Text>
      </View>
    </View>
  );
});
