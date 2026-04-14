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
        paddingTop: 18,
        paddingBottom: 24,
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
        borderRadius: 30,
        position: 'absolute',
        zIndex: 10,
        left: 12,
        right: 12,
        bottom: 8,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        backgroundColor: design.overlaySurface,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.24,
        shadowRadius: 20,
        elevation: 8,
      },
      chatContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: theme.colors.background,
        zIndex: 0,
      },
      characterBackground: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
      },
      characterBackgroundImage: {
        opacity: 0.22,
      },
      characterBackgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.dark
          ? 'rgba(4, 6, 11, 0.68)'
          : 'rgba(248, 250, 252, 0.82)',
      },
      headerWrapper: {
        zIndex: 100,
      },
      customBottomComponent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
  })());
