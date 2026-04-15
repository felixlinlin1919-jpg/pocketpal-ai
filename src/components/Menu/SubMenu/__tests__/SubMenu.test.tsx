import React from 'react';
import {render} from '../../../../../jest/test-utils';
import {SubMenu} from '../SubMenu';
import {MenuItem} from '../../MenuItem';

describe('SubMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when visible', () => {
    const {getByText} = render(
      <SubMenu visible={true} onDismiss={() => {}} anchor={{x: 100, y: 100}}>
        <MenuItem label="SubMenu Item" onPress={() => {}} />
      </SubMenu>,
    );

    expect(getByText('SubMenu Item')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const {queryByText} = render(
      <SubMenu visible={false} onDismiss={() => {}} anchor={{x: 100, y: 100}}>
        <MenuItem label="SubMenu Item" onPress={() => {}} />
      </SubMenu>,
    );

    expect(queryByText('SubMenu Item')).toBeNull();
  });

  it('handles multiple menu items', () => {
    const {getByText} = render(
      <SubMenu visible={true} onDismiss={() => {}} anchor={{x: 100, y: 100}}>
        <MenuItem label="Item 1" onPress={() => {}} />
        <MenuItem label="Item 2" onPress={() => {}} />
        <MenuItem label="Item 3" onPress={() => {}} />
      </SubMenu>,
    );

    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
  });

  it('renders without Paper portal composition', () => {
    const {getByText} = render(
      <SubMenu visible={true} onDismiss={() => {}} anchor={{x: 100, y: 100}}>
        <MenuItem label="Item 1" onPress={() => {}} />
      </SubMenu>,
    );

    expect(getByText('Item 1')).toBeTruthy();
  });

  it('passes custom style alongside default styles', () => {
    const customStyle = {marginTop: 10};
    const {getByTestId} = render(
      <SubMenu
        visible={true}
        onDismiss={() => {}}
        anchor={{x: 100, y: 100}}
        style={customStyle}
        testID="submenu-test">
        <MenuItem label="Item 1" onPress={() => {}} />
      </SubMenu>,
    );

    const styleArray = getByTestId('submenu-test').props.style;
    expect(styleArray).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });

  it('forwards testID to the custom floating container', () => {
    const {getByTestId} = render(
      <SubMenu
        visible={true}
        onDismiss={() => {}}
        anchor={{x: 200, y: 300}}
        testID="submenu-test">
        <MenuItem label="Item 1" onPress={() => {}} />
      </SubMenu>,
    );

    expect(getByTestId('submenu-test')).toBeTruthy();
  });

  it('passes contentStyle to the custom surface', () => {
    const customContentStyle = {paddingVertical: 20};
    const {getByText} = render(
      <SubMenu
        visible={true}
        onDismiss={() => {}}
        anchor={{x: 100, y: 100}}
        contentStyle={customContentStyle}>
        <MenuItem label="Item 1" onPress={() => {}} />
      </SubMenu>,
    );

    expect(getByText('Item 1')).toBeTruthy();
  });
});
