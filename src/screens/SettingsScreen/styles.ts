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
        padding: 16,
        paddingBottom: 28,
        gap: 16,
      },
      scrollViewContent: {
        paddingVertical: 16,
        paddingHorizontal: 16,
      },
      screenHeader: {
        ...design.cardStyle,
        padding: 20,
        gap: 8,
      },
      screenEyebrow: {
        ...design.sectionTitle,
      },
      screenTitle: {
        color: theme.colors.onSurface,
      },
      screenDescription: {
        color: theme.colors.onSurfaceVariant,
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
      },
      settingItemContainer: {
        marginVertical: 16,
      },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
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
      },
      textDescription: {
        color: theme.colors.onSurfaceVariant,
        lineHeight: 20,
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
        minWidth: 118,
        borderRadius: 16,
        borderColor: design.cardBorderColor,
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
        minHeight: 55,
        backgroundColor: design.mutedSurface,
        borderRadius: 16,
      },
      accordionTitle: {
        fontSize: 15,
        color: theme.colors.secondary,
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
    };
  })());
