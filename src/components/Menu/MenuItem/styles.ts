import {StyleSheet} from 'react-native';
import {Theme} from '../../../utils/types';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    container: {
      minHeight: 54,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      maxWidth: 'auto',
      borderRadius: 16,
      marginHorizontal: 6,
    },
    leadingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: 28,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 10,
      paddingHorizontal: 12,
      paddingVertical: 12,
      maxWidth: 'auto',
      flexGrow: 1,
    },
    noLeadingIcon: {
      paddingLeft: 12,
    },
    noTrailingIcon: {
      paddingRight: 12,
    },
    label: {
      ...theme.fonts.titleSmall,
      flex: 1,
      textAlign: 'left',
      paddingLeft: 0,
      fontWeight: '600',
    },
    labelDisabled: {
      opacity: 0.5,
    },
    itemDisabled: {
      opacity: 0.5,
    },
    trailingContainer: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: 28,
    },
    groupLabel: {
      paddingTop: 12,
      opacity: 0.6,
    },
    activeParent: {
      backgroundColor: theme.colors.menuBackgroundActive,
    },
    submenuInline: {
      marginHorizontal: 8,
      marginBottom: 6,
      paddingVertical: 4,
      borderRadius: 16,
      backgroundColor: design.mutedSurface,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    };
  })());
