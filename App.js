import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/Homescreen";
import FullScreen from "./src/screens/Fullscreen";
import Favorites from "./src/screens/Favorites";

const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  FullScreen: { screen: FullScreen },
  Favorites: { screen: Favorites }
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