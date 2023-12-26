import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { AuthContext } from '../../../Components/AuthProvider';
import axios from 'react-native-axios'
import Loader from '../../../Components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProfile = ({ navigation }) => {


  return (
    <BaseScreen
      title="Edit Profile"
      navigation={navigation}
      renderChild={Content({ navigation })}
    />
  );
};
const Content = ({ navigation }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('999999');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const { userToken, setUserToken } = useContext(AuthContext);
  const UpdateProfile = async () => {
    setLoading(true);
    // setLoading(true);
    let Data = JSON.stringify({
      name: name,

    });
    try {
      const response = await axios.put(
        'https://hotel-project.onrender.com/S-Printer-App/User/Profile/editProfile',
        Data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,

          },
        },
      );
      navigation.goBack()
      setUserToken(response?.data?.Updated_Data);
      await AsyncStorage.setItem('userData', JSON.stringify(response?.data?.Updated_Data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);


    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            alignSelf: 'center',
            backgroundColor: '#aaaaaa',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name="user" size={40} color={'#555'} />
          <Entypo
            name="camera"
            size={30}
            color={'#000'}
            style={{
              position: 'absolute',
              right: 0,
              bottom: 4,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 40,
          }}
        />
        <Input
          placeholder="Enter Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        {/* <Input
          placeholder="Enter Mobile"
          value={mobile}
          keyboardType="number-pad"
          onChangeText={text => setMobile(text)}
        /> */}

      {loading ? (
          <Loader />
        ) : (
          <Button title="update" onPress={() => UpdateProfile()} />
        )}
        

      </View>
    </>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
