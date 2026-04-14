import React, {useContext} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {observer} from 'mobx-react';

import {useTheme} from '../../hooks';
import {createStyles} from './styles';
import {modelStore} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {L10nContext} from '../../utils';
import {ModelIcon} from '../../assets/icons';

interface ChatEmptyPlaceholderProps {
  onSelectModel: () => void;
  bottomComponentHeight: number;
}

export const ChatEmptyPlaceholder = observer(
  ({onSelectModel, bottomComponentHeight}: ChatEmptyPlaceholderProps) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<any>>();
    const l10n = useContext(L10nContext);
    const styles = createStyles({theme});

    const hasAvailableModels = modelStore.availableModels.length > 0;
    const hasActiveModel = modelStore.activeModelId !== undefined;

    const getContent = () => {
      if (!hasAvailableModels) {
        return {
          title: '尚未加入模型',
          description: '先加入一個模型，這裡就會變成你的對話首頁。',
          buttonText: '前往模型庫',
          onPress: () => {
            navigation.navigate('Models');
          },
        };
      }

      return {
        title: '選擇要聊天的模型',
        description: '載入模型後，就能開始新的對話，角色設定也會一併套用。',
        buttonText: '選擇模型',
        onPress: onSelectModel,
      };
    };

    const {title, description, buttonText, onPress} = getContent();

    if (hasActiveModel) {
      return <View />;
    }
      return (
        <View
          style={[styles.container, {marginBottom: bottomComponentHeight + 100}]}>
          <View style={styles.hero}>
            <View style={styles.heroHalo} />
            <View style={styles.iconBadge}>
              <ModelIcon stroke={theme.colors.primary} />
            </View>
            <Text style={styles.eyebrow}>聊天首頁</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
              mode="contained"
              onPress={onPress}
              style={styles.button}
              loading={modelStore.isContextLoading}
              disabled={hasActiveModel}>
              {modelStore.isContextLoading
                ? l10n.components?.chatEmptyPlaceholder?.loading
                : buttonText}
            </Button>
            <Text style={styles.footnote}>
              本機模型與角色設定準備好後，這裡會成為你的主要對話空間。
            </Text>
          </View>
        </View>
      );
    },
);
