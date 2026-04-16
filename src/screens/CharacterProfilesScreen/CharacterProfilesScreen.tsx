import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {CheckCircleIcon, UserCircleIcon} from '../../assets/icons';
import {TextInput} from '../../components';
import {useCharacterProfiles, useTheme} from '../../hooks';
import {CharacterProfile} from '../../types/character';
import {getCharacterImageSource} from '../../utils/characterImageSource';
import {L10nContext} from '../../utils';
import {t} from '../../locales';

import {createStyles} from './styles';

const CHARACTER_EDIT_ROUTE = 'CharacterProfileEditor';

const CharacterProfileCard = ({
  profile,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}: {
  profile: CharacterProfile;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const l10n = React.useContext(L10nContext);
  const avatarSource = getCharacterImageSource(profile.avatar);
  const backgroundSource = getCharacterImageSource(profile.background);
  const [avatarLoadFailed, setAvatarLoadFailed] = React.useState(false);
  const [backgroundLoadFailed, setBackgroundLoadFailed] = React.useState(false);

  React.useEffect(() => {
    setAvatarLoadFailed(false);
  }, [profile.avatar]);

  React.useEffect(() => {
    setBackgroundLoadFailed(false);
  }, [profile.background]);

  const hasValidAvatar = !!avatarSource && !avatarLoadFailed;
  const hasBackgroundPath = !!profile.background?.trim();
  const hasResolvedBackground = !!backgroundSource;
  const backgroundStatusText = !hasBackgroundPath
    ? l10n.characterLibrary.backgroundMissing
    : !hasResolvedBackground || backgroundLoadFailed
      ? l10n.characterLibrary.backgroundInvalid
      : l10n.characterLibrary.backgroundReady;
  const descriptionText =
    profile.description?.trim() ||
    (isSelected
      ? l10n.characterLibrary.currentRoleDescription
      : l10n.characterLibrary.tapToSwitchDescription);

  return (
    <Card style={[styles.card, isSelected && styles.selectedCard]}>
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onSelect}
        style={styles.cardPressable}>
        <View style={styles.cardVisual}>
          {backgroundSource && !backgroundLoadFailed ? (
            <Image
              source={backgroundSource}
              style={styles.cardBackgroundPreview}
              onError={() => setBackgroundLoadFailed(true)}
            />
          ) : (
            <View style={styles.cardBackgroundFallback} />
          )}
          <View style={styles.cardBackgroundOverlay} />
          <View style={styles.visualGlow} />
          <View style={styles.visualAvatarShell}>
            {hasValidAvatar ? (
              <Image
                source={avatarSource}
                style={styles.avatar}
                onError={() => setAvatarLoadFailed(true)}
              />
            ) : profile.emoji?.trim() ? (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarEmoji}>{profile.emoji.trim()}</Text>
              </View>
            ) : (
              <View style={styles.avatarPlaceholder}>
                <UserCircleIcon
                  width={28}
                  height={28}
                  stroke={theme.colors.onSurfaceVariant}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.cardTopRow}>
            <View style={styles.infoContainer}>
              <View style={styles.titleRow}>
                <Text variant="titleMedium" style={styles.profileName}>
                  {profile.name}
                </Text>
                {profile.emoji?.trim() ? (
                  <Text style={styles.inlineEmoji}>{profile.emoji.trim()}</Text>
                ) : null}
              </View>
              <Text
                variant="bodyMedium"
                numberOfLines={2}
                style={styles.profileMeta}>
                {descriptionText}
              </Text>
            </View>
            {isSelected && (
              <View style={styles.floatingSelectedBadge}>
                <CheckCircleIcon
                  width={14}
                  height={14}
                  stroke={theme.colors.onPrimary}
                />
                <Text variant="labelSmall" style={styles.selectedBadgeText}>
                  {l10n.characterLibrary.currentlyActive}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusChip}>
              <Text variant="labelSmall" style={styles.statusChipText}>
                {hasValidAvatar
                  ? l10n.characterLibrary.avatarReady
                  : profile.emoji?.trim()
                    ? l10n.characterLibrary.emojiOnly
                    : l10n.characterLibrary.avatarMissing}
              </Text>
            </View>
            <View
              style={[
                styles.statusChip,
                backgroundStatusText === l10n.characterLibrary.backgroundInvalid &&
                  styles.statusChipWarning,
              ]}>
              <Text
                variant="labelSmall"
                style={[
                  styles.statusChipText,
                  backgroundStatusText === l10n.characterLibrary.backgroundInvalid &&
                    styles.statusChipWarningText,
                ]}>
                {backgroundStatusText}
              </Text>
            </View>
          </View>

          {backgroundSource && (
            <Image
              source={backgroundSource}
              style={styles.hiddenBackgroundProbe}
              onError={() => setBackgroundLoadFailed(true)}
            />
          )}

          <View style={styles.actionRow}>
            <Button mode="text" onPress={onEdit}>
              {l10n.characterLibrary.edit}
            </Button>
            <Button mode="text" textColor={theme.colors.error} onPress={onDelete}>
              {l10n.characterLibrary.delete}
            </Button>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const CharacterProfilesScreen: React.FC = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation<any>();
  const l10n = React.useContext(L10nContext);
  const {
    profiles,
    selectedCharacter,
    setSelectedCharacter,
    deleteCharacterProfile,
  } = useCharacterProfiles();
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProfiles = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return profiles;
    }

    return profiles.filter(profile =>
      [profile.name, profile.description, profile.systemPrompt, profile.emoji]
        .filter((value): value is string => !!value)
        .some(value => value.toLowerCase().includes(query)),
    );
  }, [profiles, searchQuery]);

  const handleDelete = (profile: CharacterProfile) => {
    Alert.alert(
      l10n.characterLibrary.deleteConfirmTitle,
      t(l10n.characterLibrary.deleteConfirmMessage, {name: profile.name}),
      [
      {text: l10n.common.cancel, style: 'cancel'},
      {
        text: l10n.characterLibrary.delete,
        style: 'destructive',
        onPress: () => deleteCharacterProfile(profile.id),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <FlatList
        data={filteredProfiles}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <View style={styles.headerStack}>
            <View style={styles.pageHeaderRow}>
              <View style={styles.pageTitleBlock}>
                <Text variant="headlineMedium" style={styles.pageTitle}>
                  {l10n.characterLibrary.title}
                </Text>
                <Text variant="bodySmall" style={styles.pageMeta}>
                  {selectedCharacter?.name
                    ? t(l10n.characterLibrary.currentlyActiveName, {
                        name: selectedCharacter.name,
                      })
                    : l10n.characterLibrary.noneSelected}
                </Text>
              </View>
              <Button
                mode="contained"
                style={styles.addButton}
                onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
                {l10n.characterLibrary.addCharacter}
              </Button>
            </View>

            <View style={styles.searchBlock}>
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder={l10n.characterLibrary.searchPlaceholder}
              />
            </View>
          </View>
        }
        ListEmptyComponent={
          <Card style={styles.emptyCard}>
            <Text variant="titleMedium">
              {profiles.length === 0
                ? l10n.characterLibrary.emptyTitle
                : l10n.characterLibrary.emptyFilteredTitle}
            </Text>
            <Text variant="bodyMedium" style={styles.emptyText}>
              {profiles.length === 0
                ? l10n.characterLibrary.emptyDescription
                : l10n.characterLibrary.emptyFilteredDescription}
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
              {l10n.characterLibrary.addCharacter}
            </Button>
          </Card>
        }
        renderItem={({item}) => {
          const isSelected = selectedCharacter?.id === item.id;

          return (
            <CharacterProfileCard
              profile={item}
              isSelected={isSelected}
              onSelect={() => setSelectedCharacter(item.id)}
              onEdit={() =>
                navigation.navigate(CHARACTER_EDIT_ROUTE, {
                  profileId: item.id,
                })
              }
              onDelete={() => handleDelete(item)}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.listContent} />}
      />
    </SafeAreaView>
  );
});
