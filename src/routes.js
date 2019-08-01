import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: 'false',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#fe4b6a',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
