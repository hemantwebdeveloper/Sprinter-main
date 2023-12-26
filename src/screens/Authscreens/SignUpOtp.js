import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useContext} from 'react';
  import AuthBaseScreen from '../../Components/AuthBaseScreen';
  import Input from '../../Components/Input';
  import Button from '../../Components/Button';
  import {AuthContext} from '../../Components/AuthProvider';
  import Loader from '../../Components/Loader';
  import axios from 'react-native-axios';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  const SignUpOtp = ({navigation,route}) => {
    return (
      <AuthBaseScreen
        title="Otp Verify"
        navigation={navigation}
        renderChild={Content({navigation,route})}
        paddingHorizontal={false}
      />
    );
  };
  const Content = ({navigation,route}) => {
    const [selected, setSelected] = useState(false);
    const {userToken, setUserToken} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [Otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleRegisterOtp = async () => {
      setLoading(true);
      let Data = {
        email: `${route?.params?.email}`,
        OTP: `${Otp}`,
      };
      try {
        const response = await axios.post(
          'https://hotel-project.onrender.com/S-Printer-App/User/Auth/finalSignUp',
          Data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        // console.log(response);
        setUserToken(response?.data);
        await AsyncStorage.setItem('userData', JSON.stringify(response?.data));
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        alert(error?.response?.data?.error);
        // console.log(error?.response);
      }
    };
    return (
      <>
        <View style={styles.container}>
          <ScrollView>
            <Image
              resizeMode="contain"
              style={{
                width: 200,
                height: 150,
                alignSelf: 'center',
              }}
              source={require('../../images/img.png')}
            />
            
            
            {/* <Input keyboardType="number-pad" placeholder="Enter Mobile No." /> */}
           
            <Input
              placeholder="Enter Otp"
              secureTextEntry
              value={Otp}
              onChangeText={text => setOtp(text)}
            />
            
            <View
              style={{
                flexDirection: 'row',
                width: '98%',
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 18,
                  height: 18,
                  borderWidth: 1,
                  marginHorizontal: 5,
                  backgroundColor: selected ? '#109E38' : '#fff',
                  borderColor: selected ? '#109E38' : '#000',
                }}
                onPress={() => setSelected(!selected)}></TouchableOpacity>
              <Text style={styles.text}>I certify that I am above 18 years</Text>
            </View>
  
            {loading ? (
              
              <Loader />
            ) : (
              <Button title="Register" onPress={() => handleRegisterOtp()} />
            )}
  
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                fontWeight: '400',
                color: '#fff',
              }}>
              By registering, I agree to Sprinters's{' '}
              <Text style={{color: '#ffffff90'}}>T&Cs</Text>
            </Text>
          </ScrollView>
  
          <View
            style={{
              display: 'flex',
              position: 'relative',
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '6%',
              borderTopColor: '#ddd',
              flexDirection: 'row',
              padding: 5,
              marginVertical: 10,
            }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Invite')}>
              <Text style={styles.bottomtext}>Invite by a friend?</Text>
              <Text style={[styles.bottomtext, {color: '#fff'}]}>Enter Code</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.bottomtext}>Already a user?</Text>
              <Text
                style={[styles.bottomtext, {color: '#fff', textAlign: 'center'}]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  export default SignUpOtp;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginTop: 10,
    },
    wrapper: {
      borderWidth: 0.5,
      width: '40%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
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
      borderColor: '#aaa',
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
    smalltext: {
      fontSize: 14,
      width: '98%',
      color: '#fff',
      alignSelf: 'center',
      marginBottom: 20,
    },
    bottomtext: {
      fontSize: 12,
      textAlign: 'center',
      color: '#fff',
    },
  });
  