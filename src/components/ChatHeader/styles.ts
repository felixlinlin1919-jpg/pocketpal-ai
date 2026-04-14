import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {EdgeInsets} from 'react-native-safe-area-context';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({
  theme,
  insets,
  headerHeight,
}: {
  theme: Theme;
  insets: EdgeInsets;
  headerHeight: number;
}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      container: {
        height: headerHeight,
        paddingTop: insets.top,
        paddingHorizontal: 12,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(5, 8, 12, 0.96)',
        borderBottomWidth: 1,
        borderBottomColor: design.subtleBorderColor,
      },
      leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexShrink: 1,
      },
      characterAvatar: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: theme.colors.surfaceVariant,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
      },
      characterAvatarFallback: {
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
      },
      menuIcon: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerWithoutDivider: {
        elevation: 0,
        shadowOpacity: 0,
      },
      headerWithDivider: {},
    };
  })());
