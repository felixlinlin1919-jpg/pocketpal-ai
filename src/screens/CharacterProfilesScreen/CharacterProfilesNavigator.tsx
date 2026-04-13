import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderLeft} from '../../components';
import {useTheme} from '../../hooks';

import {CharacterProfilesScreen} from './CharacterProfilesScreen';
import {CharacterProfileEditorScreen} from './CharacterProfileEditorScreen';

const Stack = createStackNavigator();

export const CharacterProfilesNavigator: React.FC = () => {
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
        name="CharacterProfilesList"
        component={CharacterProfilesScreen}
        options={{
          title: '角色卡管理',
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="CharacterProfileEditor"
        component={CharacterProfileEditorScreen}
        options={({route}: any) => ({
          title: route.params?.profileId ? '編輯角色' : '新增角色',
        })}
      />
    </Stack.Navigator>
  );
};
