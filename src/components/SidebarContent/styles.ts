import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
    sidebarContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    divider: {
      marginHorizontal: 16,
      marginTop: 8,
      marginBottom: 10,
      backgroundColor: design.dividerColor,
      height: 1,
    },
    contentWrapper: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    sessionDrawerItem: {
      height: 48,
      borderRadius: 16,
      marginHorizontal: 10,
      marginVertical: 2,
    },
    menuDrawerItem: {
      height: 48,
      borderRadius: 16,
      marginHorizontal: 8,
      marginVertical: 2,
    },
    versionText: {
      color: theme.colors.onSurfaceVariant,
      opacity: 0.78,
      fontSize: 12,
      fontWeight: '500',
    },
    drawerSection: {
      marginTop: 14,
    },
    dateLabel: {
      paddingLeft: 20,
      paddingVertical: 8,
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      letterSpacing: 0.8,
      fontWeight: '700',
      textTransform: 'uppercase',
    },
    scrollViewContent: {
      flexGrow: 1,
      minHeight: '100%',
      paddingBottom: 20,
    },
    mainContent: {
      flex: 1,
    },
    menu: {
      width: 170,
    },
    listHeader: {
      gap: 12,
      paddingHorizontal: 16,
      paddingTop: 14,
      paddingBottom: 4,
    },
    sidebarTitle: {
      color: theme.colors.onSurface,
      fontSize: 20,
      fontWeight: '700',
      paddingHorizontal: 4,
    },
    navSection: {
      gap: 8,
    },
    navCard: {
      ...design.cardStyle,
      backgroundColor: design.rowSurface,
      paddingVertical: 6,
    },
    sectionLabel: {
      ...design.sectionTitle,
      paddingHorizontal: 4,
    },
    historyLabel: {
      ...design.sectionTitle,
      paddingHorizontal: 4,
    },
    historySearchBox: {
      borderRadius: 18,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
      backgroundColor: design.inputSurface,
      paddingHorizontal: 14,
      minHeight: 44,
      justifyContent: 'center',
    },
    historySearchInput: {
      color: theme.colors.onSurface,
      paddingVertical: 0,
      fontSize: 14,
      fontWeight: '500',
    },
    historyEmptyState: {
      marginHorizontal: 16,
      marginTop: 10,
      padding: 18,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
      backgroundColor: design.rowSurface,
      gap: 6,
    },
    historyEmptyTitle: {
      color: theme.colors.onSurface,
      fontWeight: '700',
      textAlign: 'center',
    },
    historyEmptyHint: {
      color: theme.colors.onSurfaceVariant,
      textAlign: 'center',
    },
    sessionItem: {
      position: 'relative',
    },
    sessionTouchable: {
      flex: 1,
    },
    // Selection mode styles
    selectionModeHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: design.dividerColor,
      backgroundColor: design.rowSurface,
    },
    selectedCountText: {
      fontSize: 16,
      fontWeight: '600',
      color: theme.colors.onSurface,
      flex: 1,
      textAlign: 'center',
    },
    sessionItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      paddingHorizontal: 6,
    },
    sessionCheckbox: {
      marginLeft: 8,
      marginRight: 4,
    },
    menuDivider: {
      marginVertical: 4,
    },
    // Header action buttons (export, delete icons)
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    headerActionButton: {
      padding: 4,
    },
    headerActionButtonDisabled: {
      opacity: 0.4,
    },
    // Select all row
    selectAllRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: design.rowSurface,
    },
    selectAllCheckbox: {
      marginRight: 12,
    },
    selectAllText: {
      fontSize: 16,
      color: theme.colors.onSurface,
    },
    selectAllDivider: {
      backgroundColor: design.dividerColor,
    },
    };
  })());
