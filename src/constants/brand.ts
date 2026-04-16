export const APP_BRAND_NAME = 'KyoKyoNook';

export const POCKETPAL_SOURCE_URL =
  'https://github.com/a-ghorbani/pocketpal-ai';

export const POCKETPAL_MIT_LICENSE = `MIT License

Copyright (c) 2024 Asghar Ghorbani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export type AboutDetailKey =
  | 'openSourceLicenses'
  | 'thirdPartyNotices'
  | 'customBuildNotes'
  | 'privacy';

export type AboutDetailSection = {
  title: string;
  body: string;
  items?: string[];
};

export type AboutDetailContent = {
  title: string;
  subtitle: string;
  sections: AboutDetailSection[];
  footer?: string;
};

export const getAboutDetailContent = (
  l10n: any,
): Record<AboutDetailKey, AboutDetailContent> => ({
  openSourceLicenses: {
    title: l10n.about.detailPages.openSourceLicenses.title,
    subtitle: l10n.about.detailPages.openSourceLicenses.subtitle,
    sections: [
      {
        title: l10n.about.detailPages.openSourceLicenses.baseProjectTitle,
        body:
          'This app is based on PocketPal AI. PocketPal AI is licensed under the MIT License.',
      },
      {
        title: l10n.about.detailPages.openSourceLicenses.coverageTitle,
        body: l10n.about.detailPages.openSourceLicenses.coverageBody,
      },
      {
        title: 'PocketPal AI MIT License',
        body: POCKETPAL_MIT_LICENSE,
      },
    ],
    footer: l10n.about.detailPages.openSourceLicenses.footer,
  },
  thirdPartyNotices: {
    title: l10n.about.detailPages.thirdPartyNotices.title,
    subtitle: l10n.about.detailPages.thirdPartyNotices.subtitle,
    sections: [
      {
        title: l10n.about.detailPages.thirdPartyNotices.appLayerTitle,
        body: l10n.about.detailPages.thirdPartyNotices.appLayerBody,
        items: [
          'React Native',
          'React Native Paper',
          'React Navigation',
          'MobX / mobx-persist-store',
          'WatermelonDB / AsyncStorage',
        ],
      },
      {
        title: l10n.about.detailPages.thirdPartyNotices.localAiTitle,
        body: l10n.about.detailPages.thirdPartyNotices.localAiBody,
        items: [
          'llama.rn',
          'llama.cpp',
          'chat-formatter',
          'Hugging Face model delivery flow',
        ],
      },
      {
        title: l10n.about.detailPages.thirdPartyNotices.mediaTitle,
        body: l10n.about.detailPages.thirdPartyNotices.mediaBody,
        items: [
          'react-native-image-picker',
          'react-native-document-picker',
          'react-native-device-info',
          'react-native-fs',
        ],
      },
      {
        title: l10n.about.detailPages.thirdPartyNotices.scopeTitle,
        body: l10n.about.detailPages.thirdPartyNotices.scopeBody,
      },
    ],
    footer: l10n.about.detailPages.thirdPartyNotices.footer,
  },
  customBuildNotes: {
    title: l10n.about.detailPages.customBuildNotes.title,
    subtitle: l10n.about.detailPages.customBuildNotes.subtitle,
    sections: [
      {
        title: l10n.about.detailPages.customBuildNotes.positioningTitle,
        body: l10n.about.detailPages.customBuildNotes.positioningBody,
      },
      {
        title: l10n.about.detailPages.customBuildNotes.highlightsTitle,
        body: l10n.about.detailPages.customBuildNotes.highlightsBody,
        items: l10n.about.detailPages.customBuildNotes.highlightsItems,
      },
      {
        title: l10n.about.detailPages.customBuildNotes.usageTitle,
        body: l10n.about.detailPages.customBuildNotes.usageBody,
      },
      {
        title: l10n.about.detailPages.customBuildNotes.aiReminderTitle,
        body: l10n.about.detailPages.customBuildNotes.aiReminderBody,
      },
    ],
  },
  privacy: {
    title: l10n.about.detailPages.privacy.title,
    subtitle: l10n.about.detailPages.privacy.subtitle,
    sections: [
      {
        title: l10n.about.detailPages.privacy.localFirstTitle,
        body: l10n.about.detailPages.privacy.localFirstBody,
        items: l10n.about.detailPages.privacy.localFirstItems,
      },
      {
        title: l10n.about.detailPages.privacy.modelsAttachmentsTitle,
        body: l10n.about.detailPages.privacy.modelsAttachmentsBody,
      },
      {
        title: l10n.about.detailPages.privacy.noCloudTitle,
        body: l10n.about.detailPages.privacy.noCloudBody,
      },
      {
        title: l10n.about.detailPages.privacy.dataControlTitle,
        body: l10n.about.detailPages.privacy.dataControlBody,
      },
      {
        title: l10n.about.detailPages.privacy.aiReminderTitle,
        body: l10n.about.detailPages.privacy.aiReminderBody,
      },
    ],
  },
});
