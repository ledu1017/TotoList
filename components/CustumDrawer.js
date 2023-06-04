import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'

const CustomerDrawer = (props) =>(
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}/>
    <DrawerItem label = "LogOut"
      onPress={() => {
      props.navigation.navigate('LogIn');
    }}/>
  </DrawerContentScrollView>
)

export default CustomerDrawer