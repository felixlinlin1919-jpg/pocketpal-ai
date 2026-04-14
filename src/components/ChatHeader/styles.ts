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
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(4, 7, 12, 0.98)',
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
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: theme.colors.surfaceVariant,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      characterAvatarFallback: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: design.elevatedSurface,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
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
