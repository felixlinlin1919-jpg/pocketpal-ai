import {Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

import {Icon, Text} from 'react-native-paper';
import {MenuItemProps as PaperMenuItemProps} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

import {useTheme} from '../../../hooks';

import {createStyles} from './styles';

export interface MenuItemProps
  extends Omit<PaperMenuItemProps, 'title' | 'titleStyle'> {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  danger?: boolean;
  style?: StyleProp<ViewStyle>;
  isGroupLabel?: boolean;
  icon?: IconSource;
  selected?: boolean;
  submenu?: React.ReactNode[];
  onSubmenuOpen?: () => void;
  onSubmenuClose?: () => void;
  selectable?: boolean;
  submenuProps?: {
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
  };
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  danger,
  style,
  labelStyle,
  isGroupLabel,
  icon,
  selected,
  leadingIcon,
  trailingIcon,
  submenu,
  onSubmenuOpen,
  onSubmenuClose,
  selectable = false,
  submenuProps,
  ...menuItemProps
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const theme = useTheme();

  const styles = createStyles(theme);

  const renderLeadingIcon = props => {
    return (
      <View
        style={[
          styles.leadingContainer,
          menuItemProps.disabled && styles.itemDisabled,
        ]}>
        {selected && <Icon testID="selected-icon" source="check" size={18} />}
        {leadingIcon &&
          (typeof leadingIcon === 'function' ? (
            leadingIcon({...props, size: 18})
          ) : (
            <Icon source={leadingIcon} size={18} />
          ))}
      </View>
    );
  };

  const renderTrailingIcon = props => (
    <View
      style={[
        styles.trailingContainer,
        menuItemProps.disabled && styles.itemDisabled,
      ]}>
      {trailingIcon ? (
        typeof trailingIcon === 'function' ? (
          trailingIcon({...props, size: 18})
        ) : (
          <Icon source={trailingIcon} size={18} />
        )
      ) : icon ? (
        <Icon source={icon} size={18} />
      ) : null}
    </View>
  );

  const renderSubmenuIcon = () => (
    <View style={styles.trailingContainer}>
      <Icon
        source={isSubmenuOpen ? 'chevron-down' : 'chevron-right'}
        size={18}
        color={
          menuItemProps.disabled
            ? theme.colors.onSurfaceDisabled
            : theme.colors.primary
        }
      />
    </View>
  );

  const getTrailingIcon = () => {
    if (submenu) {
      return renderSubmenuIcon;
    }
    if (trailingIcon || icon) {
      return renderTrailingIcon;
    }
    return undefined;
  };

  const getLeadingIcon = () => {
    if (!selectable && !leadingIcon) {
      return undefined;
    }
    return renderLeadingIcon;
  };

  const handlePress = (e: any) => {
    if (menuItemProps.disabled || isGroupLabel) {
      return;
    }

    if (submenu) {
      const willOpen = !isSubmenuOpen;
      setIsSubmenuOpen(willOpen);
      if (willOpen) {
        onSubmenuOpen?.();
      } else {
        onSubmenuClose?.();
      }
    } else {
      menuItemProps.onPress?.(e);
    }
  };

  const leadingIconRenderer = getLeadingIcon();
  const trailingIconRenderer = getTrailingIcon();
  const iconProps = {
    color: menuItemProps.disabled
      ? theme.colors.onSurfaceDisabled
      : theme.colors.menuText,
    size: 18,
  };

  return (
    <View>
      <Pressable
        onPress={handlePress}
        disabled={isGroupLabel || menuItemProps.disabled}
        accessibilityRole="menuitem"
        accessibilityState={{
          disabled: isGroupLabel || menuItemProps.disabled,
          selected,
          expanded: submenu ? isSubmenuOpen : undefined,
        }}
        style={[
          styles.container,
          isSubmenuOpen && styles.activeParent,
          isGroupLabel && styles.groupLabel,
          style,
        ]}>
        <View
          style={[
            styles.contentContainer,
            !leadingIconRenderer && styles.noLeadingIcon,
            !trailingIconRenderer && styles.noTrailingIcon,
          ]}>
          {leadingIconRenderer?.(iconProps)}
          <Text
            numberOfLines={2}
            style={[
              styles.label,
              {
                color: danger
                  ? theme.colors.menuDangerText
                  : theme.colors.menuText,
              },
              menuItemProps.disabled && styles.labelDisabled,
              labelStyle,
            ]}>
            {label}
          </Text>
          {trailingIconRenderer?.(iconProps)}
        </View>
      </Pressable>
      {submenu && (
        <View
          style={[
            styles.submenuInline,
            submenuProps?.style,
            submenuProps?.contentStyle,
          ]}>
          {isSubmenuOpen && submenu}
        </View>
      )}
    </View>
  );
};
