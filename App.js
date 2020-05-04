import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import AppScreen from './src/screens/AppScreen';
import TodoScreen from './src/screens/TodoScreen'

const navigator = createStackNavigator(
  {
    Home: AppScreen,
    Todo: TodoScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Apps'
    }
  }
);

export default createAppContainer(navigator);
