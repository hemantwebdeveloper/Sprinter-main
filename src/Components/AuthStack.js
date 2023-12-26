import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpOtp from '../screens/Authscreens/SignUpOtp';
import Login from '../screens/Authscreens/Login';
import Register from '../screens/Authscreens/Register';
import Realid from '../screens/Authscreens/AppScreens/Realid';
import Welcome from '../screens/Authscreens/Welcome';
import Invite from '../screens/Authscreens/Invite';
import ChooseLanguage from '../screens/Authscreens/ChooseLanguage';
import Forgot from '../screens/Authscreens/Forgot';
import OTPScreen from '../screens/Authscreens/Otp';
import OnboardingScreen from '../screens/Authscreens/AppScreens/OnBoarding';
import ChangePassword from '../screens/Authscreens/ChangePassword'


const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="ChooseLanguage"
        component={ChooseLanguage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Invite"
        component={Invite}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={Forgot}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Otp"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Realid"
        component={Realid}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="SignUpOtp"
        component={SignUpOtp}
        options={{
          headerShown: false,
        }}
      />
        
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
