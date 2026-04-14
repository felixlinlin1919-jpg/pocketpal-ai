import {StyleSheet, ViewStyle} from 'react-native';

import {Theme} from './types';

export const getAppDesign = (theme: Theme) => {
  const palette = {
    base: theme.dark ? '#06080d' : '#f8fafc',
    surface: theme.dark ? '#10141c' : '#ffffff',
    surfaceRaised: theme.dark ? '#171c26' : '#ffffff',
    surfaceMuted: theme.dark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(15, 23, 42, 0.04)',
    accent: theme.dark ? '#8fb8ff' : '#2563eb',
    accentStrong: theme.dark ? '#d7e7ff' : '#1d4ed8',
    textMuted: theme.dark ? 'rgba(203, 213, 225, 0.72)' : 'rgba(71, 85, 105, 0.72)',
  };
  const cardRadius = 24;
  const innerRadius = 18;
  const pillRadius = 999;
  const screenPadding = 16;
  const cardBorderColor = theme.dark
    ? 'rgba(255, 255, 255, 0.08)'
    : 'rgba(15, 23, 42, 0.08)';
  const subtleBorderColor = theme.dark
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(15, 23, 42, 0.05)';
  const heroBackground = theme.dark
    ? 'rgba(22, 28, 39, 0.96)'
    : 'rgba(255, 255, 255, 0.98)';
  const sectionBackground = theme.dark
    ? 'rgba(14, 16, 20, 0.94)'
    : 'rgba(255, 255, 255, 0.94)';
  const mutedSurface = theme.dark
    ? 'rgba(255, 255, 255, 0.04)'
    : 'rgba(15, 23, 42, 0.04)';
  const overlaySurface = theme.dark
    ? 'rgba(9, 12, 18, 0.82)'
    : 'rgba(255, 255, 255, 0.86)';
  const elevatedSurface = theme.dark
    ? 'rgba(18, 23, 33, 0.96)'
    : 'rgba(255, 255, 255, 0.98)';
  const heroOverlay = theme.dark
    ? 'rgba(8, 11, 18, 0.68)'
    : 'rgba(248, 250, 252, 0.78)';
  const accentTint = theme.dark
    ? 'rgba(96, 165, 250, 0.16)'
    : 'rgba(37, 99, 235, 0.12)';
  const accentBorder = theme.dark
    ? 'rgba(96, 165, 250, 0.28)'
    : 'rgba(37, 99, 235, 0.2)';

  const shadow: ViewStyle = theme.dark
    ? {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 0.2,
        shadowRadius: 24,
        elevation: 8,
      }
    : {
        shadowColor: '#0f172a',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 4,
      };

  const cardStyle: ViewStyle = {
    backgroundColor: sectionBackground,
    borderRadius: cardRadius,
    borderWidth: 1,
    borderColor: cardBorderColor,
    ...shadow,
  };

  return {
    palette,
    cardRadius,
    innerRadius,
    pillRadius,
    screenPadding,
    cardBorderColor,
    subtleBorderColor,
    heroBackground,
    sectionBackground,
    mutedSurface,
    overlaySurface,
    elevatedSurface,
    heroOverlay,
    accentTint,
    accentBorder,
    shadow,
    cardStyle,
    heroCardStyle: {
      ...cardStyle,
      backgroundColor: heroBackground,
    } as ViewStyle,
    chipStyle: {
      borderRadius: pillRadius,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderWidth: 1,
      borderColor: subtleBorderColor,
      backgroundColor: mutedSurface,
    } as ViewStyle,
    sectionTitle: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      letterSpacing: 1.1,
      textTransform: 'uppercase' as const,
      fontWeight: '700' as const,
    },
    titleLarge: {
      color: theme.colors.onSurface,
      fontSize: 28,
      lineHeight: 34,
      fontWeight: '700' as const,
    },
    titleMedium: {
      color: theme.colors.onSurface,
      fontSize: 20,
      lineHeight: 26,
      fontWeight: '700' as const,
    },
    bodyMuted: {
      color: palette.textMuted,
      fontSize: 14,
      lineHeight: 21,
    },
    sectionSpacing: theme.spacing.default * 1.25,
  };
};

export const dividerLine = (color: string) =>
  StyleSheet.create({
    line: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: color,
    },
  }).line;
