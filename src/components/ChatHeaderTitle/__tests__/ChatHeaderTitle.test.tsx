import React from 'react';
import {render} from '../../../../jest/test-utils';
import {ChatHeaderTitle} from '../ChatHeaderTitle';
import {characterProfileStore, chatSessionStore, modelStore} from '../../../store';
import {runInAction} from 'mobx';
import {basicModel, downloadedModel} from '../../../../jest/fixtures/models';

describe('ChatHeaderTitle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    runInAction(() => {
      characterProfileStore.profiles = [];
      characterProfileStore.selectedCharacterId = undefined;
    });
  });

  it('renders "Chat" when no active session exists', () => {
    runInAction(() => {
      chatSessionStore.resetActiveSession();
      chatSessionStore.sessions = [];
    });
    const {getByText} = render(<ChatHeaderTitle />);
    expect(getByText('Chat')).toBeTruthy();
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

    const {getByText} = render(<ChatHeaderTitle />);
    expect(getByText('Test Session')).toBeTruthy();
  });

  it('renders model name when active model exists', () => {
    runInAction(() => {
      modelStore.models = [basicModel];
      modelStore.setActiveModel(basicModel.id);
    });

    const {getByText} = render(<ChatHeaderTitle />);
    expect(getByText('basic model')).toBeTruthy();
  });

  it('updates when active model changes', () => {
    // Initial model
    runInAction(() => {
      modelStore.models = [basicModel];
      modelStore.setActiveModel(basicModel.id);
    });

    const {getByText, rerender} = render(<ChatHeaderTitle />);
    expect(getByText('basic model')).toBeTruthy();

    // Change model
    runInAction(() => {
      modelStore.models = [downloadedModel];
      modelStore.setActiveModel(downloadedModel.id);
    });

    rerender(<ChatHeaderTitle />);
    expect(getByText('downloaded model')).toBeTruthy();
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

    const {getByText} = render(<ChatHeaderTitle />);
    expect(getByText('目前角色：測試角色')).toBeTruthy();
  });
});
