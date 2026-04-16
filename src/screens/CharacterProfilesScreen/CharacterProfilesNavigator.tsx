import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';

import {HeaderLeft} from '../../components';
import {useTheme} from '../../hooks';
import {uiStore} from '../../store';

import {CharacterProfilesScreen} from './CharacterProfilesScreen';
import {CharacterProfileEditorScreen} from './CharacterProfileEditorScreen';

const Stack = createStackNavigator();

export const CharacterProfilesNavigator: React.FC = observer(() => {
  const theme = useTheme();
  const l10n = uiStore.l10n;

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
          title: l10n.characterLibrary.title,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="CharacterProfileEditor"
        component={CharacterProfileEditorScreen}
        options={({route}: any) => ({
          title: route.params?.profileId
            ? l10n.characterEditor.editCharacter
            : l10n.characterEditor.addCharacter,
        })}
      />
    </Stack.Navigator>
  );
});
