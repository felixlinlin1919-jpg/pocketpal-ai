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

import {UserCircleIcon} from '../../assets/icons';
import {useCharacterProfiles, useTheme} from '../../hooks';
import {CharacterProfile} from '../../types/character';

import {createStyles} from './styles';

const CHARACTER_EDIT_ROUTE = 'CharacterProfileEditor';

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

  const renderAvatar = (profile: CharacterProfile) => {
    if (profile.avatar) {
      return <Image source={{uri: profile.avatar}} style={styles.avatar} />;
    }

    return (
      <View style={styles.avatarPlaceholder}>
        <UserCircleIcon
          width={28}
          height={28}
          stroke={theme.colors.onSurfaceVariant}
        />
      </View>
    );
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
              {selectedCharacter?.name ?? '尚未選擇角色'}
            </Text>
            <Button
              mode="contained"
              style={styles.addButton}
              onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
              新增角色
            </Button>
          </Card>
        }
        ListEmptyComponent={
          <Card style={styles.emptyCard}>
            <Text variant="titleMedium">尚未建立角色卡</Text>
            <Text variant="bodyMedium" style={styles.emptyText}>
              先新增一張角色卡，後續就能接入聊天背景、頭像與系統提示詞。
            </Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate(CHARACTER_EDIT_ROUTE)}>
              新增角色
            </Button>
          </Card>
        }
        renderItem={({item}) => {
          const isSelected = selectedCharacter?.id === item.id;

          return (
            <Card style={[styles.card, isSelected && styles.selectedCard]}>
              <View style={styles.cardPressable}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => setSelectedCharacter(item.id)}>
                  <View style={styles.profileRow}>
                    {renderAvatar(item)}
                    <View style={styles.infoContainer}>
                      <Text variant="titleMedium" style={styles.profileName}>
                        {item.name}
                      </Text>
                      <Text variant="bodyMedium" style={styles.profileMeta}>
                        {isSelected ? '目前使用中' : '點擊可選擇角色'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View style={styles.actionRow}>
                  <Button
                    mode="text"
                    onPress={() =>
                      navigation.navigate(CHARACTER_EDIT_ROUTE, {
                        profileId: item.id,
                      })
                    }>
                    編輯角色
                  </Button>
                  <Button
                    mode="text"
                    textColor={theme.colors.error}
                    onPress={() => handleDelete(item)}>
                    刪除角色
                  </Button>
                </View>
              </View>
            </Card>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.listContent} />}
      />
    </SafeAreaView>
  );
});
