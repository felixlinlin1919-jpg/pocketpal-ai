import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
      accordion: {
        minHeight: 58,
        backgroundColor: design.sectionBackground,
        borderRadius: design.cardRadius,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        overflow: 'hidden',
      },
      accordionTitle: {
        fontSize: 15,
        fontWeight: '700',
      },
      accordionDescription: {
        fontSize: 12,
        paddingBottom: 10,
        color: theme.colors.onSurfaceVariant,
      },
    };
  })());
