import React from 'react';
import {ScrollView, View} from 'react-native';

import {RouteProp, useRoute} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ABOUT_DETAIL_CONTENT,
  AboutDetailKey,
} from '../../constants/brand';
import {useTheme} from '../../hooks';
import {createStyles} from './styles';

type AboutDetailRouteParams = {
  AboutDetail: {
    detailKey: AboutDetailKey;
  };
};

export const AboutDetailScreen: React.FC = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme, insets);
  const route = useRoute<RouteProp<AboutDetailRouteParams, 'AboutDetail'>>();
  const content = ABOUT_DETAIL_CONTENT[route.params.detailKey];

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.detailHero}>
          <Text style={styles.detailTitle}>{content.title}</Text>
          <Text style={styles.detailSubtitle}>{content.subtitle}</Text>
        </View>

        <View style={styles.detailCard}>
          {content.sections.map(section => (
            <View key={section.title} style={styles.detailSection}>
              <Text style={styles.detailSectionTitle}>{section.title}</Text>
              <Text style={styles.detailBody}>{section.body}</Text>
              {section.items?.map(item => (
                <Text key={item} style={styles.detailListItem}>
                  {`• ${item}`}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {content.footer ? (
          <View style={styles.footerNote}>
            <Text style={styles.footerNoteText}>{content.footer}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};
