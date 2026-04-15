import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderLeft} from '../../components';
import {useTheme} from '../../hooks';
import {ABOUT_DETAIL_CONTENT} from '../../constants/brand';

import {AboutScreen} from './AboutScreen';
import {AboutDetailScreen} from './AboutDetailScreen';

const Stack = createStackNavigator();

export const AboutNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: theme.colors.onBackground,
        headerTitleStyle: theme.fonts.titleSmall,
      }}>
      <Stack.Screen
        name="AboutHome"
        component={AboutScreen}
        options={{
          title: '關於 KyoKyoNook',
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="AboutDetail"
        component={AboutDetailScreen}
        options={({route}: any) => ({
          title:
            ABOUT_DETAIL_CONTENT[route.params?.detailKey]?.title ??
            '關於 KyoKyoNook',
        })}
      />
    </Stack.Navigator>
  );
};
