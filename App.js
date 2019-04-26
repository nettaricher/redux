import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/Homescreen";
import FullScreen from "./src/screens/Fullscreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  FullScreen: { screen: FullScreen }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 0
      }
    }
  });

const App = createAppContainer(MainNavigator);

export default App;