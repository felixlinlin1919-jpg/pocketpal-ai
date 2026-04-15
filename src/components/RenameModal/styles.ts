import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme as any);
    return {
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: design.modalBackdrop,
      },
      modalContent: {
        width: '84%',
        backgroundColor: design.overlaySurface,
        borderRadius: design.cardRadius,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        ...design.shadow,
      },
      modalTitle: {
        fontSize: 19,
        fontWeight: '800',
        color: theme.colors.onSurface,
        textAlign: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: design.subtleBorderColor,
      },
      textInput: {
        margin: 16,
        padding: 15,
        backgroundColor: design.inputSurface,
        color: theme.colors.onSurface,
        fontSize: 16,
        fontWeight: '600',
        borderWidth: 1,
        borderColor: design.accentBorder,
        borderRadius: design.innerRadius,
      },
      buttonContainer: {
        flexDirection: 'row',
        backgroundColor: design.rowSurface,
        borderTopWidth: 1,
        borderTopColor: design.dividerColor,
      },
      cancelButton: {
        flex: 1,
        paddingVertical: 14,
        borderRightWidth: 1,
        borderRightColor: design.subtleBorderColor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cancelText: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 16,
        fontWeight: '700',
      },
      confirmButton: {
        flex: 1,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
      },
      confirmText: {
        color: theme.colors.primary,
        fontSize: 16,
        fontWeight: '800',
      },
      disabledButton: {
        opacity: 0.4,
      },
    };
  })());
