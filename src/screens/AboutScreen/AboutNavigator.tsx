import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HeaderLeft} from '../../components';
import {useTheme} from '../../hooks';
import {getAboutDetailContent} from '../../constants/brand';
import {L10nContext} from '../../utils';

import {AboutScreen} from './AboutScreen';
import {AboutDetailScreen} from './AboutDetailScreen';

const Stack = createStackNavigator();

export const AboutNavigator: React.FC = () => {
  const theme = useTheme();
  const l10n = React.useContext(L10nContext);
  const detailContent = React.useMemo(() => getAboutDetailContent(l10n), [l10n]);

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
          title: l10n.about.screenTitle,
          headerLeft: () => <HeaderLeft />,
        }}
      />
      <Stack.Screen
        name="AboutDetail"
        component={AboutDetailScreen}
        options={({route}: any) => ({
          title:
            detailContent[route.params?.detailKey]?.title ?? l10n.about.screenTitle,
        })}
      />
    </Stack.Navigator>
  );
};
