import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from './AuthProvider';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Splash from '../screens/Authscreens/Splash';

const Routes = () => {
  const {userToken} = useContext(AuthContext);
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);

  console.log(userToken);
  if (splash) return <Splash />;
  else
    return (
      <>
        <NavigationContainer>
          {/* <AppStack /> */}
          {userToken ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </>
    );
};
export default Routes;

const styles = StyleSheet.create({});
