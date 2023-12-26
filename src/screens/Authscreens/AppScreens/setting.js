import {StyleSheet, Text, View, TouchableOpacity, Switch} from 'react-native';
import React, {useState, useContext} from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../../../Components/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Setting = ({navigation}) => {
  return (
    <>
      <BaseScreen
        title="Settings"
        navigation={navigation}
        renderChild={Content({navigation})}
        paddingHorizontal={false}
      />
    </>
  );
};

const Content = ({navigation}) => {
  const {userToken, setUserToken} = useContext(AuthContext);

  const Logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userData');
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.cardwrapper}>
          <Entypo
            name="language"
            size={24}
            color={'#000'}
            style={{justifyContent: 'center'}}
          />
          <Text style={styles.cardText}>Change Language</Text>
          <AntDesign
            name="right"
            size={16}
            color={'#000'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 0,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => toggleSwitch()}
          style={styles.cardwrapper}>
          <MaterialCommunityIcons
            name="theme-light-dark"
            size={24}
            color={'#000'}
            style={{justifyContent: 'center'}}
          />
          <Text style={styles.cardText}>Change Theme</Text>
          <Switch
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 0,
              marginTop: 5,
            }}
            trackColor={{false: '#767577', true: '#767577'}}
            thumbColor={isEnabled ? '#000' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch()}
            value={isEnabled}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Logout()} style={styles.cardwrapper}>
          <MaterialIcons name="exit-to-app" size={24} color={'#000'} />
          <Text style={styles.cardText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Setting;

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
