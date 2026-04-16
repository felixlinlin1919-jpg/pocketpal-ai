import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    const isDarkSurface = theme.variant === 'dark' || theme.variant === 'anime';
    return {
      container: {
        flex: 1,
      },
      flatList: {
        height: '100%',
      },
      flatListContentContainer: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingTop: 12,
        paddingBottom: 28,
      },
      footer: {
        height: 20,
      },
      footerLoadingPage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        height: 40,
      },
      header: {
        height: 6,
      },
      menu: {
        width: 170,
      },
      scrollToBottomButton: {
        position: 'absolute',
        right: 18,
        backgroundColor: 'rgba(15, 23, 42, 0.94)',
        width: 42,
        height: 42,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.08)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.18,
        shadowRadius: 18,
        elevation: 6,
      },
      inputContainer: {
        borderRadius: 34,
        position: 'absolute',
        zIndex: 10,
        left: 10,
        right: 10,
        bottom: 12,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        backgroundColor:
          theme.variant === 'cream' ? design.rowSurface : design.overlaySurface,
        shadowColor: theme.variant === 'cream' ? '#60462f' : '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: isDarkSurface ? 0.22 : 0.06,
        shadowRadius: 20,
        elevation: theme.variant === 'cream' ? 4 : 8,
      },
      chatContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: design.palette.base,
        zIndex: 0,
      },
      characterBackground: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
      },
      characterBackgroundImage: {
        opacity:
          theme.variant === 'anime'
            ? 0.24
            : theme.variant === 'dark'
              ? 0.22
              : theme.variant === 'cream'
                ? 0.38
                : 0.3,
      },
      characterBackgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor:
          theme.variant === 'cream'
            ? 'rgba(245, 237, 226, 0.72)'
            : theme.variant === 'light'
              ? 'rgba(248, 249, 252, 0.68)'
              : theme.variant === 'anime'
                ? 'rgba(9, 12, 31, 0.58)'
                : 'rgba(4, 6, 11, 0.62)',
      },
      headerWrapper: {
        zIndex: 100,
        backgroundColor:
          theme.variant === 'cream'
            ? 'rgba(248, 241, 232, 0.88)'
            : theme.variant === 'light'
              ? 'rgba(255, 255, 255, 0.9)'
              : theme.variant === 'anime'
                ? 'rgba(27, 31, 59, 0.84)'
                : 'rgba(22, 28, 39, 0.9)',
        borderBottomWidth: 1,
        borderBottomColor: design.dividerColor,
      },
      customBottomComponent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
  })());
