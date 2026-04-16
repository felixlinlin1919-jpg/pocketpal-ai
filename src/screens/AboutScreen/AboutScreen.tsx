import React, {useContext} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import Clipboard from '@react-native-clipboard/clipboard';
import {Text, Icon} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {BuildInfo} from 'llama.rn';

import {CopyIcon} from '../../assets/icons';

import {appVariant} from '../../config/appVariant';
import {
  APP_BRAND_NAME,
  getAboutDetailContent,
  AboutDetailKey,
} from '../../constants/brand';
import {useTheme} from '../../hooks';
import {createStyles} from './styles';
import {L10nContext} from '../../utils';

export const AboutScreen: React.FC = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const l10n = useContext(L10nContext);
  const navigation = useNavigation<any>();
  const detailContent = React.useMemo(() => getAboutDetailContent(l10n), [l10n]);

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
      label: l10n.about.versionLabel,
      value: appInfo.version ? `v${appInfo.version}` : l10n.about.loadingLabel,
    },
    {
      label: l10n.about.buildLabel,
      value: appInfo.build || l10n.about.loadingLabel,
    },
    {
      label: l10n.about.runtimeLabel,
      value: `llama.cpp ${BuildInfo.number} (${BuildInfo.commit.substring(
        0,
        7,
      )})`,
    },
  ];
  const buildProfileRows = [
    {
      label: l10n.about.buildProfileRows.storageLabel,
      value: l10n.about.buildProfileRows.storageValue,
    },
    {
      label: l10n.about.buildProfileRows.experienceLabel,
      value: l10n.about.buildProfileRows.experienceValue,
    },
    {
      label: l10n.about.buildProfileRows.usageLabel,
      value: l10n.about.buildProfileRows.usageValue,
    },
  ];

  const detailRows: Array<{
    title: string;
    subtitle: string;
    icon: string;
    detailKey: AboutDetailKey;
  }> = [
    {
      title: detailContent.openSourceLicenses.title,
      subtitle: l10n.about.infoCenter.openSourceLicensesSubtitle,
      icon: 'scale-balance',
      detailKey: 'openSourceLicenses',
    },
    {
      title: detailContent.thirdPartyNotices.title,
      subtitle: l10n.about.infoCenter.thirdPartyNoticesSubtitle,
      icon: 'package-variant-closed',
      detailKey: 'thirdPartyNotices',
    },
    {
      title: detailContent.customBuildNotes.title,
      subtitle: l10n.about.infoCenter.customBuildNotesSubtitle,
      icon: 'sparkles',
      detailKey: 'customBuildNotes',
    },
    {
      title: detailContent.privacy.title,
      subtitle: l10n.about.infoCenter.privacySubtitle,
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
            <Text style={styles.brandTagline}>{l10n.about.heroTagline}</Text>
            <Text style={styles.brandDescription}>{l10n.about.heroDescription}</Text>

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
          <Text style={styles.sectionTitle}>{l10n.about.sections.version}</Text>
          {infoRows.map(row => (
            <View key={row.label} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{row.label}</Text>
              <Text style={styles.infoValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            {l10n.about.sections.buildProfile}
          </Text>
          {buildProfileRows.map(row => (
            <View key={row.label} style={styles.infoRow}>
              <Text style={styles.infoLabel}>{row.label}</Text>
              <Text style={styles.infoValue}>{row.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>
            {l10n.about.sections.infoCenter}
          </Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};
