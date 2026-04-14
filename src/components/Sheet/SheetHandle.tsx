import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BottomSheetHandleProps} from '@gorhom/bottom-sheet';
import {useTheme} from '../../hooks';
import {getAppDesign} from '../../utils/appDesign';

export const SheetHandle: React.FC<BottomSheetHandleProps> = () => {
  const theme = useTheme();
  const design = getAppDesign(theme);

  return (
    <View style={styles.container} testID="sheet-handle">
      <View
        style={[
          styles.indicator,
          {
            backgroundColor: design.dividerColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  indicator: {
    width: 42,
    height: 5,
    borderRadius: 999,
  },
});
