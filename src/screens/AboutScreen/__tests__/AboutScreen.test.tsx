import React from 'react';
import {Alert} from 'react-native';
import {render, fireEvent} from '../../../../jest/test-utils';
import {AboutScreen} from '../AboutScreen';
import {APP_BRAND_NAME} from '../../../constants/brand';
import {l10n} from '../../../locales';

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn().mockReturnValue('1.0.0'),
  getBuildNumber: jest.fn().mockReturnValue('100'),
}));

jest.mock('@react-native-clipboard/clipboard', () => ({
  setString: jest.fn(),
}));

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
    expect(getByText(l10n.en.about.sections.version)).toBeTruthy();
    expect(getByText(l10n.en.about.sections.infoCenter)).toBeTruthy();
  });

  it('copies version to clipboard when version button is pressed', () => {
    const {getByText} = render(<AboutScreen />, {withNavigation: true});

    fireEvent.press(getByText('v1.0.0 (100)'));

    expect(Alert.alert).toHaveBeenCalled();
  });
});
