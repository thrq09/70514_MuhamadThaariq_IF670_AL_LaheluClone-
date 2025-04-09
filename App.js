import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import home from './home';
import topic from './topic'
import Notifikasi from './Notifikasi'
import profile from './profile';
import Meet6_latih1 from './Meet6_latih1';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NavigasiBottom = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="topic" component={topic} />
      <Tab.Screen name="Notifikasi" component={Notifikasi} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  );
};

const NavigasiDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={NavigasiBottom} />
      <Drawer.Screen name="Peraturan aplikasi" component={Meet6_latih1} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <NavigasiDrawer />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
