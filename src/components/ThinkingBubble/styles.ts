import {StyleSheet, Platform} from 'react-native';
import {Theme} from '../../utils/types';

export const createStyles = (theme: Theme) => {
  const bubbleBackground = theme.colors.thinkingBubbleBackground;
  const bubbleBorderColor = theme.colors.thinkingBubbleBorder;
  const textColor = theme.colors.thinkingBubbleText;
  const shadowColor = theme.colors.thinkingBubbleShadow;

  return StyleSheet.create({
    shadowContainer: {
      ...Platform.select({
        ios: {
          shadowColor: shadowColor,
          shadowOffset: {width: 0, height: 4},
          shadowOpacity: 0.12,
          shadowRadius: 10,
        },
        android: {
          // No need here, shadows come from elevation in the inner container
        },
      }),
    },
    container: {
      marginTop: 12,
      marginBottom: 8,
      borderRadius: 18,
      overflow: 'hidden',
      backgroundColor: `${String(bubbleBackground)}F2`,
      borderWidth: 1,
      borderColor: bubbleBorderColor,
      // Platform-specific styles to ensure consistent layout behavior
      ...Platform.select({
        ios: {
          // No need here, shadows come from parrent container - overflow: 'hidden', will hide the shadow
        },
        android: {
          elevation: 3,
        },
      }),
    },
    collapsedContainer: {
      height: 34,
      width: 156,
      alignSelf: 'flex-start',
      opacity: 0.92,
      justifyContent: 'center',
      // Reduced shadow/elevation for collapsed state
      ...Platform.select({
        ios: {
          shadowOpacity: 0.2, // Reduced shadow
          shadowRadius: 6, // Smaller shadow radius
        },
        android: {
          elevation: 1, // Reduced elevation
        },
      }),
    },
    partialContainer: {
      maxHeight: 168,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: `${String(bubbleBorderColor)}99`,
      backgroundColor: `${String(theme.colors.surface)}55`,
    },
    collapsedHeaderContainer: {
      paddingHorizontal: 14,
      paddingVertical: 6,
      alignItems: 'center',
    },
    headerText: {
      color: textColor,
      letterSpacing: 0.3,
    },
    chevronContainer: {
      width: 28,
      height: 28,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
      backgroundColor: theme.colors.thinkingBubbleChevronBackground,
      borderWidth: 1,
      borderColor: theme.colors.thinkingBubbleChevronBorder,
    },
    collapsedChevronContainer: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 14,
      backgroundColor: 'transparent',
      borderRadius: 0,
    },
    // Absolute fill style for BlurView
    absoluteFill: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    maskedContentContainer: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 0,
    },
    maskElementContainer: {
      flex: 1,
    },
    maskGradient: {
      height: 30,
      width: '100%',
    },
    maskSolid: {
      flex: 1,
      backgroundColor: 'black',
    },
  });
};
