import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
const AuthBaseScreen = ({
  navigation,
  renderChild,
  header,
  title,
  leftButton,
  rightButton,
  backTo,
  logo,
  paddingTop,
  paddingHorizontal,
}) => {
  return (
    <ImageBackground
      source={require('../images/back.jpg')}
      style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      {header === false ? null : (
        <View style={styles.header}>
          {leftButton === false ? null : leftButton === 'menu' ? (
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.openDrawer()}>
              <MaterialIcons name="menu" size={25} color="#fff"></MaterialIcons>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                backTo ? navigation.navigate(backTo) : navigation.goBack();
              }}>
              <MaterialIcons
                name="keyboard-backspace"
                size={25}
                color="#fff"></MaterialIcons>
              <Text style={styles.headerTxt}>{title}</Text>
            </TouchableOpacity>
          )}

          <View style={styles.rightButton}>{rightButton}</View>
        </View>
      )}

      <View
        style={[
          styles.content,
          {
            height: header === false ? '100%' : '94%',
          },
        ]}>
        {renderChild}
      </View>
    </ImageBackground>
  );
};

export default AuthBaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '6%',
    top: 25,
    borderBottomColor: '#ddd',
    // backgroundColor: '#f1f1f1',
  },
  menuButton: {
    marginLeft: 10,
    color: '#F5CF04',
    position: 'absolute',
    left: 0,
    flexDirection: 'row',
  },
  rightButton: {
    marginRight: 15,
    color: '#f33',
    position: 'absolute',
    right: 0,
  },
  headerTxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Roboto-Black',
    marginHorizontal: 10,
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '94%',
    width: '100%',
    paddingHorizontal: 10,
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // width: 320,
    // height: 200,
    resizeMode: 'cover',
  },
  contentScroll: {
    display: 'flex',
    height: '100%',
    width: '100%',
    // borderWidth: 1, borderColor: '#000'
  },
});
