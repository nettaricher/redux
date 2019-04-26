import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/screens/Homescreen";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
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