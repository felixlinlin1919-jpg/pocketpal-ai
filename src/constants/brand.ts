export const APP_BRAND_NAME = 'KyoKyoNook';

export const APP_BRAND_TAGLINE = '本機 AI 聊天與角色空間';

export const APP_CUSTOM_BUILD_DESCRIPTION =
  '以本機聊天、角色卡與私人使用體驗為核心的自訂版本。';

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

export const ABOUT_DETAIL_CONTENT: Record<
  AboutDetailKey,
  AboutDetailContent
> = {
  openSourceLicenses: {
    title: '開源授權',
    subtitle: '本頁整理此自訂版本的主要開源基礎與授權資訊。',
    sections: [
      {
        title: '基礎專案',
        body:
          'This app is based on PocketPal AI. PocketPal AI is licensed under the MIT License.',
      },
      {
        title: 'PocketPal AI MIT License',
        body: POCKETPAL_MIT_LICENSE,
      },
    ],
    footer:
      '完整第三方套件授權將隨 notices 結構逐步補齊；本頁保留 PocketPal AI 主專案的完整 MIT 授權內容。',
  },
  thirdPartyNotices: {
    title: '第三方 Notices',
    subtitle: '主要技術與依賴分類，後續可在此結構中補齊完整授權全文。',
    sections: [
      {
        title: 'App 與介面層',
        body: '此自訂版本主要建立於以下 React Native 生態系工具：',
        items: [
          'React Native',
          'React Native Paper',
          'React Navigation',
          'MobX / mobx-persist-store',
          'WatermelonDB / AsyncStorage',
        ],
      },
      {
        title: '本機模型與聊天能力',
        body: '本機推理與模型互動相關能力主要依賴：',
        items: [
          'llama.rn',
          'llama.cpp',
          'chat-formatter',
          'Hugging Face 相關模型下載流程',
        ],
      },
      {
        title: '媒體與裝置能力',
        body: '圖片、檔案、裝置資訊與原生整合相關能力主要依賴：',
        items: [
          'react-native-image-picker',
          'react-native-document-picker',
          'react-native-device-info',
          'react-native-fs / blob-util 類型檔案處理工具',
        ],
      },
    ],
    footer:
      '此頁目前不宣稱已涵蓋所有第三方授權全文；後續若要上架，建議接入自動 notices 產生流程並補齊完整授權內容。',
  },
  customBuildNotes: {
    title: '改版資訊',
    subtitle: '這是以私人本機聊天體驗為方向整理的自訂版本。',
    sections: [
      {
        title: '版本定位',
        body:
          'KyoKyoNook 是基於 PocketPal AI 的自訂版本，主介面已收斂原官方品牌露出，並以本機使用與角色聊天體驗為核心。',
      },
      {
        title: '主要調整',
        body: '此版本聚焦於更一致的前端體驗與角色系統：',
        items: [
          '主介面、聊天頁、角色頁、設定頁與模型頁已重新整理視覺語言。',
          '加入角色卡、角色提示詞、Thinking 開關、頭像與背景圖接線。',
          '支援使用者頭像、快速切換角色與本機聊天流程。',
          '整理自用版定位，移除或降低不適合此版本的雲端 / 官方服務入口。',
        ],
      },
      {
        title: '使用範圍',
        body:
          '此版本以個人使用與私人測試為主；若要對外發布或上架，仍需進一步完成完整第三方授權、隱私政策與品牌資產審核。',
      },
    ],
  },
  privacy: {
    title: '隱私說明',
    subtitle: '簡要說明此自訂版本如何處理聊天、角色與設定資料。',
    sections: [
      {
        title: '本機優先',
        body:
          '聊天紀錄、角色卡、使用者頭像與大多數設定預設儲存在你的裝置上，用於維持本機聊天與角色體驗。',
      },
      {
        title: '模型與附件',
        body:
          '你選擇的本機模型、圖片附件與角色背景主要在裝置上使用。若你主動設定遠端模型或外部服務，資料處理方式會依該服務而不同。',
      },
      {
        title: '不預設啟用雲端回傳',
        body:
          '此自訂版本不重新啟用 Firebase 或官方雲端回報流程。除非你明確使用外部模型或匯出功能，聊天內容不會因本版本本身而自動送往官方雲端。',
      },
      {
        title: '你可以管理的資料',
        body:
          '你可以在 app 內管理角色卡、清除頭像或背景圖、刪除聊天紀錄，並自行決定要載入或移除哪些模型。',
      },
    ],
  },
};
