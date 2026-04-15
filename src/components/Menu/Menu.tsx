import React from 'react';

import {
  Modal,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import {Divider} from 'react-native-paper';

import {useTheme} from '../../hooks';

import {createStyles} from './styles';
import {MenuItem, MenuItemProps} from './MenuItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type MenuAnchor = React.ReactNode | {x: number; y: number};

const Separator = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return <Divider style={styles.separator} />;
};

const GroupSeparator = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <View
      style={[
        styles.groupSeparator,
        {backgroundColor: theme.colors.menuGroupSeparator},
      ]}
    />
  );
};

export interface MenuProps {
  children?: React.ReactNode;
  selectable?: boolean;
  visible: boolean;
  onDismiss?: () => void;
  anchor?: MenuAnchor;
  anchorPosition?: 'top' | 'bottom';
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export const Menu: React.FC<MenuProps> & {
  Item: typeof MenuItem;
  GroupSeparator: typeof GroupSeparator;
  Separator: typeof Separator;
} = ({
  children,
  selectable = false,
  visible,
  onDismiss,
  anchor,
  anchorPosition = 'bottom',
  style,
  contentStyle,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const anchorRef = React.useRef<View>(null);
  const [anchorRect, setAnchorRect] = React.useState({
    x: 16,
    y: insets.top + 16,
    width: 0,
    height: 0,
  });
  const [menuSize, setMenuSize] = React.useState({width: 220, height: 0});
  const [anchorMeasured, setAnchorMeasured] = React.useState(false);

  const childArray = React.Children.toArray(children);
  const effectiveVisible = visible && childArray.length > 0;
  const coordinateAnchor =
    anchor &&
    typeof anchor === 'object' &&
    'x' in anchor &&
    'y' in anchor
      ? anchor
      : undefined;

  React.useEffect(() => {
    if (!effectiveVisible) {
      setAnchorMeasured(false);
      return;
    }

    if (coordinateAnchor) {
      setAnchorRect({
        x: coordinateAnchor.x,
        y: coordinateAnchor.y,
        width: 0,
        height: 0,
      });
      setAnchorMeasured(true);
      return;
    }

    if (!anchor) {
      setAnchorMeasured(true);
      return;
    }

    setAnchorMeasured(false);
    requestAnimationFrame(() => {
      anchorRef.current?.measureInWindow((x, y, width, height) => {
        setAnchorRect({x, y, width, height});
        setAnchorMeasured(true);
      });
    });
  }, [coordinateAnchor, effectiveVisible]);

  const menuWidth = Math.min(menuSize.width || 220, screenWidth - 24);
  const left = Math.max(
    12,
    Math.min(
      coordinateAnchor ? anchorRect.x : anchorRect.x + anchorRect.width - menuWidth,
      screenWidth - menuWidth - 12,
    ),
  );
  const preferredTop =
    anchorPosition === 'top'
      ? anchorRect.y - menuSize.height - 8
      : anchorRect.y + anchorRect.height + 8;
  const top = Math.max(
    insets.top + 8,
    Math.min(preferredTop, screenHeight - menuSize.height - insets.bottom - 12),
  );

  const renderedMenu = (
    <Modal
      visible={effectiveVisible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onDismiss}>
      <View style={styles.modalRoot} pointerEvents="box-none">
        <Pressable
          style={styles.dismissLayer}
          onPress={onDismiss}
          accessibilityLabel="關閉選單"
        />
        <View
          style={[
            styles.menu,
            {
              left,
              top,
              maxWidth: screenWidth - 24,
              opacity: anchorMeasured ? 1 : 0,
            },
            style,
          ]}
          onLayout={event => {
            const {width, height} = event.nativeEvent.layout;
            setMenuSize({width, height});
          }}>
          <View style={[styles.content, contentStyle]}>
            {React.Children.map(children, child => {
              if (!React.isValidElement<MenuItemProps>(child)) {
                return child;
              }

              if (child.type === MenuItem) {
                return React.cloneElement(child, {
                  selectable,
                });
              }

              return child;
            })}
          </View>
        </View>
      </View>
    </Modal>
  );

  if (coordinateAnchor || !anchor) {
    return renderedMenu;
  }

  const anchorNode = anchor as React.ReactNode;

  return (
    <>
      <View ref={anchorRef} collapsable={false}>
        {anchorNode}
      </View>
      {renderedMenu}
    </>
  );
};

Menu.Item = MenuItem;
Menu.GroupSeparator = GroupSeparator;
Menu.Separator = Separator;
