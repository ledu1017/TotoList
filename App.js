import {NavigationContainer} from "@react-navigation/native"
import StackNavigator from './Navigator/StackNavigator'
import TodoScreen from './Screen/TodoScreen'
import MainScreen from './Screen/MainScreen'

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}