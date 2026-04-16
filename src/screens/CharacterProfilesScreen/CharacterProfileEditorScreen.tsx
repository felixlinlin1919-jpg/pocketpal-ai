import React from 'react';
import {Alert, Image, ImageBackground, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Switch, Text} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import {UserCircleIcon} from '../../assets/icons';
import {TextInput} from '../../components';
import {useCharacterProfiles, useTheme} from '../../hooks';
import {ROUTES} from '../../utils/navigationConstants';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {L10nContext} from '../../utils';

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
  const l10n = React.useContext(L10nContext);
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
  const [description, setDescription] = React.useState(
    existingProfile?.description ?? '',
  );
  const [emoji, setEmoji] = React.useState(existingProfile?.emoji ?? '');
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
          type === 'avatar'
            ? l10n.characterEditor.avatarPickErrorTitle
            : l10n.characterEditor.backgroundPickErrorTitle,
          l10n.characterEditor.imagePathNotFound,
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
        type === 'avatar'
          ? l10n.characterEditor.avatarPickErrorTitle
          : l10n.characterEditor.backgroundPickErrorTitle,
        l10n.characterEditor.tryAgainLater,
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
      Alert.alert(
        l10n.characterEditor.nameRequiredTitle,
        l10n.characterEditor.nameRequiredMessage,
      );
      return;
    }

    if (!systemPrompt.trim()) {
      Alert.alert(
        l10n.characterEditor.promptRequiredTitle,
        l10n.characterEditor.promptRequiredMessage,
      );
      return;
    }

    const payload = {
      name,
      description,
      emoji,
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
          <Card elevation={0} style={styles.helperCard}>
            <Text variant="titleMedium">
              {l10n.characterEditor.profileMissingTitle}
            </Text>
            <Text variant="bodyMedium" style={styles.fieldHint}>
              {l10n.characterEditor.profileMissingMessage}
            </Text>
            <Button mode="contained" onPress={() => navigation.goBack()}>
              {l10n.characterEditor.backToLibrary}
            </Button>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.editorScrollContent}>
        <Card elevation={0} style={styles.summaryCard}>
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
                  {emoji.trim() ? (
                    <Text style={styles.heroEmoji}>{emoji.trim()}</Text>
                  ) : (
                    <UserCircleIcon
                      width={32}
                      height={32}
                      stroke={theme.colors.onSurfaceVariant}
                    />
                  )}
                </View>
              )}
            </View>
            <Text variant="labelMedium" style={styles.summaryEyebrow}>
              {isEditing
                ? l10n.characterEditor.editCharacter
                : l10n.characterEditor.createCharacter}
            </Text>
            <Text variant="headlineSmall" style={styles.summaryHeading}>
              {name.trim() || l10n.characterEditor.untitledCharacter}
            </Text>
            <Text variant="bodySmall" style={styles.summaryCaption}>
              {description.trim() ||
                (thinkingEnabled
                  ? l10n.characterEditor.thinkingEnabledStatus
                  : l10n.characterEditor.thinkingDisabledStatus)}
            </Text>
          </View>
        </Card>

        <Card elevation={0} style={styles.editorCard}>
          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              {l10n.characterEditor.sections.basicInfo}
            </Text>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.name}
              </Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder={l10n.characterEditor.placeholders.name}
              />
            </View>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.description}
              </Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder={l10n.characterEditor.placeholders.description}
                multiline
                numberOfLines={3}
              />
            </View>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.emoji}
              </Text>
              <TextInput
                value={emoji}
                onChangeText={setEmoji}
                placeholder={l10n.characterEditor.placeholders.emoji}
                maxLength={2}
              />
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              {l10n.characterEditor.sections.chatStyle}
            </Text>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.systemPrompt}
              </Text>
              <TextInput
                value={systemPrompt}
                onChangeText={setSystemPrompt}
                placeholder={l10n.characterEditor.placeholders.systemPrompt}
                multiline
                numberOfLines={6}
              />
            </View>

            <View style={styles.switchRow}>
              <View style={styles.switchTextContainer}>
                <Text variant="titleSmall" style={styles.fieldLabel}>
                  {l10n.characterEditor.fields.thinkingEnabled}
                </Text>
                <Text variant="bodySmall" style={styles.fieldHint}>
                  {l10n.characterEditor.thinkingSupportHint}
                </Text>
              </View>
              <Switch value={thinkingEnabled} onValueChange={setThinkingEnabled} />
            </View>
          </View>

          <View style={styles.sectionBlock}>
            <Text variant="labelMedium" style={styles.searchLabel}>
              {l10n.characterEditor.sections.appearance}
            </Text>
            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.avatar}
              </Text>
              <TextInput
                value={avatar}
                onChangeText={setAvatar}
                placeholder={l10n.characterEditor.placeholders.imagePath}
              />
              <View style={styles.pickerActionRow}>
                <Button mode="outlined" onPress={() => handlePickImage('avatar')}>
                  {l10n.characterEditor.pickAvatar}
                </Button>
                <Button mode="text" onPress={() => handleClearImage('avatar')}>
                  {l10n.characterEditor.clearAvatar}
                </Button>
              </View>
              <View style={styles.previewSection}>
                <Text variant="labelMedium" style={styles.previewLabel}>
                  {l10n.characterEditor.avatarPreview}
                </Text>
                {avatarSource && !avatarPreviewFailed ? (
                  <Image
                    source={avatarSource}
                    style={styles.avatarPreview}
                    onError={() => setAvatarPreviewFailed(true)}
                  />
                ) : emoji.trim() ? (
                  <View style={styles.avatarPreviewPlaceholder}>
                    <Text style={styles.previewEmoji}>{emoji.trim()}</Text>
                  </View>
                ) : (
                  <View style={styles.avatarPreviewPlaceholder}>
                    <UserCircleIcon
                      width={28}
                      height={28}
                      stroke={theme.colors.onSurfaceVariant}
                    />
                    <Text variant="bodySmall" style={styles.previewHint}>
                      {avatar.trim()
                        ? l10n.characterEditor.avatarLoadFailed
                        : l10n.characterEditor.avatarMissing}
                    </Text>
                  </View>
                )}
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text variant="titleSmall" style={styles.fieldLabel}>
                {l10n.characterEditor.fields.background}
              </Text>
              <TextInput
                value={background}
                onChangeText={setBackground}
                placeholder={l10n.characterEditor.placeholders.imagePath}
              />
              <View style={styles.pickerActionRow}>
                <Button
                  mode="outlined"
                  onPress={() => handlePickImage('background')}>
                  {l10n.characterEditor.pickBackground}
                </Button>
                <Button
                  mode="text"
                  onPress={() => handleClearImage('background')}>
                  {l10n.characterEditor.clearBackground}
                </Button>
              </View>
              <View style={styles.previewSection}>
                <Text variant="labelMedium" style={styles.previewLabel}>
                  {l10n.characterEditor.backgroundPreview}
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
                      {l10n.characterEditor.backgroundPreview}
                    </Text>
                  </ImageBackground>
                ) : (
                  <View style={styles.backgroundPreviewPlaceholder}>
                    <Text variant="bodySmall" style={styles.previewHint}>
                      {background.trim()
                        ? l10n.characterEditor.backgroundLoadFailed
                        : l10n.characterEditor.backgroundMissing}
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
            {isEditing
              ? l10n.characterEditor.saveCharacter
              : l10n.characterEditor.addCharacter}
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
});
