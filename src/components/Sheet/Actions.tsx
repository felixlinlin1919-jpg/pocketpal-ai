import React, {useMemo} from 'react';
import {useTheme} from '../../hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleProp, View, ViewStyle} from 'react-native';
import {getAppDesign} from '../../utils/appDesign';

interface ActionsProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Actions = ({children, style}: ActionsProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const containerStyle: StyleProp<ViewStyle> = useMemo(() => {
    const design = getAppDesign(theme);
    return {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: design.rowSurfaceMuted,
      paddingHorizontal: 16,
      paddingTop: 14,
      paddingBottom: 12 + insets.bottom,
      gap: 10,
      borderTopWidth: 1,
      borderTopColor: design.dividerColor,
    };
  }, [theme, insets]);

  return <View style={[containerStyle, style]}>{children}</View>;
};
