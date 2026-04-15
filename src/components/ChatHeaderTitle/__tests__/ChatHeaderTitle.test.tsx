import React from 'react';
import {fireEvent, render} from '../../../../jest/test-utils';
import {ChatHeaderTitle} from '../ChatHeaderTitle';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
  palStore,
} from '../../../store';
import {runInAction} from 'mobx';
import {basicModel, downloadedModel} from '../../../../jest/fixtures/models';

describe('ChatHeaderTitle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    runInAction(() => {
      characterProfileStore.profiles = [];
      characterProfileStore.selectedCharacterId = undefined;
      palStore.pals = [] as any;
      chatSessionStore.newChatCompletionSettings = {
        ...chatSessionStore.newChatCompletionSettings,
        enable_thinking: false,
      };
    });
  });

  it('renders new chat title when no active session exists', () => {
    runInAction(() => {
      chatSessionStore.resetActiveSession();
      chatSessionStore.sessions = [];
    });
    const {getByText} = render(<ChatHeaderTitle />, {withNavigation: true});
    expect(getByText('新的對話')).toBeTruthy();
  });

  it('renders session title when active session exists', () => {
    const mockSession = {
      id: '123',
      title: 'Test Session',
      date: new Date().toISOString(),
      messages: [],
    };
    runInAction(() => {
      Object.assign(chatSessionStore, {
        activeSessionId: mockSession.id,
        sessions: [mockSession],
      });
    });

    const {getByText} = render(<ChatHeaderTitle />, {withNavigation: true});
    expect(getByText('Test Session')).toBeTruthy();
  });

  it('hides model warning when active model exists', () => {
    runInAction(() => {
      modelStore.models = [basicModel];
      modelStore.setActiveModel(basicModel.id);
    });

    const {queryByText} = render(<ChatHeaderTitle />, {withNavigation: true});
    expect(queryByText('尚未載入模型')).toBeFalsy();
  });

  it('keeps header stable when active model changes', () => {
    // Initial model
    runInAction(() => {
      modelStore.models = [basicModel];
      modelStore.setActiveModel(basicModel.id);
    });

    const {getByText, queryByText, rerender} = render(<ChatHeaderTitle />, {
      withNavigation: true,
    });
    expect(queryByText('尚未載入模型')).toBeFalsy();

    // Change model
    runInAction(() => {
      modelStore.models = [downloadedModel];
      modelStore.setActiveModel(downloadedModel.id);
    });

    rerender(<ChatHeaderTitle />);
    expect(getByText('Test Session')).toBeTruthy();
    expect(queryByText('尚未載入模型')).toBeFalsy();
  });

  it('renders selected character name when available', () => {
    runInAction(() => {
      characterProfileStore.profiles = [
        {
          id: 'character-1',
          name: '測試角色',
          systemPrompt: '你是一個測試角色',
          thinkingEnabled: true,
          createdAt: 1,
          updatedAt: 1,
        },
      ] as any;
      characterProfileStore.selectedCharacterId = 'character-1';
    });

    const {getByText} = render(<ChatHeaderTitle />, {withNavigation: true});
    expect(getByText('測試角色')).toBeTruthy();
    expect(getByText('Thinking 開啟')).toBeTruthy();
  });

  it('falls back to current settings when no selected character exists', () => {
    runInAction(() => {
      palStore.pals = [
        {
          id: 'pal-1',
          name: '測試 Pal',
          type: 'local',
          source: 'local',
          systemPrompt: '你是一個有提示詞的 Pal',
          isSystemPromptChanged: false,
          useAIPrompt: false,
          parameters: {},
          parameterSchema: [],
        },
      ] as any;
      Object.assign(chatSessionStore, {
        activeSessionId: 'session-1',
        sessions: [
          {
            id: 'session-1',
            title: 'Test Session',
            date: new Date().toISOString(),
            messages: [],
            activePalId: 'pal-1',
            completionSettings: {enable_thinking: true},
          },
        ],
      });
    });

    const {getByText} = render(<ChatHeaderTitle />, {withNavigation: true});
    expect(getByText('未選擇角色')).toBeTruthy();
    expect(getByText('Thinking 開啟')).toBeTruthy();
  });

  it('clears selected character from quick switch menu', () => {
    runInAction(() => {
      characterProfileStore.profiles = [
        {
          id: 'character-1',
          name: '測試角色',
          systemPrompt: '你是一個測試角色',
          thinkingEnabled: true,
          createdAt: 1,
          updatedAt: 1,
        },
      ] as any;
      characterProfileStore.selectedCharacterId = 'character-1';
      chatSessionStore.newChatCompletionSettings = {
        ...chatSessionStore.newChatCompletionSettings,
        enable_thinking: false,
      };
    });

    const {getByTestId, getByText} = render(<ChatHeaderTitle />, {
      withNavigation: true,
    });

    fireEvent.press(getByTestId('chat-header-role-trigger'));
    fireEvent.press(getByText('不使用角色'));

    expect(characterProfileStore.selectedCharacterId).toBeUndefined();
    expect(getByText('未選擇角色')).toBeTruthy();
    expect(getByText('Thinking 開啟')).toBeTruthy();
  });

  it('shows create and manage actions in quick switch menu', () => {
    const {getByTestId, getByText} = render(<ChatHeaderTitle />, {
      withNavigation: true,
    });

    fireEvent.press(getByTestId('chat-header-role-trigger'));

    expect(getByText('新增角色')).toBeTruthy();
    expect(getByText('管理角色卡')).toBeTruthy();
    expect(getByText('使用預設聊天設定')).toBeTruthy();
  });
});
