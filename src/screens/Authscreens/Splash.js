import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  View,
  PixelRatio,
  Dimensions,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../images/cricket.jpg')}
      style={styles.container}>
      <StatusBar hidden />
      <Animatable.Text
        animation="zoomInUp"
        iterationCount={1}
        duration={1000}
        delay={100}
        style={styles.logoText}>
        {/* Sprinters */}
      </Animatable.Text>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logo: {
    maxWidth: width - 60,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
    fontFamily: 'Roboto-Bold',
    color: '#000',
  },
});
