import { createStackNavigator } from '@react-navigation/stack';
import {View, Text} from 'react-native'
import LogInScreen from '../Screen/LogInScreen'
import MainScreen from '../Screen/MainScreen'
import SignUpScreen from '../Screen/SignUpScreen'
import DrawerNavigator from './DrawerNavigator'
import GptScreen from '../Screen/GptScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions = {{
        headerShown : false
      }}>
      <Stack.Screen name = "LogIn" component = {LogInScreen} />
      <Stack.Screen name = "Drawer" component={DrawerNavigator} />
      <Stack.Screen name = "SignUp" component={SignUpScreen} />
      <Stack.Screen name = "Main" component = {MainScreen}/>
      <Stack.Screen name = "Gpt" component = {GptScreen}/>
    </Stack.Navigator>
  );
}
export default StackNavigator