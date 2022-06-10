/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, TouchableOpacity, View, ImageBackground } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Group>
        <Stack.Screen name="Login" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Group> */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const CustomBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      // padding: 20,
      marginLeft: 12,
      marginRight: 12,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View style={{
      alignContent: 'center',
      justifyContent: 'center',
      width: 180,
      height: 50,
      borderRadius: 8,
      backgroundColor: 'black'
    }}>
      {children} 
      {/* Renderizar um TEXT talvez */}
    </View>
  </TouchableOpacity>
)

const CustomTabBar = props => (
  <BottomTabBar {...props} />
)
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      tabBar={props => <CustomTabBar {...props}/> }
      initialRouteName="Login"
      screenOptions={{ // Opções globais
        headerTitleAlign: 'center',
        headerTitleStyle: { color: 'red'},
        headerTitle: "Diva", // SUBSTITUI OS Title das Screens
        headerStyle: {backgroundColor: 'orange'},
        // headerTransparent: true,
        tabBarIconStyle: { display: "none" },
        tabBarStyle: { // Não precisa do styleSheet
          bottom: 25,
          height: 70,
          alignItems: 'center',
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: 'red'
          // backgroundColor: Colors[colorScheme].background
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16
        },
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation }: RootTabScreenProps<'Login'>) => ({
          title: 'LOGIN',
          tabBarButton: props => <CustomBarButton {...props} />
        })}
      />
      <BottomTab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'REGISTRAR',
          tabBarButton: props => <CustomBarButton {...props} />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}