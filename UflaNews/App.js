import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'

import Profile from './src/Views/Profile';
import Publisher from './src/Views/Publisher';

import Registrar from './src/Views/Registrar'
import VisualizarBoletim from './src/Views/VisualizarBoletim';
import Feed from './src/Views/Feed';

// export default App;


const AppNavigator = createStackNavigator(
  { 
    Login: Login,
    Feed: Feed,
    Registrar: Registrar,
    VisualizarBoletim: VisualizarBoletim,
    Profile: Profile,
    Publisher: Publisher
  },
  {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
  }

);

export default createAppContainer(AppNavigator);