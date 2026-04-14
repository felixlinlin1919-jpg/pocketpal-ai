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
        paddingHorizontal: 18,
        paddingVertical: 20,
        gap: 14,
        position: 'relative',
      },
      heroHalo: {
        position: 'absolute',
        top: 8,
        width: 220,
        height: 220,
        borderRadius: 999,
        backgroundColor: design.accentTint,
        opacity: 0.7,
      },
      iconBadge: {
        width: 74,
        height: 74,
        borderRadius: 37,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: design.rowSurface,
        borderWidth: 1,
        borderColor: design.accentBorder,
        ...design.shadow,
      },
      eyebrow: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 12,
        lineHeight: 16,
        fontWeight: '700',
        letterSpacing: 1.2,
        textTransform: 'uppercase',
      },
      title: {
        color: theme.colors.onSurface,
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 36,
        fontWeight: '800',
      },
      description: {
        color: design.bodyMuted.color,
        textAlign: 'center',
        lineHeight: 24,
        maxWidth: 300,
      },
      button: {
        minWidth: 200,
        marginTop: 10,
        borderRadius: 999,
        paddingHorizontal: 8,
      },
      footnote: {
        color: design.palette.textSubtle,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 18,
        maxWidth: 280,
        opacity: 0.85,
      },
    };
  })());
