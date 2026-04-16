import {l10n, supportedLanguages} from '../../src/locales';

export class UIStore {
  static readonly GROUP_KEYS = {
    READY_TO_USE: 'ready_to_use',
    AVAILABLE_TO_DOWNLOAD: 'available_to_download',
  } as const;
}

export const mockUiStore = {
  colorScheme: 'light',
  autoNavigatetoChat: false,
  benchmarkShareDialog: {
    shouldShow: true,
  },
  pageStates: {
    modelsScreen: {
      filters: [],
      expandedGroups: {
        [UIStore.GROUP_KEYS.READY_TO_USE]: true,
      },
    },
  },
  language: 'en',
  supportedLanguages: [...supportedLanguages],
  l10n: l10n.en,
  _language: 'en',
  setValue: jest.fn(),
  displayMemUsage: false,
  setAutoNavigateToChat: jest.fn(),
  setColorScheme: jest.fn(),
  setLanguage: jest.fn((language: keyof typeof l10n) => {
    mockUiStore._language = language;
    mockUiStore.language = language in l10n ? language : 'en';
    mockUiStore.l10n = l10n[mockUiStore.language];
  }),
  setDisplayMemUsage: jest.fn(),
  setBenchmarkShareDialogPreference: jest.fn(),
  showError: jest.fn(),
};
