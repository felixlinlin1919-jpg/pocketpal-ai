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
        ...design.cardStyle,
        width: '100%',
        maxWidth: 380,
        alignItems: 'center',
        paddingHorizontal: 28,
        paddingVertical: 30,
        gap: 16,
      },
      iconBadge: {
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: design.accentTint,
        borderWidth: 1,
        borderColor: design.accentBorder,
      },
      title: {
        color: theme.colors.onSurface,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '700',
      },
      description: {
        color: design.bodyMuted.color,
        textAlign: 'center',
        lineHeight: 22,
        maxWidth: 280,
      },
      button: {
        minWidth: 200,
        marginTop: 6,
        borderRadius: 999,
      },
    };
  })());
