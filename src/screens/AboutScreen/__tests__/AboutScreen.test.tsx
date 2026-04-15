import React from 'react';
import {Alert, Linking} from 'react-native';
import {render, fireEvent} from '../../../../jest/test-utils';
import {AboutScreen} from '../AboutScreen';
import {appVariant} from '../../../config/appVariant';
import {APP_BRAND_NAME} from '../../../constants/brand';

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn().mockReturnValue('1.0.0'),
  getBuildNumber: jest.fn().mockReturnValue('100'),
}));

jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

const mockOpenURL = jest.fn().mockImplementation(() => Promise.resolve());
jest.spyOn(Linking, 'openURL').mockImplementation(mockOpenURL);
jest.spyOn(Alert, 'alert');

describe('AboutScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders self-build information', () => {
    const {getByText} = render(<AboutScreen />, {withNavigation: true});

    expect(getByText(APP_BRAND_NAME)).toBeTruthy();
    expect(getByText('本機 AI 聊天與角色空間')).toBeTruthy();
    expect(getByText('v1.0.0 (100)')).toBeTruthy();
    expect(getByText('版本資訊')).toBeTruthy();
    expect(getByText('資訊中心')).toBeTruthy();
  });

  it('copies version to clipboard when version button is pressed', () => {
    const {getByText} = render(<AboutScreen />, {withNavigation: true});

    fireEvent.press(getByText('v1.0.0 (100)'));

    expect(Alert.alert).toHaveBeenCalled();
  });

  it('opens GitHub URL when GitHub button is pressed', () => {
    const {getByText} = render(<AboutScreen />, {withNavigation: true});

    fireEvent.press(getByText('查看基礎專案'));

    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://github.com/a-ghorbani/pocketpal-ai',
    );
  });

  it('shows self-build cloud feature notice', () => {
    const {getByText, queryByText} = render(<AboutScreen />, {
      withNavigation: true,
    });

    expect(getByText('自訂版本狀態')).toBeTruthy();
    expect(
      getByText(
        `${appVariant.label} · ${appVariant.unavailableMessage}。`,
      ),
    ).toBeTruthy();
    expect(queryByText('Sharing your thoughts')).toBeNull();
  });
});
