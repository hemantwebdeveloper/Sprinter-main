import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AuthBaseScreen from '../../Components/AuthBaseScreen';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import Loader from '../../Components/Loader';
import axios from 'react-native-axios'

const Forgot = ({ navigation }) => {

  return (
    <AuthBaseScreen
      title="Forgot Password"
      navigation={navigation}
      renderChild={Content({ navigation })}
      paddingHorizontal={false}
    />
  );
};
const Content = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popup, setPopUp] = useState(false)
  const handleForgotPassword = async () => {

    setLoading(true);
    let Data = JSON.stringify({
      email: `${email}`,

    });
    try {
      const response = await axios.post(
        'https://hotel-project.onrender.com/S-Printer-App/User/Auth/sendOtp',
        Data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      navigation.navigate('Otp', { email: email })
      // setUserToken(response?.data);
      // await AsyncStorage.setItem('userData', JSON.stringify(response?.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error?.response);
      // alert(error?.response?.data?.error);
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
        <Input placeholder="Enter email."
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.smalltext}>
          You will receive an OTP for verification
        </Text>

        {loading ? (
          <Loader />
        ) : (
          <Button title="Submit" onPress={handleForgotPassword} />
        )}

        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: '400',
            color: '#fff',
          }}>
          By registering, I agree to Sprinters's{' '}
          <Text style={{ color: '#ffffff90' }}>T&Cs</Text>
        </Text>
        <View
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '6%',
            borderTopColor: '#ddd',
            flexDirection: 'row',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.bottomtext}>New User?</Text>
            <Text style={[styles.bottomtext, { color: '#fff' }]}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomtext}>Login with Password?</Text>
            <Text
              style={[styles.bottomtext, { color: '#fff', textAlign: 'right' }]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default Forgot;

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
    color: '#555',
    fontWeight: '400',
    // padding: 5,
  },
  smalltext: {
    fontSize: 14,
    width: '98%',
    alignSelf: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  bottomtext: {
    fontSize: 12,
    textAlign: 'left',
    color: '#fff',
  },
});
