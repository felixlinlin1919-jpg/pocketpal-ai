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
      paddingRight: 12,
      paddingLeft: 12,
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
      marginLeft: 12,
      marginRight: 12,
      maxWidth: 'auto',
      flexGrow: 1,
    },
    noLeadingIcon: {
      marginLeft: 0,
    },
    noTrailingIcon: {
      marginRight: 0,
    },
    label: {
      ...theme.fonts.titleSmall,
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
    },
    groupLabel: {
      paddingTop: 12,
      opacity: 0.6,
    },
    activeParent: {
      backgroundColor: design.rowSurfaceMuted,
    },
    };
  })());
