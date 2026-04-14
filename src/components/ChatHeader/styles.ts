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
        backgroundColor: design.heroBackground,
        borderBottomWidth: 1,
        borderBottomColor: design.dividerColor,
      },
      leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexShrink: 1,
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
