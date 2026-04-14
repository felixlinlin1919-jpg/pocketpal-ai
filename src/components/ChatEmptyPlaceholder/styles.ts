import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      contentCard: {
        ...design.heroCardStyle,
        width: '100%',
        maxWidth: 420,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 28,
        gap: 16,
      },
      eyebrow: {
        ...design.sectionTitle,
      },
      title: {
        color: theme.colors.onSurface,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '700',
      },
      description: {
        color: theme.colors.onSurfaceVariant,
        textAlign: 'center',
        lineHeight: 22,
      },
      button: {
        minWidth: 220,
        marginTop: 4,
      },
      logo: {
        width: 88,
        height: 88,
        borderRadius: 28,
      },
    };
  })());
