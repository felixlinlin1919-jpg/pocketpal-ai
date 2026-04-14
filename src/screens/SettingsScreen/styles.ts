import {StyleSheet} from 'react-native';

import {Theme} from '../../utils/types';
import {getAppDesign} from '../../utils/appDesign';

export const createStyles = (theme: Theme) =>
  StyleSheet.create((() => {
    const design = getAppDesign(theme);

    return {
      safeArea: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      container: {
        padding: design.screenPadding,
        paddingBottom: 28,
        gap: 18,
      },
      scrollViewContent: {
        paddingVertical: 16,
        paddingHorizontal: 16,
      },
      screenHeader: {
        paddingHorizontal: 4,
        paddingTop: 4,
        paddingBottom: 2,
      },
      screenTitle: {
        color: theme.colors.onSurface,
        fontSize: 30,
        fontWeight: '800',
      },
      screenDescription: {
        color: design.palette.textMuted,
        lineHeight: 22,
      },
      card: {
        ...design.cardStyle,
        marginVertical: 0,
        overflow: 'hidden',
      },
      cardTitle: {
        color: theme.colors.onSurfaceVariant,
        fontSize: 13,
        fontWeight: '700',
        letterSpacing: 0.8,
        textTransform: 'uppercase',
      },
      cardSection: {
        backgroundColor: 'transparent',
        paddingBottom: 0,
      },
      settingItemContainer: {
        marginVertical: 16,
      },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 2,
      },
      textContainer: {
        flex: 1,
        marginRight: 16,
      },
      labelWithIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6,
      },
      settingIcon: {
        marginRight: 8,
      },
      textLabel: {
        color: theme.colors.onSurface,
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
      },
      textDescription: {
        color: design.palette.textSubtle,
        lineHeight: 20,
        marginTop: 4,
      },
      avatarActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
      },
      userAvatarPreview: {
        width: 42,
        height: 42,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      userAvatarFallback: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: design.mutedSurface,
        borderWidth: 1,
        borderColor: design.cardBorderColor,
      },
      divider: {
        marginVertical: 14,
        backgroundColor: design.subtleBorderColor,
      },
      slider: {},
      textInput: {
        marginVertical: 10,
      },
      invalidInput: {
        borderColor: theme.colors.error,
        borderWidth: 1,
      },
      errorText: {
        color: theme.colors.error,
        marginTop: 4,
      },
      menuContainer: {
        position: 'relative',
      },
      menuButton: {
        minWidth: 126,
        borderRadius: 18,
        borderColor: design.cardBorderColor,
        backgroundColor: design.rowSurface,
      },
      buttonContent: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
      },
      advancedSettingsButton: {
        marginVertical: 8,
      },
      advancedSettingsContent: {
        marginTop: 8,
      },
      advancedAccordion: {
        minHeight: 58,
        backgroundColor: design.rowSurface,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: design.subtleBorderColor,
      },
      accordionTitle: {
        fontSize: 15,
        color: theme.colors.onSurface,
        fontWeight: '600',
      },
      menu: {
        width: 170,
      },
      linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
      },
      linkIcon: {
        marginLeft: 4,
      },
      segmentedButtons: {
        marginVertical: 10,
      },
      themeSegmented: {
        marginTop: 12,
      },
      themeSegmentButton: {
        borderRadius: 14,
      },
    };
  })());
