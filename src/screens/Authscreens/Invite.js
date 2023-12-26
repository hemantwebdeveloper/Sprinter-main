import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import BaseScreen from '../../Components/BaseScreen';
import AuthBaseScreen from '../../Components/AuthBaseScreen';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
const Invite = ({navigation}) => {
  return (
    <AuthBaseScreen
      title="Register"
      navigation={navigation}
      renderChild={Content({navigation})}
      paddingHorizontal={false}
      paddingTop={false}
    />
  );
};
const Content = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            style={{
              width: 200,
              height: 150,
              alignSelf: 'center',
            }}
            source={require('../../images/img.png')}
          />
          <Input placeholder="Enter Your Name" />
          <Input placeholder="Enter Email" />
          <Input placeholder="Enter Password" />
          <Input placeholder="Enter Invitation Code" />
          <Text style={styles.smalltext}>
            You will receive an OTP for verification
          </Text>
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
          <Button title="Register" onPress={() => {}} />

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
export default Invite;

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
    width: '96%',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  bottomtext: {
    fontSize: 12,
    textAlign: 'left',
    color: '#fff',
  },
});
