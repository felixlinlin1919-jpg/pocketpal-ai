import React from 'react';

import {Modal, Pressable, StyleProp, View, ViewStyle} from 'react-native';

import {useTheme} from '../../../hooks';

import {createStyles} from './styles';

interface SubMenuProps {
  visible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  anchor?: {x: number; y: number};
  testID?: string;
}

export const SubMenu: React.FC<SubMenuProps> = ({
  visible,
  onDismiss,
  children,
  style,
  contentStyle,
  anchor = {x: 16, y: 16},
  testID,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal
      visible={!!visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onDismiss}>
      <View style={styles.modalRoot} pointerEvents="box-none">
        <Pressable style={styles.dismissLayer} onPress={onDismiss} />
        <View
          testID={testID}
          style={[styles.menu, {left: anchor.x, top: anchor.y}, style]}>
          <View style={[styles.content, contentStyle]}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

/**
 * SubMenu component for nested menu items.
 *
 * Usage example:
 * ```tsx
 * <Menu.Item
 *   label="Advanced"
 *   submenu={[
 *     <Menu.Item
 *       key="1"
 *       label="Option 1"
 *     />,
 *     // Nested submenu
 *     <Menu.Item
 *       label="More Options"
 *       submenu={[
 *         <Menu.Item key="2.1" label="Sub Option 1" />,
 *         <Menu.Item key="2.2" label="Sub Option 2" />,
 *       ]}
 *     />,
 *     <Menu.Item
 *       key="3"
 *       label="Option 3"
 *     />,
 *   ]}
 * />
 * ```
 *
 * Features:
 * - Supports infinite nesting of submenus
 * - Parent menu dims when submenu is open
 * - Maintains consistent styling with parent menu
 */
