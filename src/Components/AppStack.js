import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Authscreens/AppScreens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DrawerContent from './DrawerContent';
import Profile from '../screens/Authscreens/AppScreens/Profile';
import Setting from '../screens/Authscreens/AppScreens/setting';
import Support from '../screens/Authscreens/AppScreens/Support';
import PrivacySettings from '../screens/Authscreens/AppScreens/PrivacySettings';
import EditProfile from '../screens/Authscreens/AppScreens/EditProfile';
import DailyUpdates from '../screens/Authscreens/AppScreens/DailyUpdates';
import ClientTestimonial from '../screens/Authscreens/AppScreens/ClientTestimonial';
import FunandEntertainment from '../screens/Authscreens/AppScreens/FunandEntertainment';
import Rules from '../screens/Authscreens/AppScreens/Rules'
import HomeRealid from '../screens/Authscreens/AppScreens/HomeRealId';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'BottomTab'} >
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeRealid"
        component={HomeRealid}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="setting"
        component={Setting}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="support"
        component={Support}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PrivacySettings"
        component={PrivacySettings}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Rules"
        component={Rules}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
        name="DailyUpdates"
        component={DailyUpdates}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const BottomTabNav = ({ }) => {
  return (
    <Tab.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // elevation: 5,
          backgroundColor: '#FFBA00',
          // borderTopWidth: 1,
          borderTopColor: '#f9f9f9',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="FunandEntertainment"
        component={FunandEntertainment}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? '#fff' : '#FFBA00',
                  padding: 6,
                  borderRadius: 50,
                }}>
                <Entypo
                  name="game-controller"
                  size={25}
                  color={focused ? '#000' : '#fff'}></Entypo>
                {/* {focused ? (
                  <Text
                    style={{
                      color: '#72A497',
                      fontSize: 12,
                    }}>
                    Fun
                  </Text>
                ) : null} */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? '#fff' : '#FFBA00',
                  padding: 6,
                  borderRadius: 50,
                }}>
                <MaterialIcons
                  name="support-agent"
                  size={25}
                  color={focused ? '#000' : '#fff'}></MaterialIcons>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? '#fff' : '#FFBA00',
                  padding: 6,
                  borderRadius: 50,
                  bottom: 20,
                  borderColor: '#FFBA00',
                  borderWidth: 2,
                }}>
                <MaterialIcons
                  name="home"
                  size={25}
                  color={focused ? '#000' : '#fff'}></MaterialIcons>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Testimonial"
        component={ClientTestimonial}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? '#fff' : '#FFBA00',
                  padding: 6,
                  borderRadius: 50,
                }}>
                <MaterialIcons
                  name="rate-review"
                  size={25}
                  color={focused ? '#000' : '#fff'}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: focused ? '#fff' : '#FFBA00',
                  padding: 6,
                  borderRadius: 50,
                }}>
                <FontAwesome
                  name="user"
                  size={25}
                  color={focused ? '#000' : '#fff'}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});
