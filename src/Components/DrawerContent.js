import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Fantisto from 'react-native-vector-icons/dist/Fontisto';

const iconColor = '#F5CF04';
const fontSize = 24;

const DrawerContent = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userContent}>
          <View style={styles.profileDetailsRow}>
            <View style={styles.imgWrapper}>
              <MaterialIcons
                name="person-outline"
                size={44}
                color={'#fff'}
                style={{position: 'absolute', zIndex: 1}}></MaterialIcons>
            </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.userName}>Jitin</Text>

              <TouchableOpacity
                style={[
                  styles.settingsBtn,
                  {width: 150, height: 20, paddingLeft: 0, marginBottom: 0},
                ]}
                onPress={() => navigation.navigate('EditProfile')}>
                <Text
                  style={[
                    styles.solidBtnTxt,
                    {color: '#fff', marginLeft: 0, fontWeight: '500'},
                  ]}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <DrawerItem
          style={{height: 45, borderBottomWidth: 0, borderBottomColor: '#fff'}}
          labelStyle={{fontFamily: 'Roboto-Medium', color: '#fff'}}
          icon={({color, size, focused}) => (
            <MaterialIcons name="person" color={'#fff'} size={fontSize} />
          )}
          label="User Profile"
          onPress={() => {
            navigation.navigate('Profile');
          }}></DrawerItem>
      </DrawerContentScrollView>

      <DrawerItem
        // style={{ borderBottomWidth: 0, borderBottomColor: '#fff' }}
        labelStyle={{fontFamily: 'Roboto-Medium', color:'#fff'}}
        icon={({color, size}) => (
          <MaterialCommunityIcons
            name="exit-to-app"
            color={'#fff'}
            size={fontSize}
          />
        )}
        label="Sign Out"
        onPress={() => {}}></DrawerItem>
      <Text style={styles.version}>Version 1.0</Text>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#550000',
  },
  userContent: {
    display: 'flex',
    // justifyContent:'center',
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 15,
    marginBottom: 30,
    // borderWidth:1
  },
  profileDetailsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
    // borderWidth: 1,
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'relative',
  },
  profileImg: {
    // resizeMode: 'contain',
    width: 65,
    height: 65,
    zIndex: 2,
    borderRadius: 35,
  },

  detailWrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 1,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  solidBtnTxt: {
    fontSize: 14,
    color: '#000',
    marginLeft: 15,
    fontFamily: 'Roboto-Medium',
  },
  version: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 20,
    fontFamily: 'Roboto-Medium',
    // textAlign:'center'
  },
});
