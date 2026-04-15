import {StyleSheet, ViewStyle} from 'react-native';

import {Theme} from './types';

export const getAppDesign = (theme: Theme) => {
  const palette =
    theme.variant === 'dark'
      ? {
          base: '#06080d',
          baseAlt: '#0b1018',
          surface: '#10141c',
          surfaceRaised: '#171c26',
          surfaceFloating: '#1c2230',
          surfaceMuted: 'rgba(255, 255, 255, 0.04)',
          surfaceSoft: 'rgba(255, 255, 255, 0.06)',
          surfaceStrong: 'rgba(255, 255, 255, 0.1)',
          accent: '#8fb8ff',
          accentStrong: '#d7e7ff',
          accentSoft: 'rgba(143, 184, 255, 0.14)',
          textMuted: 'rgba(203, 213, 225, 0.72)',
          textSubtle: 'rgba(203, 213, 225, 0.54)',
        }
      : theme.variant === 'anime'
        ? {
            base: '#0f1224',
            baseAlt: '#151936',
            surface: '#171a32',
            surfaceRaised: '#202543',
            surfaceFloating: '#282d52',
            surfaceMuted: 'rgba(255, 159, 202, 0.07)',
            surfaceSoft: 'rgba(143, 216, 255, 0.08)',
            surfaceStrong: 'rgba(255, 159, 202, 0.16)',
            accent: '#ff9fca',
            accentStrong: '#ffd6ea',
            accentSoft: 'rgba(255, 159, 202, 0.16)',
            textMuted: 'rgba(248, 236, 245, 0.74)',
            textSubtle: 'rgba(248, 236, 245, 0.56)',
          }
      : theme.variant === 'cream'
        ? {
            base: '#efe6db',
            baseAlt: '#e8ddcf',
            surface: '#f6efe6',
            surfaceRaised: '#fbf6ef',
            surfaceFloating: '#fffaf2',
            surfaceMuted: 'rgba(91, 69, 50, 0.06)',
            surfaceSoft: 'rgba(122, 90, 60, 0.08)',
            surfaceStrong: 'rgba(122, 90, 60, 0.14)',
            accent: '#7a5a3c',
            accentStrong: '#4f3824',
            accentSoft: 'rgba(122, 90, 60, 0.14)',
            textMuted: 'rgba(98, 84, 70, 0.78)',
            textSubtle: 'rgba(98, 84, 70, 0.58)',
          }
        : {
            base: '#f8fafc',
            baseAlt: '#eef2f7',
            surface: '#ffffff',
            surfaceRaised: '#ffffff',
            surfaceFloating: '#ffffff',
            surfaceMuted: 'rgba(15, 23, 42, 0.04)',
            surfaceSoft: 'rgba(15, 23, 42, 0.06)',
            surfaceStrong: 'rgba(15, 23, 42, 0.12)',
            accent: '#2563eb',
            accentStrong: '#1d4ed8',
            accentSoft: 'rgba(37, 99, 235, 0.12)',
            textMuted: 'rgba(71, 85, 105, 0.72)',
            textSubtle: 'rgba(71, 85, 105, 0.56)',
          };
  const spacingDefault = theme.spacing?.default ?? 8;
  const cardRadius = 24;
  const innerRadius = 18;
  const pillRadius = 999;
  const screenPadding = 16;
  const cardBorderColor = theme.variant === 'anime'
    ? 'rgba(255, 159, 202, 0.12)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.08)'
    : theme.variant === 'cream'
      ? 'rgba(91, 69, 50, 0.14)'
      : 'rgba(15, 23, 42, 0.08)';
  const subtleBorderColor = theme.variant === 'anime'
    ? 'rgba(143, 216, 255, 0.08)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : theme.variant === 'cream'
      ? 'rgba(91, 69, 50, 0.08)'
      : 'rgba(15, 23, 42, 0.05)';
  const heroBackground = theme.variant === 'anime'
    ? '#1b1f3b'
    : theme.variant === 'dark'
    ? 'rgba(22, 28, 39, 0.96)'
    : theme.variant === 'cream'
      ? '#f8f1e8'
      : 'rgba(255, 255, 255, 0.98)';
  const sectionBackground = theme.variant === 'anime'
    ? '#171a32'
    : theme.variant === 'dark'
    ? 'rgba(14, 16, 20, 0.94)'
    : theme.variant === 'cream'
      ? '#f6efe6'
      : 'rgba(255, 255, 255, 0.94)';
  const mutedSurface = theme.variant === 'anime'
    ? 'rgba(255, 159, 202, 0.07)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.04)'
    : theme.variant === 'cream'
      ? 'rgba(248, 241, 232, 0.96)'
      : 'rgba(15, 23, 42, 0.04)';
  const overlaySurface = theme.variant === 'anime'
    ? 'rgba(22, 25, 49, 0.9)'
    : theme.variant === 'dark'
    ? 'rgba(9, 12, 18, 0.82)'
    : theme.variant === 'cream'
      ? 'rgba(255, 248, 239, 0.96)'
      : 'rgba(255, 255, 255, 0.86)';
  const elevatedSurface = theme.variant === 'anime'
    ? '#202543'
    : theme.variant === 'dark'
    ? 'rgba(18, 23, 33, 0.96)'
    : theme.variant === 'cream'
      ? '#fbf6ef'
      : 'rgba(255, 255, 255, 0.98)';
  const heroOverlay = theme.variant === 'anime'
    ? 'rgba(7, 9, 24, 0.62)'
    : theme.variant === 'dark'
    ? 'rgba(8, 11, 18, 0.68)'
    : theme.variant === 'cream'
      ? 'rgba(122, 90, 60, 0.12)'
      : 'rgba(248, 250, 252, 0.78)';
  const accentTint = theme.variant === 'anime'
    ? 'rgba(255, 159, 202, 0.16)'
    : theme.variant === 'dark'
    ? 'rgba(96, 165, 250, 0.16)'
    : theme.variant === 'cream'
      ? 'rgba(122, 90, 60, 0.18)'
      : 'rgba(37, 99, 235, 0.12)';
  const accentBorder = theme.variant === 'anime'
    ? 'rgba(255, 159, 202, 0.3)'
    : theme.variant === 'dark'
    ? 'rgba(96, 165, 250, 0.28)'
    : theme.variant === 'cream'
      ? 'rgba(122, 90, 60, 0.28)'
      : 'rgba(37, 99, 235, 0.2)';
  const rowSurface = theme.variant === 'anime'
    ? palette.surfaceRaised
    : theme.variant === 'dark'
    ? palette.surfaceRaised
    : theme.variant === 'cream'
      ? '#fbf6ef'
      : palette.surfaceRaised;
  const rowSurfaceMuted = theme.variant === 'anime'
    ? '#24294a'
    : theme.variant === 'dark'
    ? palette.surfaceSoft
    : theme.variant === 'cream'
      ? '#f2e8dc'
      : 'rgba(15, 23, 42, 0.03)';
  const iconSurface = theme.variant === 'anime'
    ? 'rgba(255, 159, 202, 0.1)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.06)'
    : theme.variant === 'cream'
      ? 'rgba(122, 90, 60, 0.08)'
      : 'rgba(37, 99, 235, 0.08)';
  const dividerColor = theme.variant === 'anime'
    ? 'rgba(143, 216, 255, 0.08)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.06)'
    : theme.variant === 'cream'
      ? 'rgba(91, 69, 50, 0.1)'
      : 'rgba(15, 23, 42, 0.08)';
  const inputSurface = theme.variant === 'anime'
    ? 'rgba(255, 255, 255, 0.08)'
    : theme.variant === 'dark'
    ? 'rgba(255, 255, 255, 0.05)'
    : theme.variant === 'cream'
      ? '#fff8ef'
      : '#f8fafc';
  const modalBackdrop = theme.variant === 'anime'
    ? 'rgba(7, 9, 24, 0.7)'
    : theme.variant === 'dark'
    ? 'rgba(3, 6, 12, 0.72)'
    : theme.variant === 'cream'
      ? 'rgba(70, 50, 32, 0.22)'
      : 'rgba(15, 23, 42, 0.18)';

  const isFlatWarmTheme =
    theme.variant === 'cream' || theme.variant === 'anime';
  const shadow: ViewStyle = isFlatWarmTheme
    ? {
        shadowColor: 'transparent',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
      }
    : theme.variant === 'dark'
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

  const flatCardStyle: ViewStyle = {
    backgroundColor: rowSurface,
    borderRadius: cardRadius,
    borderWidth: 1,
    borderColor: subtleBorderColor,
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
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
    accentSoft: palette.accentSoft,
    rowSurface,
    rowSurfaceMuted,
    iconSurface,
    dividerColor,
    inputSurface,
    modalBackdrop,
    shadow,
    cardStyle,
    flatCardStyle,
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
    sectionSpacing: spacingDefault * 1.25,
  };
};

export const dividerLine = (color: string) =>
  StyleSheet.create({
    line: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: color,
    },
  }).line;
