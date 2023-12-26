import React, {useState, useRef, useEffect, } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Linking
} from 'react-native';
import Swiper from 'react-native-swiper';
import Animated, {Easing, withSpring} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
import Video from 'react-native-video';
import Button from '../../../Components/Button';
const slides = [
  {
    // title: 'Slide 1',
    // content: 'Welcome to Slide 1',
    backgroundColor: '#000',
    image: require('../../../images/cric.jpg'),
    video: require('../../../images/slide5.mp4'),
  },
  {
    // title: 'Slide 2',
    // content: 'Welcome to Slide 2',
    backgroundColor: '#000',
    image: require('../../../images/why.jpg'),
    video: require('../../../images/slide6.mp4'),
  },
  {
    backgroundColor: '#000',
    image: require('../../../images/create.jpg'),
    video: require('../../../images/slide7.mp4'),
  },
  {
    title: 'Join Contest',
    content: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.`,
    backgroundColor: '#000',
    image: require('../../../images/back.jpg'),
    video: require('../../../images/slide8.mp4'),
  },
];

  const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);

  const handlePress = () => {
    setIsActive(true)
    setTimeout(() => {
      setIsActive(false)
      navigation.navigate('Realid')
    }, 1000);

  };
  const handlePressDemoID = () => {
    setIsActive1(true)
    setTimeout(() => {
      setIsActive1(false)
      openLink()
    }, 1000);

  };
console.log(isActive)
  const openLink = () => {
    const url =
      'https://api.whatsapp.com/send?phone=918346000000&text=Hey%20Sprinters%20I%20Need%20ID'; // Replace with your desired URL
    Linking.openURL(url)
      .then(() => {
        console.log(`Opened ${url} successfully`);
      })
      .catch(error => {
        console.error(`Error opening ${url}: ${error}`);
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next item to show
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Slide every 5 seconds (5000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, slides.length]);

  return (
    <>
      <Swiper
        //
        autoplay={false}
        // autoplayTimeout={5000}
        index={currentIndex}
        loop={false}
        paginationStyle={{bottom: 67}}
        dotStyle={styles.dot} // Customize the inactive dot style
        activeDotStyle={styles.activeDot} // Customize the active dot style
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.container}>
            <Video
              source={slide?.video}
              style={styles.backgroundVideo}
              // muted={true}
              // repeat={true}
              resizeMode="contain"
              rate={1.0}
              ignoreSilentSwitch="ignore"
            />
          </View>
        ))}
      </Swiper>
      <View
        style={{
          display: 'flex',
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        {/* <TouchableOpacity  onPress={() => openLink()}>
          <Text
            style={[
              styles.bottomtext,
              {
                textAlign: 'center',
                fontSize: 18,
                position: 'absolute',
                right: 10,
                top: 10,
                padding: 10,
                backgroundColor: '#00000090',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                color:"#fff"
              },
            ]}>
            Get Your I'd{' '}
          </Text>
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {/* <View>
          <Carousel
            data={onboardingData}
            renderItem={renderOnboardingScreen}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setActiveSlide(index)}
          />
        </View> */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              borderWidth: 1,
              width: activeSlide == 0 ? 10 : 5,
              borderColor: '#fff',
              height: 2,
              margin: 3,
              backgroundColor: '#fff',
            }}></Text>
          <Text
            style={{
              borderWidth: 1,
              width: activeSlide == 1 ? 10 : 5,
              borderColor: '#fff',
              height: 2,
              margin: 3,
              backgroundColor: '#fff',
            }}></Text>
          <Text
            style={{
              borderWidth: 1,
              width: activeSlide == 2 ? 10 : 5,
              borderColor: '#fff',
              height: 2,
              margin: 3,
              backgroundColor: '#fff',
            }}></Text>
          <Text
            style={{
              borderWidth: 1,
              width: activeSlide == 3 ? 10 : 5,
              borderColor: '#fff',
              height: 2,
              margin: 3,
              backgroundColor: '#fff',
            }}></Text>
        </View> */}
        {/* <Button
          title="Get your Demo ID!"
          onPress={() => openLink()}
        />
        <Button
          title="Get your ID!"
          onPress={() => navigation.navigate('Realid')}
        /> */}

      
        <View style={{flexDirection:'row',justifyContent:"space-between",width:"90%",alignSelf:'center'}}>
        <Button
          title="Demo ID"
          // onPress={() => navigation.navigate('Realid')}
          onPress={handlePress}
          width={'48%'}
          backgroundColor={isActive? "#FFBA00":"white"}
        />
        <Button
          title="Get Your ID"
          onPress={handlePressDemoID}
          width={"48%"}
          backgroundColor={isActive1? "#FFBA00":"white"}
        />

         

        </View>

        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />

        {/* <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Invite')}>
            <Text style={styles.bottomtext}>Invite by a friend?</Text>
            <Text style={[styles.bottomtext, {color: '#fff'}]}>Enter Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.bottomtext}>Already a user?</Text>
            <Text
              style={[styles.bottomtext, {color: '#fff', textAlign: 'right'}]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  dot: {
    backgroundColor: '#fff', // Inactive dot color
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: '#fff', // Active dot color
    width: 10,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    height: '88%',
    right: 0,
    alignSelf: 'center',
  },
  bottomtext: {
    fontSize: 14,
    textAlign: 'left',
    color: '#fff',
  },
});

export default OnboardingScreen;
