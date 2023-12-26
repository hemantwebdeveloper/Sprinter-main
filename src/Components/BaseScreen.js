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

const BaseScreen = ({
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
    <View style={styles.container}>
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
            <View
              style={styles.menuButton}
              onPress={() => {
                backTo ? navigation.navigate(backTo) : navigation.goBack();
              }}>
              {/* <MaterialIcons
                name="keyboard-backspace"
                size={25}
                color="#fff"></MaterialIcons> */}
              <Text style={styles.headerTxt}>{title}</Text>
            </View>
          )}

          <View style={styles.rightButton}>{rightButton}</View>
        </View>
      )}

      <View
        style={[
          styles.content,
          {
            paddingHorizontal: paddingHorizontal === false ? 0 : 10,
            paddingTop: paddingTop === false ? 0 : 20,
            height: header === false ? '100%' : '94%',
          },
        ]}>
        {renderChild}
      </View>
    </View>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    paddingTop: 0,
    // backgroundColor: '#f7f7f7',
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: '#550000',
    borderBottomColor: '#ddd',
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
    lineHeight: 41
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '94%',
    width: '100%',
    paddingHorizontal: 10,
    // paddingBottom: 5,
    // paddingTop:20,
    backgroundColor: '#fff',
    // backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // opacity: 0.8,
    // borderTopWidth:1,borderTopColor:'#222'
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
