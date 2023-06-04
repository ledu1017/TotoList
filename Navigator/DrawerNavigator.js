import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../Screen/MainScreen'
import TodoScreen from '../Screen/TodoScreen'
import GptScreen from '../Screen/GptScreen'
import LoginScreen from '../Screen/LogInScreen'
import CustomDrawer from '../components/CustumDrawer'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="LogIn"
      drawerPosition="right"
      drawerStyle={{
        backgroundColor: 'skyblue',
        width: 200,
      }}
      drawerContent = {(props) => <CustomDrawer {...props}/>}
    >
      <Drawer.Screen name="Main" 
        component={MainScreen}
        options={({ route }) => ({
          initialParams: route.params, // 사용자 정보 전달
        })}
      />
      <Drawer.Screen name="Todo" component={TodoScreen}/>
      <Drawer.Screen name="GPT" component={GptScreen}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
