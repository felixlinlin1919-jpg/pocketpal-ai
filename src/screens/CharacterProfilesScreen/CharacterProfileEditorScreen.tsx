import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Switch, Text} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import {TextInput} from '../../components';
import {useCharacterProfiles, useTheme} from '../../hooks';

import {createStyles} from './styles';

type EditorRouteParams = {
  CharacterProfileEditor: {
    profileId?: string;
  };
};

export const CharacterProfileEditorScreen: React.FC = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation<any>();
  const route =
    useRoute<RouteProp<EditorRouteParams, 'CharacterProfileEditor'>>();
  const {
    getCharacterProfile,
    addCharacterProfile,
    updateCharacterProfile,
  } = useCharacterProfiles();

  const profileId = route.params?.profileId;
  const existingProfile = profileId ? getCharacterProfile(profileId) : undefined;

  const [name, setName] = React.useState(existingProfile?.name ?? '');
  const [systemPrompt, setSystemPrompt] = React.useState(
    existingProfile?.systemPrompt ?? '',
  );
  const [thinkingEnabled, setThinkingEnabled] = React.useState(
    existingProfile?.thinkingEnabled ?? false,
  );
  const [avatar, setAvatar] = React.useState(existingProfile?.avatar ?? '');
  const [background, setBackground] = React.useState(
    existingProfile?.background ?? '',
  );

  const isEditing = !!existingProfile;

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('名稱未填寫', '請輸入角色名稱。');
      return;
    }

    if (!systemPrompt.trim()) {
      Alert.alert('系統提示詞未填寫', '請輸入系統提示詞。');
      return;
    }

    const payload = {
      name,
      systemPrompt,
      thinkingEnabled,
      avatar,
      background,
    };

    if (existingProfile) {
      updateCharacterProfile(existingProfile.id, payload);
    } else {
      addCharacterProfile(payload);
    }

    navigation.goBack();
  };

  if (profileId && !existingProfile) {
    return (
      <SafeAreaView style={styles.safeArea} edges={['bottom']}>
        <View style={styles.contentContainer}>
          <Card style={styles.helperCard}>
            <Text variant="titleMedium">找不到角色卡</Text>
            <Text variant="bodyMedium" style={styles.fieldHint}>
              這張角色卡可能已被刪除，請返回列表重新選擇。
            </Text>
            <Button mode="contained" onPress={() => navigation.goBack()}>
              返回角色卡管理
            </Button>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.editorScrollContent}>
        <Card style={styles.editorCard}>
          <View style={styles.fieldGroup}>
            <Text variant="titleSmall" style={styles.fieldLabel}>
              名稱
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="請輸入角色名稱"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text variant="titleSmall" style={styles.fieldLabel}>
              系統提示詞
            </Text>
            <TextInput
              value={systemPrompt}
              onChangeText={setSystemPrompt}
              placeholder="請輸入系統提示詞"
              multiline
              numberOfLines={6}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text variant="titleSmall" style={styles.fieldLabel}>
              頭像路徑
            </Text>
            <TextInput
              value={avatar}
              onChangeText={setAvatar}
              placeholder="目前先輸入圖片路徑，後續可接圖片挑選器"
            />
            <Text variant="bodySmall" style={styles.fieldHint}>
              這一版先保留文字路徑欄位，後續可直接擴充成 image picker。
            </Text>
          </View>

          <View style={styles.fieldGroup}>
            <Text variant="titleSmall" style={styles.fieldLabel}>
              背景路徑
            </Text>
            <TextInput
              value={background}
              onChangeText={setBackground}
              placeholder="目前先輸入背景圖片路徑，後續可接圖片挑選器"
            />
          </View>

          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                啟用 thinking
              </Text>
              <Text variant="bodySmall" style={styles.fieldHint}>
                先保留角色卡層級的 thinking 開關，後續再接到聊天流程。
              </Text>
            </View>
            <Switch value={thinkingEnabled} onValueChange={setThinkingEnabled} />
          </View>

          <Button
            mode="contained"
            style={styles.submitButton}
            onPress={handleSave}>
            {isEditing ? '儲存角色' : '新增角色'}
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
});
