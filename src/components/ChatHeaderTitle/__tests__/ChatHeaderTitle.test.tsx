import React from 'react';
import {fireEvent, render} from '../../../../jest/test-utils';
import {ChatHeaderTitle} from '../ChatHeaderTitle';
import {
  characterProfileStore,
  chatSessionStore,
  modelStore,
  palStore,
  uiStore,
} from '../../../store';
import {runInAction} from 'mobx';
import {basicModel, downloadedModel} from '../../../../jest/fixtures/models';
import {l10n} from '../../../locales';

describe('ChatHeaderTitle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    runInAction(() => {
      characterProfileStore.profiles = [];
      characterProfileStore.selectedCharacterId = undefined;
      palStore.pals = [] as any;
      uiStore.setLanguage('en');
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
    expect(getByText(l10n.en.components.chatHeaderTitle.defaultSessionTitle)).toBeTruthy();
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
    expect(queryByText(l10n.en.components.chatHeaderTitle.modelNotLoaded)).toBeFalsy();
  });

  it('keeps header stable when active model changes', () => {
    const mockSession = {
      id: 'session-stable',
      title: 'Test Session',
      date: new Date().toISOString(),
      messages: [],
    };
    // Initial model
    runInAction(() => {
      modelStore.models = [basicModel];
      modelStore.setActiveModel(basicModel.id);
      Object.assign(chatSessionStore, {
        activeSessionId: mockSession.id,
        sessions: [mockSession],
      });
    });

    const {getByText, queryByText, rerender} = render(<ChatHeaderTitle />, {
      withNavigation: true,
    });
    expect(queryByText(l10n.en.components.chatHeaderTitle.modelNotLoaded)).toBeFalsy();

    // Change model
    runInAction(() => {
      modelStore.models = [downloadedModel];
      modelStore.setActiveModel(downloadedModel.id);
    });

    rerender(<ChatHeaderTitle />);
    expect(getByText('Test Session')).toBeTruthy();
    expect(queryByText(l10n.en.components.chatHeaderTitle.modelNotLoaded)).toBeFalsy();
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
    expect(getByText(l10n.en.components.chatHeaderTitle.thinkingOn)).toBeTruthy();
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
    expect(getByText(l10n.en.components.chatHeaderTitle.noCharacterSelected)).toBeTruthy();
    expect(getByText(l10n.en.components.chatHeaderTitle.thinkingOn)).toBeTruthy();
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
    fireEvent.press(getByText(l10n.en.components.chatHeaderTitle.noRole));

    expect(characterProfileStore.selectedCharacterId).toBeUndefined();
    expect(getByText(l10n.en.components.chatHeaderTitle.noCharacterSelected)).toBeTruthy();
    expect(getByText(l10n.en.components.chatHeaderTitle.thinkingOn)).toBeTruthy();
  });

  it('shows create and manage actions in quick switch menu', () => {
    const {getByTestId, getByText} = render(<ChatHeaderTitle />, {
      withNavigation: true,
    });

    fireEvent.press(getByTestId('chat-header-role-trigger'));

    expect(getByText(l10n.en.components.chatHeaderTitle.addCharacter)).toBeTruthy();
    expect(getByText(l10n.en.components.chatHeaderTitle.manageCharacters)).toBeTruthy();
    expect(getByText(l10n.en.components.chatHeaderTitle.defaultChatSettings)).toBeTruthy();
  });
});
