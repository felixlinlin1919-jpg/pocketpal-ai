import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/types';

export const createStyles = ({theme}: {theme: Theme}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    flatList: {
      height: '100%',
      // flex: 1,
    },
    flatListContentContainer: {
      flexGrow: 1,
      paddingHorizontal: 8,
      paddingTop: 12,
      paddingBottom: 16,
    },
    footer: {
      height: 16,
    },
    footerLoadingPage: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
      height: 32,
    },
    header: {
      height: 4,
    },
    menu: {
      width: 170,
    },
    scrollToBottomButton: {
      position: 'absolute',
      right: 18,
      backgroundColor: theme.colors.primary,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    inputContainer: {
      borderRadius: 24,
      position: 'absolute',
      zIndex: 10,
      left: 10,
      right: 10,
      bottom: 8,
      ...(!theme.dark
        ? {
            boxShadow: `0px 8px 24px ${theme.colors.shadow}22`,
          }
        : {}),
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
      opacity: 0.18,
    },
    characterBackgroundOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.dark
        ? 'rgba(8, 12, 16, 0.56)'
        : 'rgba(248, 250, 252, 0.78)',
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
  });
