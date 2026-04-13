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
    ? '未設定背景'
    : !hasResolvedBackground || backgroundLoadFailed
      ? '背景路徑失效'
      : '已設定背景';

  return (
    <Card style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.cardPressable}>
        <TouchableOpacity activeOpacity={0.85} onPress={onSelect}>
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
                {isSelected ? '已選擇' : '點擊可選擇角色'}
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
        data={profiles}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <Card style={styles.summaryCard}>
            <Text variant="titleMedium">角色卡管理</Text>
            <Text variant="bodyMedium" style={styles.summaryTitle}>
              目前選擇角色
            </Text>
            <Text variant="headlineSmall" style={styles.summaryValue}>
              {selectedCharacter?.name ?? characterText.noneSelected}
            </Text>
            <Button
              mode="contained"
              style={styles.addButton}
              onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
              {characterText.addCharacter}
            </Button>
          </Card>
        }
        ListEmptyComponent={
          <Card style={styles.emptyCard}>
            <Text variant="titleMedium">尚未建立角色卡</Text>
            <Text variant="bodyMedium" style={styles.emptyText}>
              建立角色後，可套用專屬提示詞、頭像與聊天背景。
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
