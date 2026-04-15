import React, {useContext} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  Image,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import Clipboard from '@react-native-clipboard/clipboard';
import {Text, Button, Icon} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {BuildInfo} from 'llama.rn';

import {
  CopyIcon,
  GithubIcon,
} from '../../assets/icons';

import {appVariant} from '../../config/appVariant';
import {
  ABOUT_DETAIL_CONTENT,
  APP_BRAND_NAME,
  APP_BRAND_TAGLINE,
  APP_CUSTOM_BUILD_DESCRIPTION,
  AboutDetailKey,
  POCKETPAL_SOURCE_URL,
} from '../../constants/brand';
import {useTheme} from '../../hooks';
import {createStyles} from './styles';
import {L10nContext} from '../../utils';

const GithubButtonIcon = ({color}: {color: string}) => (
  <GithubIcon stroke={color} />
);

export const AboutScreen: React.FC = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const l10n = useContext(L10nContext);
  const navigation = useNavigation<any>();

  const [appInfo, setAppInfo] = React.useState({
    version: '',
    build: '',
  });

  React.useEffect(() => {
    const version = DeviceInfo.getVersion();
    const buildNumber = DeviceInfo.getBuildNumber();
    setAppInfo({
      version,
      build: buildNumber,
    });
  }, []);

  const copyVersionToClipboard = () => {
    const versionString = `Version ${appInfo.version} (${appInfo.build})`;
    Clipboard.setString(versionString);
    Alert.alert(
      l10n.about.versionCopiedTitle,
      l10n.about.versionCopiedDescription,
    );
  };

  const openDetail = (detailKey: AboutDetailKey) => {
    navigation.navigate('AboutDetail', {detailKey});
  };

  const infoRows = [
    {
      label: '版本',
      value: appInfo.version ? `v${appInfo.version}` : '讀取中',
    },
    {
      label: 'Build',
      value: appInfo.build || '讀取中',
    },
    {
      label: '執行核心',
      value: `llama.cpp ${BuildInfo.number} (${BuildInfo.commit.substring(
        0,
        7,
      )})`,
    },
  ];

  const detailRows: Array<{
    title: string;
    subtitle: string;
    icon: string;
    detailKey: AboutDetailKey;
  }> = [
    {
      title: ABOUT_DETAIL_CONTENT.openSourceLicenses.title,
      subtitle: 'PocketPal AI MIT License 與基礎專案資訊',
      icon: 'scale-balance',
      detailKey: 'openSourceLicenses',
    },
    {
      title: ABOUT_DETAIL_CONTENT.thirdPartyNotices.title,
      subtitle: '主要依賴分類與後續 notices 結構',
      icon: 'package-variant-closed',
      detailKey: 'thirdPartyNotices',
    },
    {
      title: ABOUT_DETAIL_CONTENT.customBuildNotes.title,
      subtitle: '自訂版本定位與主要調整',
      icon: 'sparkles',
      detailKey: 'customBuildNotes',
    },
    {
      title: ABOUT_DETAIL_CONTENT.privacy.title,
      subtitle: '本機資料、附件與外部服務使用說明',
      icon: 'shield-lock-outline',
      detailKey: 'privacy',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.heroCard}>
          <Image
            source={require('../../assets/images/kyokyonook-icon.png')}
            style={styles.brandIcon}
            resizeMode="cover"
          />
          <View style={styles.heroContent}>
            <View style={styles.heroTitleRow}>
              <Text style={styles.brandName}>{APP_BRAND_NAME}</Text>
              <View style={styles.buildBadge}>
                <Text style={styles.buildBadgeText}>
                  {appVariant.shortLabel}
                </Text>
              </View>
            </View>
            <Text style={styles.brandTagline}>{APP_BRAND_TAGLINE}</Text>
            <Text style={styles.brandDescription}>
              {APP_CUSTOM_BUILD_DESCRIPTION}
            </Text>

            <TouchableOpacity
              style={styles.versionButton}
              onPress={copyVersionToClipboard}
              activeOpacity={0.82}>
              <Text style={styles.versionText}>
                v{appInfo.version || '-'} ({appInfo.build || '-'})
              </Text>
              <CopyIcon
                width={16}
                height={16}
                stroke={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>版本資訊</Text>
          {infoRows.map(row => (
            <View key={row.label} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{row.label}</Text>
              <Text style={styles.infoValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>資訊中心</Text>
          {detailRows.map(row => (
            <TouchableOpacity
              key={row.detailKey}
              style={styles.navRow}
              onPress={() => openDetail(row.detailKey)}
              activeOpacity={0.82}>
              <View style={styles.navIcon}>
                <Icon
                  source={row.icon}
                  size={20}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.navText}>
                <Text style={styles.navTitle}>{row.title}</Text>
                <Text style={styles.navSubtitle}>{row.subtitle}</Text>
              </View>
              <Icon
                source="chevron-right"
                size={20}
                color={theme.colors.onSurfaceVariant}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>基礎專案</Text>
          <Text style={styles.noticeText}>
            此自訂版本基於 PocketPal AI，並依本機自用聊天方向整理介面與功能。
          </Text>
          <Button
            mode="outlined"
            onPress={() => Linking.openURL(POCKETPAL_SOURCE_URL)}
            style={styles.actionButton}
            icon={GithubButtonIcon}>
            查看基礎專案
          </Button>
        </View>

        <View style={styles.noticeCard}>
          <Text style={styles.noticeTitle}>自訂版本狀態</Text>
          <Text style={styles.noticeText}>
            {`${appVariant.label} · ${appVariant.unavailableMessage}。`}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
