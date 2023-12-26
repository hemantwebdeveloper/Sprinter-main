import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState, useContext } from 'react';
  import { AuthContext } from '../../Components/AuthProvider';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import AuthBaseScreen from '../../Components/AuthBaseScreen';
  import Input from '../../Components/Input';
  import axios from 'react-native-axios';
  import Button from '../../Components/Button';
  import Loader from '../../Components/Loader';
  const ChangePassword = ({ navigation, route }) => {
    return (
      <AuthBaseScreen
        title="Change Password"
        navigation={navigation}
        renderChild={Content({ navigation, route })}
        paddingHorizontal={false}
      />
    );
  };
  const Content = ({ navigation, route }) => {
    const [selected, setSelected] = useState(false);
    const { userToken, setUserToken } = useContext(AuthContext);
    const [confirmpassword, SetConfirmpassword] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleUpdatePassword = async () => {
  
      setLoading(true);
      let Data = JSON.stringify({
        token:`${route?.params?.response?.data?.token}`,
        password: `${password}`,
        confirmpassword: `${confirmpassword}`,
      });
      try {
        const response = await axios.put(
          'https://hotel-project.onrender.com/S-Printer-App/User/Auth/updatePassword',
          Data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        navigation.navigate('Login')
        // console.log(response)
        // setUserToken(response?.data);
        //   await AsyncStorage.setItem('userData', JSON.stringify(response?.data));
          setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error?.response);
        alert(error?.response?.data?.error);
      }
    };
  
    return (
      <>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={{
              width: 200,
              height: 150,
              alignSelf: 'center',
            }}
            source={require('../../images/img.png')}
          />
          <Input
            placeholder="Enter Password"
            name="password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Input
            placeholder="Enter ConfirmPassword"
            name="confirmpasswprd"
            value={confirmpassword}
            onChangeText={text => SetConfirmpassword(text)}
          />
  
  
          <View
            style={{
              flexDirection: 'row',
              width: '98%',
              alignSelf: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}>
   
  
          </View>
  
          {loading ? (
            <Loader />
          ) : (
            <Button title="Change Password" onPress={() => handleUpdatePassword()} />
          )}
  
          {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                alignSelf: 'center',
                marginVertical: 20,
              }}>
              <View style={[styles.dash]} />
              <Text
                style={[
                  styles.wrappertext,
                  {backgroundColor: '#aaaaaa90', borderRadius: 20, color: '#fff'},
                ]}>
                OR
              </Text>
              <View style={styles.dash} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '98%',
                alignSelf: 'center',
              }}>
              <View style={styles.wrapper}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('../../images/facebook.png')}
                />
                <Text style={styles.wrappertext}>Faceook</Text>
              </View>
              <View style={styles.wrapper}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={require('../../images/google.png')}
                />
                <Text style={styles.wrappertext}>Google</Text>
              </View>
            </View> */}
          <View
            style={{
              width: '98%',
              alignSelf: 'center',
              borderTopWidth: 1,
              borderColor: '#ffffff90',
              marginVertical: 10,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '400',
              color: '#fff',
            }}>
            Not a member?
          </Text>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: '400',
              color: '#fff',
            }}>
            Register
          </Text>
        </View>
      </>
    );
  };
  export default ChangePassword;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      // marginTop: 100,
    },
    wrapper: {
      borderWidth: 1,
      width: '45%',
      borderColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 30,
      elevation: 6,
      backgroundColor: '#fff',
    },
    wrappertext: {
      fontSize: 16,
      color: '#000',
      fontWeight: '400',
      padding: 5,
    },
    dash: {
      borderTopWidth: 1,
      width: 25,
      borderStyle: 'dashed',
      alignSelf: 'center',
      borderColor: '#fff',
    },
    input: {
      alignSelf: 'center',
      width: '98%',
      borderBottomWidth: 1,
      borderColor: '#fff',
      marginVertical: 10,
      color: '#fff',
    },
    text: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '400',
      // padding: 5,
    },
  });
  