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
        backgroundColor: 'rgba(0, 0, 0, 0.56)',
      },
      modalContent: {
        width: '84%',
        backgroundColor: design.sectionBackground,
        borderRadius: design.cardRadius,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.onSurface,
        textAlign: 'center',
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: design.subtleBorderColor,
      },
      textInput: {
        margin: 16,
        padding: 14,
        backgroundColor: design.mutedSurface,
        color: theme.colors.onSurface,
        fontSize: 16,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
        borderRadius: design.innerRadius,
      },
      buttonContainer: {
        flexDirection: 'row',
        backgroundColor: design.mutedSurface,
        borderTopWidth: 1,
        borderTopColor: design.subtleBorderColor,
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
        fontWeight: '500',
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
        fontWeight: '700',
      },
      disabledButton: {
        opacity: 0.4,
      },
    };
  })());
