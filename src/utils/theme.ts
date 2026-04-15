import {
  MD3DarkTheme,
  DefaultTheme as PaperLightTheme,
  configureFonts,
} from 'react-native-paper';

import {MD3BaseColors, SemanticColors, Theme} from './types';
import {withOpacity, stateLayerOpacity} from './colorUtils';

// MD3 key colors (seed colors)
const md3BaseColors: Partial<MD3BaseColors> = {
  primary: '#333333',
  secondary: '#1E4DF6',
  tertiary: '#7880FF',
  error: '#FF653F',
};

enum AppTheme {
  Light = 'light',
  Dark = 'dark',
  Cream = 'cream',
  Anime = 'anime',
}

const createBaseColors = (appTheme: AppTheme): MD3BaseColors => {
  const baseTheme =
    appTheme === AppTheme.Dark || appTheme === AppTheme.Anime
      ? MD3DarkTheme
      : PaperLightTheme;

  if (appTheme === AppTheme.Dark || appTheme === AppTheme.Anime) {
    if (appTheme === AppTheme.Anime) {
      return {
        ...baseTheme.colors,
        primary: '#ff9fca',
        onPrimary: '#32111f',
        primaryContainer: '#4f2136',
        onPrimaryContainer: '#ffe2ee',
        secondary: '#8fd8ff',
        onSecondary: '#072334',
        secondaryContainer: '#1d3e58',
        onSecondaryContainer: '#d8f1ff',
        tertiary: '#b9a7ff',
        onTertiary: '#24164c',
        tertiaryContainer: '#38296a',
        onTertiaryContainer: '#eee7ff',
        error: '#ff8a80',
        onError: '#3f0706',
        errorContainer: '#5f1715',
        onErrorContainer: '#ffdad6',
        background: '#0f1224',
        onBackground: '#f8ecf5',
        surface: '#171a32',
        onSurface: '#f8ecf5',
        surfaceVariant: '#3e405d',
        onSurfaceVariant: '#d7d2e7',
        outline: '#575a78',
        outlineVariant: '#2d304d',
        surfaceDisabled: withOpacity('#f8ecf5', 0.12),
        onSurfaceDisabled: withOpacity('#f8ecf5', 0.38),
        inverseSurface: '#f8ecf5',
        inverseOnSurface: '#171a32',
        inversePrimary: '#9b3b68',
        inverseSecondary: '#256986',
        shadow: '#000000',
        scrim: 'rgba(4, 6, 18, 0.72)',
        backdrop: 'rgba(10, 12, 28, 0.76)',
      };
    }

    return {
      ...baseTheme.colors,
      primary: '#DADDE6',
      onPrimary: '#44464C',
      primaryContainer: '#5B5E66',
      onPrimaryContainer: '#DEE0E6',
      secondary: '#95ABE6',
      onSecondary: '#11214C',
      secondaryContainer: '#424242',
      onSecondaryContainer: '#E0E0E0',
      tertiary: '#80E6E4',
      onTertiary: '#014C4C',
      tertiaryContainer: '#016665',
      onTertiaryContainer: '#9EE6E5',
      error: md3BaseColors.error!,
      onError: '#4C100D',
      errorContainer: '#661511',
      onErrorContainer: '#E6ACA9',
      background: '#000000',
      onBackground: '#ffffff',
      surface: '#0E0E0E',
      onSurface: '#E2E2E2',
      surfaceVariant: '#646466',
      onSurfaceVariant: '#e3e4e6',
      outline: '#444444',
      outlineVariant: '#a1a1a1',
      // Additional required MD3 colors
      surfaceDisabled: withOpacity('#333333', 0.12),
      onSurfaceDisabled: withOpacity('#e5e5e6', 0.38),
      inverseSurface: '#e5e5e6',
      inverseOnSurface: '#333333',
      inversePrimary: '#5B5E66',
      inverseSecondary: md3BaseColors.secondary!,
      shadow: '#ffffff',
      scrim: 'rgba(0, 0, 0, 0.25)',
      backdrop: 'rgba(66, 66, 66, 0.8)',
    };
  } else if (appTheme === AppTheme.Cream) {
    return {
      primary: '#5a4532',
      onPrimary: '#fffaf4',
      primaryContainer: '#e5d7c7',
      onPrimaryContainer: '#302316',
      secondary: '#8e6b58',
      onSecondary: '#fffaf4',
      secondaryContainer: '#eddccf',
      onSecondaryContainer: '#342318',
      tertiary: '#6c6f96',
      onTertiary: '#ffffff',
      tertiaryContainer: '#dde0f7',
      onTertiaryContainer: '#1f2244',
      error: 'rgb(186, 26, 26)',
      onError: 'rgb(255, 255, 255)',
      errorContainer: 'rgb(255, 218, 214)',
      onErrorContainer: 'rgb(65, 0, 2)',
      background: '#efe6db',
      onBackground: '#251d15',
      surface: '#f6efe6',
      onSurface: '#2f261c',
      surfaceVariant: '#d7c9ba',
      onSurfaceVariant: '#625446',
      outline: '#b9aa9c',
      outlineVariant: '#d9ccbf',
      shadow: 'rgb(0, 0, 0)',
      scrim: 'rgb(0, 0, 0)',
      inverseSurface: '#3a2f25',
      inverseOnSurface: '#f8f2ea',
      inversePrimary: '#e9d7c1',
      inverseSecondary: '#f0ddd0',
      elevation: {
        level0: 'transparent',
        level1: '#f4ecdf',
        level2: '#f1e8db',
        level3: '#ede3d6',
        level4: '#e9dfd2',
        level5: '#e6dccf',
      },
      surfaceDisabled: 'rgba(47, 38, 28, 0.12)',
      onSurfaceDisabled: 'rgba(47, 38, 28, 0.38)',
      backdrop: 'rgba(58, 47, 37, 0.28)',
    };
  }

  return {
    ...baseTheme.colors,
    primary: md3BaseColors.primary!,
    onPrimary: '#FFFFFF',
    primaryContainer: '#DEE0E6',
    onPrimaryContainer: '#2D2F33',
    secondary: md3BaseColors.secondary!,
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E0E0E0',
    onSecondaryContainer: '#424242',
    tertiary: md3BaseColors.tertiary!,
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#F1F3FF',
    onTertiaryContainer: '#013332',
    error: md3BaseColors.error!,
    onError: '#FFFFFF',
    errorContainer: '#E6ACA9',
    onErrorContainer: '#330B09',
    background: '#ffffff',
    onBackground: '#111111',
    surface: '#F9FAFB',
    onSurface: '#333333',
    surfaceVariant: '#e4e4e6',
    onSurfaceVariant: '#646466',
    outline: withOpacity(md3BaseColors.primary!, 0.05),
    outlineVariant: '#a1a1a1',
    // Additional required MD3 colors
    surfaceDisabled: withOpacity('#fcfcfc', 0.12),
    onSurfaceDisabled: withOpacity('#333333', 0.38),
    inverseSurface: '#858585',
    inverseOnSurface: '#fcfcfc',
    inversePrimary: '#DEE0E6',
    inverseSecondary: '#95ABE6',
    shadow: '#000000',
    scrim: 'rgba(0, 0, 0, 0.25)',
    backdrop: 'rgba(51, 51, 51, 0.6)',
  };
};

const createSemanticColors = (
  baseColors: MD3BaseColors,
  appTheme: AppTheme,
): SemanticColors => {
  const isDark = appTheme === AppTheme.Dark;
  const isAnime = appTheme === AppTheme.Anime;
  const isCream = appTheme === AppTheme.Cream;

  return ({
  // Surface variants
  surfaceContainerHighest: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.22)
    : withOpacity(baseColors.primary, 0.05),
  surfaceContainerHigh: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.16)
    : withOpacity(baseColors.primary, 0.03),
  surfaceContainer: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.12)
    : withOpacity(baseColors.primary, 0.02),
  surfaceContainerLow: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.08)
    : withOpacity(baseColors.primary, 0.01),
  surfaceContainerLowest: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.04)
    : baseColors.surface,
  surfaceDim: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.06)
    : withOpacity(baseColors.primary, 0.06),
  surfaceBright: isDark || isAnime
    ? withOpacity(baseColors.surface, 0.24)
    : baseColors.surface,

  border: withOpacity(baseColors.onSurface, 0.05),
  placeholder: withOpacity(baseColors.onSurface, 0.3),
  text: baseColors.onBackground,
  textSecondary: withOpacity(baseColors.onSurface, 0.5),
  inverseText: baseColors.inverseOnSurface,
  inverseTextSecondary: withOpacity(baseColors.inverseOnSurface, 0.5),

  // Interactive states
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu specific
  menuBackground: isAnime
    ? '#222644'
    : isDark ? '#202635' : isCream ? '#fff8ef' : '#ffffff',
  menuBackgroundDimmed: isAnime
    ? 'rgba(7, 9, 24, 0.7)'
    : isDark
    ? 'rgba(10, 13, 20, 0.68)'
    : isCream
      ? 'rgba(73, 53, 35, 0.16)'
      : 'rgba(15, 23, 42, 0.12)',
  menuBackgroundActive: withOpacity(baseColors.primary, isCream ? 0.12 : 0.08),
  menuSeparator: withOpacity(baseColors.primary, 0.5),
  menuGroupSeparator: isDark
    ? withOpacity('#FFFFFF', 0.08)
    : withOpacity('#000000', 0.08),
  menuText: baseColors.onSurface,
  menuDangerText: baseColors.error,

  // Message specific
  authorBubbleBackground: isAnime
    ? '#242846'
    : isDark ? '#212121' : isCream ? '#f5eadc' : '#f2f2f2',
  assistantBubbleBackground: isAnime
    ? '#1c203c'
    : isDark
    ? '#171c26'
    : isCream
      ? '#fff9f0'
      : '#ffffff',
  assistantBubbleBorder: isAnime
    ? 'rgba(255, 159, 202, 0.16)'
    : isDark
    ? 'rgba(255, 255, 255, 0.08)'
    : isCream
      ? 'rgba(91, 69, 50, 0.12)'
      : 'rgba(15, 23, 42, 0.08)',
  userBubbleBackground: isAnime
    ? '#3c2f62'
    : isDark
    ? '#1b2b44'
    : isCream
      ? '#ead8c4'
      : '#dbeafe',
  userBubbleBorder: isAnime
    ? 'rgba(185, 167, 255, 0.26)'
    : isDark
    ? 'rgba(143, 184, 255, 0.18)'
    : isCream
      ? 'rgba(122, 90, 60, 0.22)'
      : 'rgba(37, 99, 235, 0.16)',
  messageOverlay: isAnime
    ? 'rgba(9, 12, 31, 0.66)'
    : isDark
    ? 'rgba(4, 6, 11, 0.7)'
    : isCream
      ? 'rgba(239, 230, 219, 0.68)'
      : 'rgba(248, 250, 252, 0.72)',
  receivedMessageDocumentIcon: baseColors.primary,
  sentMessageDocumentIcon: baseColors.onSurface,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    baseColors.primary,
    baseColors.secondary,
    baseColors.tertiary,
    baseColors.error,
  ],
  searchBarBackground: isAnime
    ? 'rgba(255, 255, 255, 0.08)'
    : isDark
    ? 'rgba(28, 28, 30, 0.92)'
    : isCream
      ? 'rgba(122, 90, 60, 0.08)'
    : 'rgba(118, 118, 128, 0.12)',

  // Thinking bubble specific
  thinkingBubbleBackground: isAnime
    ? '#1d3452'
    : isDark
    ? '#142e4d'
    : isCream
      ? '#efe6db'
      : '#f0f5fa',
  thinkingBubbleText: isAnime ? '#8fd8ff' : isDark ? '#6abaff' : isCream ? '#7a5a3c' : '#0a5999',
  thinkingBubbleBorder: isAnime
    ? 'rgba(143, 216, 255, 0.42)'
    : isDark
    ? 'rgba(74, 140, 199, 0.6)'
    : isCream
      ? 'rgba(122, 90, 60, 0.24)'
    : 'rgba(10, 89, 153, 0.4)',
  thinkingBubbleShadow: isAnime ? '#8fd8ff' : isDark ? '#4a9fff' : isCream ? '#7a5a3c' : '#0a5999',
  thinkingBubbleChevronBackground: isAnime
    ? 'rgba(143, 216, 255, 0.12)'
    : isDark
    ? 'rgba(74, 140, 199, 0.15)'
    : isCream
      ? 'rgba(122, 90, 60, 0.08)'
    : 'rgba(10, 89, 153, 0.1)',
  thinkingBubbleChevronBorder: isAnime
    ? 'rgba(143, 216, 255, 0.22)'
    : isDark
    ? 'rgba(74, 140, 199, 0.3)'
    : isCream
      ? 'rgba(122, 90, 60, 0.18)'
    : 'rgba(10, 89, 153, 0.2)',

  bgStatusActive: isDark ? '#22c55e' : '#22c55e',
  bgStatusIdle: isDark ? '#4b5563' : '#d1d5db',

  btnPrimaryBg: isAnime ? '#2a2249' : isDark ? '#0f1629' : isCream ? '#efe0d0' : '#eff6ff',
  btnPrimaryBorder: isAnime ? '#544080' : isDark ? '#192645' : isCream ? '#c8ac92' : '#bfdbff',
  btnPrimaryText: isAnime ? '#ffd6ea' : isDark ? '#93c5fd' : isCream ? '#6f5134' : '#1447e6',

  btnReadyBg: isAnime ? '#17352f' : isDark ? '#052e16' : isCream ? '#edf3e6' : '#ecfdf5',
  btnReadyBorder: isAnime ? '#2c6f61' : isDark ? '#166534' : isCream ? '#bfd4b0' : '#bbf7d0',
  btnReadyText: isAnime ? '#7ef0d5' : isDark ? '#6ee7b7' : isCream ? '#48643c' : '#047857',

  btnDownloadBg: isAnime ? '#162c3f' : isDark ? '#0a1f17' : isCream ? '#f1ece2' : '#ecfdf5',
  btnDownloadBorder: isAnime ? '#24577a' : isDark ? '#143d2d' : isCream ? '#d3c0ac' : '#bbf7d0',
  btnDownloadText: isAnime ? '#8fd8ff' : isDark ? '#34d399' : isCream ? '#7a5a3c' : '#047857',

  iconModelTypeText: isAnime ? '#8fd8ff' : isDark ? '#93c5fd' : isCream ? '#7a5a3c' : '#3b82f6',
  iconModelTypeVision: isAnime ? '#d6c8ff' : isDark ? '#c4b5fd' : isCream ? '#8a6f9b' : '#9810fa',
  iconModelTypeAudio: isAnime ? '#ffcf91' : isDark ? '#fdba74' : isCream ? '#b7773c' : '#f97316',
});
};

export const fontStyles = {
  regular: {fontFamily: 'Inter-Regular'},
  medium: {fontFamily: 'Inter-Medium'},
  bold: {fontFamily: 'Inter-Bold'},
  thin: {fontFamily: 'Inter-Thin'},
  light: {fontFamily: 'Inter-Light'},
  semibold: {fontFamily: 'Inter-SemiBold'},
  extraBold: {fontFamily: 'Inter-ExtraBold'},
};

const baseFontVariants = configureFonts({
  config: {...fontStyles.regular},
});

const customVariants = {
  // Add custom variants:
  bold: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.bold,
  },
  medium: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.medium,
  },
  thin: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.thin,
  },
  light: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.light,
  },
  semibold: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.semibold,
  },
} as const;

const configuredFonts = configureFonts({
  config: {
    ...baseFontVariants,
    ...customVariants,
    displayMedium: {
      ...baseFontVariants.displayMedium,
      ...fontStyles.bold,
    },
    titleSmall: {
      ...baseFontVariants.titleSmall,
      ...fontStyles.medium,
    },
  },
});

const createTheme = (appTheme: AppTheme): Theme => {
  const baseTheme =
    appTheme === AppTheme.Dark || appTheme === AppTheme.Anime
      ? MD3DarkTheme
      : PaperLightTheme;
  const baseColors = createBaseColors(appTheme);
  const semanticColors = createSemanticColors(
    baseColors,
    appTheme,
  );

  return {
    ...baseTheme,
    variant:
      appTheme === AppTheme.Dark
        ? 'dark'
        : appTheme === AppTheme.Cream
          ? 'cream'
          : appTheme === AppTheme.Anime
            ? 'anime'
            : 'light',
    colors: {
      ...baseColors,
      ...semanticColors,
    },
    borders: {
      inputBorderRadius: 16,
      messageBorderRadius: 15,
      default: 12,
    },
    fonts: {
      ...baseTheme.fonts,
      ...configuredFonts,
      titleMediumLight: {
        ...fontStyles.regular,
        fontSize: 16,
        lineHeight: 22,
      },
      dateDividerTextStyle: {
        ...fontStyles.extraBold,
        color: baseColors.onSurface,
        fontSize: 12,
        lineHeight: 16,
        opacity: 0.4,
      },
      emptyChatPlaceholderTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      inputTextStyle: {
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      receivedMessageBodyTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      receivedMessageCaptionTextStyle: {
        color: baseColors.onSurfaceVariant,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.medium,
      },
      receivedMessageLinkDescriptionTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 14,
        lineHeight: 20,
        ...fontStyles.regular,
      },
      receivedMessageLinkTitleTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 16,
        lineHeight: 22,
        ...fontStyles.extraBold,
      },
      sentMessageBodyTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      sentMessageCaptionTextStyle: {
        color: baseColors.onSurfaceVariant,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.medium,
      },
      sentMessageLinkDescriptionTextStyle: {
        color: baseColors.onSurface,
        fontSize: 14,
        lineHeight: 20,
        ...fontStyles.regular,
      },
      sentMessageLinkTitleTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 22,
        ...fontStyles.extraBold,
      },
      userAvatarTextStyle: {
        color: baseColors.onSurface,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.extraBold,
      },
      userNameTextStyle: {
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.extraBold,
      },
    },
    insets: {
      messageInsetsHorizontal: 20,
      messageInsetsVertical: 10,
    },
    spacing: {
      default: 16,
    },
    icons: {},
  };
};

export const lightTheme = createTheme(AppTheme.Light);
export const darkTheme = createTheme(AppTheme.Dark);
export const creamTheme = createTheme(AppTheme.Cream);
export const animeTheme = createTheme(AppTheme.Anime);
