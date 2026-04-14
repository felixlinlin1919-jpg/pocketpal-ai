import React from 'react';
import {Alert, Linking} from 'react-native';
import {render, fireEvent} from '../../../../jest/test-utils';
import {AboutScreen} from '../AboutScreen';
import {appVariant} from '../../../config/appVariant';

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
    const {getByText} = render(<AboutScreen />);

    expect(getByText('應用資訊')).toBeTruthy();
    expect(getByText('v1.0.0 (100)')).toBeTruthy();
    expect(
      getByText(`${appVariant.label} · ${appVariant.shortLabel}`),
    ).toBeTruthy();
    expect(getByText('版本資訊')).toBeTruthy();
    expect(getByText('功能狀態')).toBeTruthy();
  });

  it('copies version to clipboard when version button is pressed', () => {
    const {getByText} = render(<AboutScreen />);

    fireEvent.press(getByText('v1.0.0 (100)'));

    expect(Alert.alert).toHaveBeenCalled();
  });

  it('opens GitHub URL when GitHub button is pressed', () => {
    const {getByText} = render(<AboutScreen />);

    fireEvent.press(getByText('查看原始碼'));

    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://github.com/a-ghorbani/pocketpal-ai',
    );
  });

  it('shows self-build cloud feature notice', () => {
    const {getByText, queryByText} = render(<AboutScreen />);

    expect(getByText('未啟用的功能')).toBeTruthy();
    expect(
      getByText(
        `${appVariant.unavailableMessage}，${appVariant.officialOnlyMessage}。`,
      ),
    ).toBeTruthy();
    expect(queryByText('Sharing your thoughts')).toBeNull();
  });
});
