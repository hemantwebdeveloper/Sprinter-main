import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState,useContext,useEffect} from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import BottomSheet from '../../../Components/BottomSheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../../Components/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "react-native-axios"
const Support = ({navigation}) => {
  return (
    <BaseScreen
      title="Customer Support"
      navigation={navigation}
      renderChild={Content({navigation})}
    />
  );
};
const Content = ({navigation}) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [profile, setProfile] = useState('');
  const {userToken, setUserToken} = useContext(AuthContext);

  const handleToggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  const fetchdata = async () => {
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
    fetchdata();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <BottomSheet
          isVisible={isBottomSheetVisible}
          onClose={handleToggleBottomSheet}>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              color: '#000000',
              fontWeight: '400',
            }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </Text>
        </BottomSheet>
        <Text style={styles.username}>Hii</Text>
        <Text style={[styles.username, {fontSize: 14, color: '#555'}]}>
          How we can help you today?
        </Text>
        <View
          style={{
            marginTop: 20,
          }}>
          <Text style={styles.header}>Most asked questions</Text>
        </View>
        <TouchableOpacity style={styles.wrappercontainer}>
          <MaterialCommunityIcons
            name="network-strength-1"
            size={20}
            color={'#f00'}
            style={styles.icon}
          />
          <Text style={styles.wrapper}>I am unable to get network signals</Text>
          <AntDesign name="caretright" size={16} color={'#000'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrappercontainer}>
          <AntDesign name="swap" size={20} color={'#f00'} style={styles.icon} />
          <Text style={styles.wrapper}>
            I am not able to connect to internet.
          </Text>
          <AntDesign name="caretright" size={16} color={'#000'} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  header: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  wrappercontainer: {
    flexDirection: 'row',
    width: '98%',
    alignSelf: 'center',
    padding: 12,
    lineHeight: 22,
    backgroundColor: '#fff',
    elevation: 6,
    // padding: 8,
    color: '#000',
    borderRadius: 10,
    marginVertical: 10,
  },
  wrapper: {
    fontSize: 14,
    width: '85%',
    lineHeight: 22,
    color: '#000',
    fontWeight: 'bold',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    transform: [{rotate: '90deg'}],
  },
});
