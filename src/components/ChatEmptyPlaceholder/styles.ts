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
        paddingHorizontal: 24,
        paddingVertical: 24,
        gap: 14,
      },
      iconBadge: {
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: design.mutedSurface,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      title: {
        color: theme.colors.onSurface,
        textAlign: 'center',
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '700',
      },
      description: {
        color: theme.colors.onSurfaceVariant,
        textAlign: 'center',
        lineHeight: 22,
      },
      button: {
        minWidth: 200,
        marginTop: 4,
      },
    };
  })());
