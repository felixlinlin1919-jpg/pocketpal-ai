import {StyleSheet} from 'react-native';

import {Theme} from '../../../utils/types';
import {getAppDesign} from '../../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);
    return {
    card: {
      ...design.cardStyle,
      marginHorizontal: 2,
      marginVertical: 6,
      backgroundColor: design.rowSurface,
    },
    cardContent: {
      paddingBottom: 6,
      paddingTop: 0,
    },
    downloadProgressContainer: {
      marginHorizontal: 18,
      marginTop: 6,
      marginBottom: 12,
    },
    progressBar: {
      height: 8,
      borderRadius: 5,
    },
    downloadSpeed: {
      textAlign: 'right',
      fontSize: 12,
      marginTop: 4,
    },
    warningContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: design.innerRadius,
      backgroundColor: design.rowSurfaceMuted,
      marginBottom: 12,
    },
    warningContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    warningIcon: {
      margin: 0,
    },
    warningText: {
      color: theme.colors.error,
      fontSize: 12,
      flex: 1,
      flexWrap: 'wrap',
    },
    visionToggleContainer: {
      backgroundColor: design.mutedSurface,
      borderRadius: design.innerRadius,
      padding: 12,
      gap: 8,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    compactHeader: {
      paddingHorizontal: 18,
      paddingTop: 18,
      paddingBottom: 14,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 10,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flex: 1,
      minWidth: 0,
      gap: 10,
    },
    titleBlock: {
      flex: 1,
      minWidth: 0,
      gap: 6,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    modelTypeIcon: {
      flexShrink: 0,
    },
    compactModelName: {
      color: theme.colors.onSurface,
      flex: 1,
    },
    summaryText: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
    },
    metaRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
    },
    metaChip: {
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
      backgroundColor: design.rowSurfaceMuted,
      borderWidth: 1,
      borderColor: design.subtleBorderColor,
    },
    metaChipText: {
      fontSize: 11,
      color: theme.colors.onSurfaceVariant,
    },
    metaChipActive: {
      backgroundColor: theme.colors.btnPrimaryBg,
      borderColor: theme.colors.btnPrimaryBorder,
    },
    metaChipActiveText: {
      color: theme.colors.btnPrimaryText,
    },
    metaChipReady: {
      backgroundColor: theme.colors.btnReadyBg,
      borderColor: theme.colors.btnReadyBorder,
    },
    metaChipReadyText: {
      color: theme.colors.btnReadyText,
    },
    metaChipDownloading: {
      backgroundColor: theme.colors.secondaryContainer,
      borderColor: theme.colors.secondary,
    },
    metaChipDownloadingText: {
      color: theme.colors.onSecondaryContainer,
    },
    metaChipPending: {
      backgroundColor: design.rowSurfaceMuted,
      borderColor: design.subtleBorderColor,
    },
    metaChipPendingText: {
      color: theme.colors.onSurfaceVariant,
    },
    sizeInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
    },
    sizeInfoText: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
      marginLeft: 4,
    },
    serverLink: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 8,
    },
    serverLinkText: {
      fontSize: 12,
      color: theme.colors.primary,
      marginLeft: 4,
      textDecorationLine: 'underline',
    },
    statusDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    detailsContent: {
      paddingHorizontal: 18,
      paddingBottom: 18,
      gap: 12,
    },
    descriptionContainer: {
      backgroundColor: design.rowSurfaceMuted,
      borderRadius: design.innerRadius,
      padding: 12,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    descriptionText: {
      fontSize: 14,
      color: theme.colors.onSurface,
      lineHeight: 20, // leading-relaxed
    },
    technicalDetailsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    technicalDetailCard: {
      backgroundColor: design.rowSurface,
      borderRadius: design.innerRadius,
      padding: 10,
      flex: 1,
      minWidth: '45%',
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    technicalDetailLabel: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
      marginBottom: 3,
    },
    technicalDetailValue: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.colors.onSurface,
    },
    hfLinkButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 12,
      backgroundColor: design.rowSurfaceMuted,
      borderRadius: design.innerRadius,
      borderWidth: 1,
      borderColor: design.accentBorder,
    },
    hfLinkContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    hfLinkText: {
      fontSize: 12,
      color: theme.colors.primary,
      marginLeft: 8,
    },
    // Action buttons section
    actionButtonsContainer: {
      paddingHorizontal: 18,
      paddingTop: 10,
      paddingBottom: 12,
      borderTopWidth: 1,
      borderTopColor: design.dividerColor,
      backgroundColor: design.rowSurfaceMuted,
    },
    actionButtonsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8, // gap-2 equivalent
    },
    primaryActionButton: {
      flex: 1,
      borderRadius: design.innerRadius,
      borderWidth: 1,
      height: 44,
    },
    iconButton: {
      padding: 10,
      borderRadius: design.innerRadius,
      backgroundColor: design.iconSurface,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 40,
      minHeight: 40,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    visionToggleHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    visionToggleLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      flex: 1,
    },
    visionToggleLabel: {
      fontSize: 14,
      fontWeight: '500',
      color: theme.colors.onSurface,
    },
    visionHelpText: {
      fontSize: 11,
      color: theme.colors.onSurfaceVariant,
      fontStyle: 'italic',
    },
    projectionModelsContainer: {
      backgroundColor: design.rowSurfaceMuted,
      borderRadius: design.innerRadius,
      padding: 12,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    warningButton: {
      paddingVertical: 6,
      paddingHorizontal: 8,
      backgroundColor: theme.colors.errorContainer,
      borderRadius: 6,
      marginTop: 8,
    },
    warningButtonText: {
      fontSize: 12,
      color: theme.colors.onErrorContainer,
      textAlign: 'center',
    },
    storageErrorText: {
      marginHorizontal: 20,
    },
    fullModelNameContainer: {
      backgroundColor: design.rowSurfaceMuted,
      borderRadius: design.innerRadius,
      padding: 12,
      borderWidth: 1,
      borderColor: design.cardBorderColor,
    },
    fullModelNameLabel: {
      fontSize: 12,
      color: theme.colors.onSurfaceVariant,
      marginBottom: 4,
      fontWeight: '500',
    },
    fullModelNameText: {
      fontSize: 14,
      color: theme.colors.onSurface,
      lineHeight: 20,
    },
    };
  })());
