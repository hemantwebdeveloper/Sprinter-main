import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AuthBaseScreen from '../../Components/AuthBaseScreen';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import axios from 'react-native-axios'
import Loader from '../../Components/Loader';

const OTPScreen = ({ navigation, route }) => {
  return (
    <AuthBaseScreen
      title="OTP"
      navigation={navigation}
      renderChild={Content({ navigation, route })}
    />
  );
};
const Content = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [Otp, setOtp] = useState("")
  const [timer, setTimer] = useState(30);
  const intervalRef = useRef(null);
  const inputs = Array(4)
    .fill(0)
    .map((_, index) => useRef(null));

  // const handleOTPChange = (index, value) => {
  //   if (value !== '') {
  //     if (index < inputs.length - 1) {
  //       inputs[index + 1].current.focus();
  //     }
  //   } else {
  //     if (index > 0) {
  //       inputs[index - 1].current.focus();
  //     }
  //   }
  // };
  const handleVerfiyOtp = async () => {
    console.log(route?.params?.email, Otp)
    setLoading(true);
    let Data = JSON.stringify({
      email: `${route?.params?.email}`,
      otp: `${Otp}`,
    });
    try {
      const response = await axios.post(
        'https://hotel-project.onrender.com/S-Printer-App/User/Auth/verifyOtp',
        Data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      navigation.navigate('changePassword', { email: route?.params?.email, response: response })
      // console.log(response)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

  };

  return (
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
      <Text style={styles.title}>Enter OTP you received on your email</Text>
      <View style={styles.otpContainer}>
        <Input
          placeholder="Enter Otp"
          value={Otp}
          onChangeText={text => setOtp(text)}
          maxLength={6}
        />
      </View>
      {timer > 0 ? (
        <Text
          style={styles.timerText}>{`Resend OTP in  ${timer} seconds`}</Text>
      ) : (
        <TouchableOpacity onPress={() => startTimer()}>
          {/* <Text style={styles.resendText}>Resend OTP</Text> */}
        </TouchableOpacity>
      )}
      {loading ? (
        <Loader />) : (
        <Button title="Submit" onPress={() => handleVerfiyOtp()} />

      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    width: 80,
    backgroundColor: '#fff',
    elevation: 6,
    height: 80,
    color: '#000',
    fontSize: 18,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timerText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  resendText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});

export default OTPScreen;
