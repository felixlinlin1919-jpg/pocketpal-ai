import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
      accordion: {
        minHeight: 64,
        backgroundColor: design.rowSurface,
        borderRadius: design.cardRadius,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        overflow: 'hidden',
      },
      activeAccordion: {
        backgroundColor: design.accentTint,
      },
      accordionTitle: {
        fontSize: 16,
        fontWeight: '700',
      },
      accordionDescription: {
        fontSize: 12,
        paddingBottom: 12,
        color: design.palette.textMuted,
      },
    };
  })());
