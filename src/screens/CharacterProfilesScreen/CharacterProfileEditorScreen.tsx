import React from 'react';
import {Alert, Image, ImageBackground, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Switch, Text} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import {UserCircleIcon} from '../../assets/icons';
import {TextInput} from '../../components';
import {characterText} from '../../constants/characterText';
import {useCharacterProfiles, useTheme} from '../../hooks';
import {ROUTES} from '../../utils/navigationConstants';
import {getCharacterImageSource} from '../../utils/characterImageSource';

import {createStyles} from './styles';

type EditorRouteParams = {
  CharacterProfileEditor: {
    profileId?: string;
    autoSelectOnSave?: boolean;
    returnToChatOnSave?: boolean;
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
    setSelectedCharacter,
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
  const [avatarPreviewFailed, setAvatarPreviewFailed] = React.useState(false);
  const [backgroundPreviewFailed, setBackgroundPreviewFailed] =
    React.useState(false);

  const isEditing = !!existingProfile;
  const shouldAutoSelectOnSave = route.params?.autoSelectOnSave ?? !isEditing;
  const shouldReturnToChatOnSave = route.params?.returnToChatOnSave ?? false;
  const avatarSource = getCharacterImageSource(avatar);
  const backgroundSource = getCharacterImageSource(background);

  React.useEffect(() => {
    setAvatarPreviewFailed(false);
  }, [avatar]);

  React.useEffect(() => {
    setBackgroundPreviewFailed(false);
  }, [background]);

  const handlePickImage = async (
    type: 'avatar' | 'background',
  ): Promise<void> => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: false,
      });

      if (result.didCancel) {
        return;
      }

      const asset = result.assets?.[0];
      const selectedUri = asset?.uri;

      if (!selectedUri) {
        Alert.alert(
          type === 'avatar' ? '無法選擇頭像' : '無法選擇背景圖',
          '找不到可用的圖片路徑。',
        );
        return;
      }

      if (type === 'avatar') {
        setAvatar(selectedUri);
      } else {
        setBackground(selectedUri);
      }
    } catch (error) {
      console.error(`Failed to pick ${type} image:`, error);
      Alert.alert(
        type === 'avatar' ? '無法選擇頭像' : '無法選擇背景圖',
        '請稍後再試。',
      );
    }
  };

  const handleClearImage = (type: 'avatar' | 'background') => {
    if (type === 'avatar') {
      setAvatar('');
      setAvatarPreviewFailed(false);
      return;
    }

    setBackground('');
    setBackgroundPreviewFailed(false);
  };

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
      const updatedProfile = updateCharacterProfile(existingProfile.id, payload);

      if (updatedProfile && shouldAutoSelectOnSave) {
        setSelectedCharacter(updatedProfile.id);
      }
    } else {
      const createdProfile = addCharacterProfile(payload);

      if (shouldAutoSelectOnSave) {
        setSelectedCharacter(createdProfile.id);
      }
    }

    if (shouldReturnToChatOnSave) {
      navigation.popToTop();
      navigation.getParent()?.navigate(ROUTES.CHAT);
      return;
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
        <Card style={styles.summaryCard}>
          {backgroundSource && !backgroundPreviewFailed ? (
            <ImageBackground
              source={backgroundSource}
              style={styles.editorHeroBackground}
              imageStyle={styles.backgroundPreviewImage}
              resizeMode="cover"
              onError={() => setBackgroundPreviewFailed(true)}>
              <View style={styles.editorHeroOverlay} />
            </ImageBackground>
          ) : (
            <View style={styles.editorHeroFallback} />
          )}
          <View style={styles.editorHeroContent}>
            <View style={styles.editorAvatarWrap}>
              {avatarSource && !avatarPreviewFailed ? (
                <Image
                  source={avatarSource}
                  style={styles.editorAvatar}
                  onError={() => setAvatarPreviewFailed(true)}
                />
              ) : (
                <View style={styles.editorAvatarFallback}>
                  <UserCircleIcon
                    width={32}
                    height={32}
                    stroke={theme.colors.onSurfaceVariant}
                  />
                </View>
              )}
            </View>
            <Text variant="labelMedium" style={styles.summaryEyebrow}>
              {isEditing ? '編輯角色' : '建立角色'}
            </Text>
            <Text variant="headlineSmall" style={styles.summaryHeading}>
              {name.trim() || '未命名角色'}
            </Text>
            <Text variant="bodySmall" style={styles.summaryCaption}>
              {thinkingEnabled ? 'Thinking 已啟用' : 'Thinking 已關閉'}
            </Text>
          </View>
        </Card>

        <Card style={styles.editorCard}>
          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              基本資料
            </Text>
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
          </View>

          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              聊天風格
            </Text>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                角色提示詞
              </Text>
              <TextInput
                value={systemPrompt}
                onChangeText={setSystemPrompt}
                placeholder="請輸入角色提示詞"
                multiline
                numberOfLines={6}
              />
            </View>

            <View style={styles.switchRow}>
              <View style={styles.switchTextContainer}>
                <Text variant="titleSmall" style={styles.fieldLabel}>
                  啟用 Thinking
                </Text>
              </View>
              <Switch value={thinkingEnabled} onValueChange={setThinkingEnabled} />
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              角色外觀
            </Text>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                頭像
              </Text>
              <TextInput
                value={avatar}
                onChangeText={setAvatar}
                placeholder="可輸入圖片網址或本機路徑"
              />
              <View style={styles.pickerActionRow}>
                <Button mode="outlined" onPress={() => handlePickImage('avatar')}>
                  選擇頭像
                </Button>
                <Button mode="text" onPress={() => handleClearImage('avatar')}>
                  清除頭像
                </Button>
              </View>
              <View style={styles.previewSection}>
                <Text variant="labelMedium" style={styles.previewLabel}>
                  頭像預覽
                </Text>
                {avatarSource && !avatarPreviewFailed ? (
                  <Image
                    source={avatarSource}
                    style={styles.avatarPreview}
                    onError={() => setAvatarPreviewFailed(true)}
                  />
                ) : (
                  <View style={styles.avatarPreviewPlaceholder}>
                    <UserCircleIcon
                      width={28}
                      height={28}
                      stroke={theme.colors.onSurfaceVariant}
                    />
                    <Text variant="bodySmall" style={styles.previewHint}>
                      {avatar.trim()
                        ? '無法載入頭像'
                        : characterText.noAvatar}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                背景圖
              </Text>
              <TextInput
                value={background}
                onChangeText={setBackground}
                placeholder="可輸入圖片網址或本機路徑"
              />
              <View style={styles.pickerActionRow}>
                <Button
                  mode="outlined"
                  onPress={() => handlePickImage('background')}>
                  選擇背景圖
                </Button>
                <Button
                  mode="text"
                  onPress={() => handleClearImage('background')}>
                  清除背景圖
                </Button>
              </View>
              <View style={styles.previewSection}>
                <Text variant="labelMedium" style={styles.previewLabel}>
                  背景預覽
                </Text>
                {backgroundSource && !backgroundPreviewFailed ? (
                  <ImageBackground
                    source={backgroundSource}
                    style={styles.backgroundPreview}
                    imageStyle={styles.backgroundPreviewImage}
                    resizeMode="cover"
                    onError={() => setBackgroundPreviewFailed(true)}>
                    <View style={styles.backgroundPreviewOverlay} />
                    <Text variant="bodySmall" style={styles.backgroundPreviewText}>
                      背景預覽
                    </Text>
                  </ImageBackground>
                ) : (
                  <View style={styles.backgroundPreviewPlaceholder}>
                    <Text variant="bodySmall" style={styles.previewHint}>
                      {background.trim()
                        ? '無法載入背景圖'
                        : characterText.noBackground}
                    </Text>
                  </View>
                )}
              </View>
            </View>
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
