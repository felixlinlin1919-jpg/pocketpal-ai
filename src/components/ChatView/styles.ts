import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
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
        bottom: 10,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        backgroundColor: design.overlaySurface,
        shadowColor: theme.variant === 'cream' ? '#60462f' : '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: theme.variant === 'dark' ? 0.24 : 0.1,
        shadowRadius: 20,
        elevation: 8,
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
        opacity: theme.variant === 'dark' ? 0.2 : theme.variant === 'cream' ? 0.34 : 0.24,
      },
      characterBackgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.colors.messageOverlay,
      },
      headerWrapper: {
        zIndex: 100,
        backgroundColor: design.heroBackground,
      },
      customBottomComponent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
  })());
