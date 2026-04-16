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
      hero: {
        width: '100%',
        maxWidth: 380,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 8,
        gap: 16,
        position: 'relative',
      },
      heroHalo: {
        position: 'absolute',
        top: 18,
        width: 210,
        height: 210,
        borderRadius: 999,
        backgroundColor: design.accentTint,
        opacity: 0.56,
      },
      title: {
        color: theme.colors.onSurface,
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 38,
        fontWeight: '800',
        letterSpacing: -0.4,
      },
      description: {
        color: design.bodyMuted.color,
        textAlign: 'center',
        lineHeight: 23,
        maxWidth: 292,
      },
      button: {
        minWidth: 200,
        marginTop: 6,
        borderRadius: 999,
        paddingHorizontal: 8,
      },
    };
  })());
