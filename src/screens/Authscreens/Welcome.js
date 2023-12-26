import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import AuthBaseScreen from '../../Components/AuthBaseScreen';
import Button from '../../Components/Button';
import OnboardingScreen from './AppScreens/OnBoarding';
const OnboardingScreen1 = ({}) => {
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Welcome to Sprinters
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          width: '60%',
          alignSelf: 'center',
          lineHeight: 22,
        }}>
        Ready to start Winning? Swipe Left to learn basics of fantasy sports.
      </Text>
    </View>
  );
};

const OnboardingScreen2 = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Select a Match
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          width: '60%',
          alignSelf: 'center',
          lineHeight: 22,
        }}>
        Choose an upcoming match that you want to play.
      </Text>
    </View>
  );
};
const OnboardingScreen3 = () => {
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Join Contents
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          width: '60%',
          alignSelf: 'center',
          lineHeight: 22,
        }}>
        Compete with other Sprinters players for big rewards.
      </Text>
    </View>
  );
};
const OnboardingScreen4 = () => {
  return (
    <View>
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Create Teams
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 14,
          fontWeight: '400',
          textAlign: 'center',
          width: '60%',
          alignSelf: 'center',
          lineHeight: 22,
        }}>
        Use your skills to pick the right players and earn fantasy points.
      </Text>
    </View>
  );
};
const Welcome = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderOnboardingScreen = ({item}) => {
    switch (item) {
      case 0:
        return <OnboardingScreen1 />;
      case 1:
        return <OnboardingScreen2 />;
      case 2:
        return <OnboardingScreen3 />;
      case 3:
        return <OnboardingScreen4 />;
      default:
        return null;
    }
  };

  const onboardingData = [0, 1, 2, 3];
  return (
    <ImageBackground
      source={require('../../images/back.jpg')}
      style={styles.container}>
      <StatusBar hidden />

      <OnboardingScreen navigation={navigation} />
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  bottomtext: {
    fontSize: 14,
    textAlign: 'left',
    color: '#fff',
  },
});
