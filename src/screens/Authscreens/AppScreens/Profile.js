import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState, useEffect,useFocusEffect} from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../../Components/AuthProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
const Profile = ({navigation}) => {
  return (
    <>
      <BaseScreen
        title={'Profile'}
        navigation={navigation}
        renderChild={Content({navigation})}
        paddingHorizontal={false}
      />
    </>
  );
};
const Content = ({navigation}) => {
  const [profile, setProfile] = useState('');
  const {userToken, setUserToken} = useContext(AuthContext);
  
  const fetchData = async () => {
    let Data = JSON.stringify({
      accessToken: userToken?.token,
    });
    try {
      const response = await axios.get(
        `https://hotel-project.onrender.com/S-Printer-App/User/Profile/myProfile`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      setProfile(response?.data?.result);
    } catch (error) {
      console.log(error?.response,'error');
    }
  };



  useEffect(() => {
    fetchData();
  }, [[userToken]]);

  
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            width: '100%',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: '#aaaaaa60',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 15,
            }}>
            <Entypo name="user" size={40} color={'#555'} />
          </View>
          <View
            style={{
              marginHorizontal: 8,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 14,
                fontWeight: '400',
                textTransform: 'capitalize',
              }}>
              {profile?.name}
            </Text>
            <Text
              style={{
                color: '#555',
                fontSize: 14,
                fontWeight: '400',
              }}>
              {profile?.email}
            </Text>
          </View>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={{
              width: 30,
              position: 'absolute',
              right: 0,
            }}>
            <Entypo name="edit" color={'#000'} size={24} />
          </TouchableOpacity> */}
        </View>
        <View style={{marginVertical: 20}}>
        <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.cardwrapper}>
            <MaterialCommunityIcons name="account" size={24} color={'#000'} />
            <Text style={styles.cardText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacySettings')}
            style={styles.cardwrapper}>
            <MaterialIcons name="privacy-tip" size={24} color={'#000'} />
            <Text style={styles.cardText}>Privacy Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('support')}
            style={styles.cardwrapper}>
            <MaterialIcons name="support-agent" size={24} color={'#000'} />
            <Text style={styles.cardText}>Customer Support</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('setting')}
            style={styles.cardwrapper}>
            <MaterialIcons name="settings" size={24} color={'#000'} />
            <Text style={styles.cardText}>Settings</Text>
          </TouchableOpacity>
         
        </View>
      </View>
    </>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  cardwrapper: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 5,
    marginVertical: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 15,
  },
});
