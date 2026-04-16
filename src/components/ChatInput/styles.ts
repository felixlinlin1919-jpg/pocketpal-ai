import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {fontStyles} from '../../utils/theme';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = ({
  theme,
  isEditMode,
}: {
  theme: Theme;
  isEditMode: boolean;
}) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    container: {
      flexDirection: 'column',
    },
    palBtn: {
      height: 36,
      width: 36,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      backgroundColor: design.iconSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    plusButton: {
      height: 36,
      width: 36,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 18,
      opacity: 0.94,
      backgroundColor: design.iconSurface,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    plusButtonActive: {
      backgroundColor: design.accentTint,
      borderColor: design.accentBorder,
    },
    thinkingToggle: {
      height: 32,
      width: 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
      marginRight: 8,
      backgroundColor: design.iconSurface,
    },
    thinkingToggleLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 999,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
      paddingHorizontal: 12,
      paddingVertical: 7,
      marginLeft: 8,
      backgroundColor: design.rowSurface,
    },
    thinkingToggleLeftDisabled: {
      backgroundColor: 'transparent',
    },
    thinkingToggleText: {
      fontSize: 11,
      fontWeight: '600',
      marginLeft: 4,
    },
    thinkingToggleTextDisabled: {
      // Dynamic color will be applied via theme
    },
    palSelector: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 12,
      flexShrink: 1,
    },
    input: {
      ...theme.fonts.inputTextStyle,
      color: theme.colors.onSurface,
      flex: 1,
      maxHeight: 160,
      paddingVertical: 0,
      minHeight: 28,
    },
    marginRight: {
      marginRight: 16,
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'column',
      borderRadius: 30,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      backgroundColor: design.overlaySurface,
      ...design.shadow,
    },
    textInputArea: {
      flex: 1,
      paddingHorizontal: 18,
      paddingTop: 16,
      paddingBottom: 8,
    },
    controlBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      paddingVertical: 12,
      minHeight: 42,
      borderTopWidth: 1,
      borderTopColor: design.dividerColor,
      backgroundColor: design.rowSurfaceMuted,
    },
    attachmentTray: {
      marginHorizontal: 14,
      marginBottom: 10,
      padding: 14,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
      backgroundColor: design.rowSurface,
      gap: 12,
    },
    attachmentTrayTitle: {
      color: theme.colors.onSurfaceVariant,
      fontWeight: '700',
      letterSpacing: 0.8,
    },
    attachmentSection: {
      gap: 10,
    },
    attachmentSectionLabel: {
      color: theme.colors.onSurface,
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '700',
    },
    attachmentActions: {
      flexDirection: 'row',
      gap: 10,
      flexWrap: 'wrap',
    },
    attachmentAction: {
      borderRadius: 999,
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
      backgroundColor: design.iconSurface,
    },
    attachmentActionMuted: {
      backgroundColor: design.rowSurfaceMuted,
      borderColor: design.subtleBorderColor,
    },
    attachmentActionText: {
      color: theme.colors.onSurface,
      fontSize: 13,
      fontWeight: '700',
    },
    attachmentHint: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      lineHeight: 18,
    },
    attachmentDivider: {
      height: 1,
      backgroundColor: design.dividerColor,
    },
    leftControls: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      flex: 1,
    },
    rightControls: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
    },
    editBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: design.rowSurfaceMuted,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      borderBottomWidth: 1,
      borderBottomColor: design.dividerColor,
      zIndex: 10, // Ensure edit bar stays above other elements
    },
    editBarText: {
      color: theme.colors.onSurfaceVariant,
    },
    editBarButton: {
      margin: 0,
    },
    inputRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingHorizontal: 18,
      paddingVertical: 16,
      marginTop: isEditMode ? 28 : 0,
    },
    palNameWrapper: {
      ...fontStyles.regular,
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
    },
    palName: {
      fontSize: 12,
      color: theme.colors.onSurface,
      ...fontStyles.semibold,
    },
    // New compact pal name styles for control bar
    palNameCompact: {
      fontSize: 10,
      ...fontStyles.regular,
      color: theme.colors.onSurfaceVariant,
    },
    palNameValueCompact: {
      fontSize: 10,
      ...fontStyles.semibold,
      color: theme.colors.onSurface,
    },
    // Image preview styles
    imagePreviewContainer: {
      marginTop: 12,
      marginBottom: 4,
      paddingHorizontal: 14,
    },
    imagePreviewContainerEditMode: {
      marginTop: 36, // Account for edit bar height (28px) + extra spacing (8px)
    },
    imageScrollContent: {
      paddingHorizontal: 4,
    },
    imageContainer: {
      marginHorizontal: 4,
      position: 'relative',
    },
    previewImage: {
      width: 92,
      height: 92,
      borderRadius: 18,
      backgroundColor: theme.colors.surfaceVariant,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    removeImageButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 0,
      padding: 0,
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      width: 25,
      height: 25,
    },
    inputInnerContainer: {
      flexShrink: 1,
      flexGrow: 1,
    },
    // Camera-specific styles
    cameraButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    stopButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 2,
    },

    // Compact Video Button (for right side)
    compactVideoButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 18,
      gap: 6,
      minWidth: 85,
    },
    compactButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '600',
    },
    // Prompt Label for Video Pals
    promptLabel: {
      marginBottom: 4,
    },
    inputWithLabel: {
      marginTop: 0,
    },
    // Helper text for model not loaded warning
    helperTextContainer: {
      position: 'absolute',
      bottom: '100%',
      right: 0,
      marginBottom: 8,
      backgroundColor: theme.colors.errorContainer,
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 14,
      maxWidth: 250,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 3,
    },
    helperText: {
      color: theme.colors.onErrorContainer,
      fontSize: 11,
      lineHeight: 14,
    },
    };
  })());
