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
import {characterText} from '../../constants/characterText';
import {useCharacterProfiles, useTheme} from '../../hooks';
import {CharacterProfile} from '../../types/character';
import {getCharacterImageSource} from '../../utils/characterImageSource';

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
    ? characterText.noBackground
    : !hasResolvedBackground || backgroundLoadFailed
      ? '背景路徑失效'
      : '已設定背景';

  return (
    <Card style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.cardPressable}>
        <TouchableOpacity activeOpacity={0.85} onPress={onSelect}>
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
          <View style={styles.profileRow}>
            {hasValidAvatar ? (
              <Image
                source={avatarSource}
                style={styles.avatar}
                onError={() => setAvatarLoadFailed(true)}
              />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <UserCircleIcon
                  width={28}
                  height={28}
                  stroke={theme.colors.onSurfaceVariant}
                />
              </View>
            )}

            <View style={styles.infoContainer}>
              <View style={styles.titleRow}>
                <Text variant="titleMedium" style={styles.profileName}>
                  {profile.name}
                </Text>
                {isSelected && (
                  <View style={styles.selectedBadge}>
                    <CheckCircleIcon
                      width={14}
                      height={14}
                      stroke={theme.colors.onPrimary}
                    />
                    <Text variant="labelSmall" style={styles.selectedBadgeText}>
                      目前使用中
                    </Text>
                  </View>
                )}
              </View>

              <Text variant="bodyMedium" style={styles.profileMeta}>
                {isSelected ? '目前角色' : '點一下即可切換到這個角色'}
              </Text>

              <View style={styles.statusRow}>
                <View style={styles.statusChip}>
                  <Text variant="labelSmall" style={styles.statusChipText}>
                    {hasValidAvatar ? '有頭像' : '無頭像'}
                  </Text>
                </View>
                <View
                  style={[
                    styles.statusChip,
                    backgroundStatusText === '背景路徑失效' &&
                      styles.statusChipWarning,
                  ]}>
                  <Text
                    variant="labelSmall"
                    style={[
                      styles.statusChipText,
                      backgroundStatusText === '背景路徑失效' &&
                        styles.statusChipWarningText,
                    ]}>
                    {backgroundStatusText}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {backgroundSource && (
          <Image
            source={backgroundSource}
            style={styles.hiddenBackgroundProbe}
            onError={() => setBackgroundLoadFailed(true)}
          />
        )}

        <View style={styles.actionRow}>
          <Button mode="text" onPress={onEdit}>
            編輯角色
          </Button>
          <Button mode="text" textColor={theme.colors.error} onPress={onDelete}>
            刪除角色
          </Button>
        </View>
      </View>
    </Card>
  );
};

export const CharacterProfilesScreen: React.FC = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation<any>();
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
      [profile.name, profile.systemPrompt]
        .filter(Boolean)
        .some(value => value.toLowerCase().includes(query)),
    );
  }, [profiles, searchQuery]);

  const handleDelete = (profile: CharacterProfile) => {
    Alert.alert('刪除角色', `確定要刪除「${profile.name}」嗎？`, [
      {text: '取消', style: 'cancel'},
      {
        text: '刪除角色',
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
            <Card style={styles.summaryCard}>
              <Text variant="labelMedium" style={styles.summaryEyebrow}>
                角色宇宙
              </Text>
              <Text variant="headlineSmall" style={styles.summaryHeading}>
                角色管理
              </Text>
              <Text variant="bodyMedium" style={styles.summaryBody}>
                為不同角色準備專屬提示詞、頭像與背景，並在聊天頁快速切換當前對話身份。
              </Text>
              <View style={styles.summaryStatsRow}>
                <View style={styles.summaryStatChip}>
                  <Text variant="labelSmall" style={styles.summaryStatLabel}>
                    目前角色
                  </Text>
                  <Text variant="bodySmall" style={styles.summaryStatValue}>
                    {selectedCharacter?.name ?? characterText.noneSelected}
                  </Text>
                </View>
                <View style={styles.summaryStatChip}>
                  <Text variant="labelSmall" style={styles.summaryStatLabel}>
                    角色數量
                  </Text>
                  <Text variant="bodySmall" style={styles.summaryStatValue}>
                    {profiles.length} 張
                  </Text>
                </View>
              </View>
              <View style={styles.summaryActionRow}>
                <Button
                  mode="contained"
                  style={styles.addButton}
                  onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
                  {characterText.addCharacter}
                </Button>
              </View>
            </Card>

            <View style={styles.searchBlock}>
              <Text variant="labelMedium" style={styles.searchLabel}>
                搜尋角色
              </Text>
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="搜尋名稱、提示詞或角色設定"
              />
            </View>
          </View>
        }
        ListEmptyComponent={
          <Card style={styles.emptyCard}>
            <Text variant="titleMedium">
              {profiles.length === 0 ? '尚未建立角色卡' : '找不到符合的角色'}
            </Text>
            <Text variant="bodyMedium" style={styles.emptyText}>
              {profiles.length === 0
                ? '建立第一張角色卡後，就能把專屬提示詞、頭像與背景直接帶進聊天。'
                : '試試其他關鍵字，或直接建立新的角色。'}
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
              {characterText.addCharacter}
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
