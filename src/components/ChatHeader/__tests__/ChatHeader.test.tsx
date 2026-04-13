import React from 'react';
import {render} from '../../../../jest/test-utils';
import {ChatHeader} from '../ChatHeader';
import {characterProfileStore, chatSessionStore} from '../../../store';

// Mock the child components
jest.mock('../../HeaderLeft', () => ({
  HeaderLeft: () => {
    const {View} = require('react-native');
    return <View testID="header-left" />;
  },
}));

jest.mock('../../HeaderRight', () => ({
  HeaderRight: () => {
    const {View} = require('react-native');
    return <View testID="header-right" />;
  },
}));

jest.mock('../../ChatHeaderTitle', () => ({
  ChatHeaderTitle: () => {
    const {View} = require('react-native');
    return <View testID="chat-header-title" />;
  },
}));

describe('ChatHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(chatSessionStore, 'shouldShowHeaderDivider', {
      get: () => false,
      configurable: true,
    });
    (characterProfileStore as any).selectedCharacterId = undefined;
    (characterProfileStore as any).profiles = [];
  });

  it('renders all child components', () => {
    const {getByTestId} = render(<ChatHeader />);

    expect(getByTestId('header-view')).toBeTruthy();
    expect(getByTestId('header-left')).toBeTruthy();
    expect(getByTestId('header-right')).toBeTruthy();
    expect(getByTestId('chat-header-title')).toBeTruthy();
    expect(getByTestId('chat-header-avatar-fallback')).toBeTruthy();
  });

  it('applies correct styles when header divider should not be shown', () => {
    Object.defineProperty(chatSessionStore, 'shouldShowHeaderDivider', {
      get: () => false,
      configurable: true,
    });
    const {getByTestId} = render(<ChatHeader />, {withSafeArea: true});

    const headerView = getByTestId('header-view');
    expect(headerView.props.style[1]).toMatchObject({
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: expect.any(String),
    });
  });

  it('applies correct styles when header divider should be shown', () => {
    Object.defineProperty(chatSessionStore, 'shouldShowHeaderDivider', {
      get: () => true,
      configurable: true,
    });
    const {getByTestId} = render(<ChatHeader />, {withSafeArea: true});

    const headerView = getByTestId('header-view');
    expect(headerView.props.style[1]).toMatchObject({
      backgroundColor: expect.any(String),
    });
  });

  it('renders character avatar when selected character avatar exists', () => {
    (characterProfileStore as any).profiles = [
      {
        id: 'character-1',
        name: '測試角色',
        avatar: 'https://example.com/avatar.png',
      },
    ];
    (characterProfileStore as any).selectedCharacterId = 'character-1';

    const {getByTestId} = render(<ChatHeader />);
    expect(getByTestId('chat-header-avatar')).toBeTruthy();
  });
});
