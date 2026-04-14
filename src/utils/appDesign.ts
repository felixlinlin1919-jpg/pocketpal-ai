import {StyleSheet, ViewStyle} from 'react-native';

import {Theme} from './types';

export const getAppDesign = (theme: Theme) => {
  const cardRadius = 24;
  const innerRadius = 18;
  const pillRadius = 999;
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
    cardRadius,
    innerRadius,
    pillRadius,
    cardBorderColor,
    subtleBorderColor,
    heroBackground,
    sectionBackground,
    mutedSurface,
    overlaySurface,
    shadow,
    cardStyle,
    sectionTitle: {
      color: theme.colors.onSurfaceVariant,
      fontSize: 12,
      letterSpacing: 1.1,
      textTransform: 'uppercase' as const,
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
