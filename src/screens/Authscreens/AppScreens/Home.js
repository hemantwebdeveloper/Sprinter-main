import { StyleSheet, Text, View, TouchableOpacity, Linking,ScrollView, Image, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import Video from 'react-native-video';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import notifee, { AndroidStyle } from '@notifee/react-native';
import Button from '../../../Components/Button';

const Home = ({ navigation }) => {

  
  return (
    <>
      <BaseScreen
        header={false}
        paddingHorizontal={false}
        paddingTop={false}
        navigation={navigation}
        renderChild={Content({ navigation })}
        leftButton={'menu'}
      />
    </>
  );
};
const WelcomePopup = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}
    >
     <View style={{width:"100%",height:"100%",backgroundColor:"#00000050"}}>
          <View style={{backgroundColor:"#fff",
          
          width:"95%",
          height:"40%",
          alignSelf:"center",
          top:"30%",
          borderRadius:8
          
          }}>

           

            <Image source={require('../../../images/notice-img3.jpg')} style={{ width:"100%",
          height:"85%",borderRadius:8}}/>

           <TouchableOpacity onPress={onClose}  style={{position:"absolute",right:3,top:3}}>
            <Image source={require('../../../images/close1.png')} style={{height:20,width:20,marginTop:10,marginRight:10,tintColor:"#000"}}/>
            </TouchableOpacity>
        
          </View> 
          </View>
    </Modal>
  );
};
const Content = ({ navigation }) => {
  
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };
  
  useEffect(() => {
    Notification()
  }, []);



  
  const Notification = async () => {
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Enter to view message content',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon',
        // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        style: { type: AndroidStyle.BIGPICTURE, picture: '../../../images/img.png' },
        pressAction: {
          id: 'default',
        },
      },
    });
  }




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

  
  return (
    <View style={styles.container}>
      <Video
        source={require('../../../images/sample2.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat={true}
      />


      <AntDesign
        name="bells"
        color={'#fff'}
        size={24}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
        // onPress={()=>handleModalVisibility()}
        onPress={()=>navigation.navigate('DailyUpdates')}

      />
      <View style={styles.overlay}>
        {/* <Modal
          animationType="slide"
          transparent={false}
          visible={isPopupVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{width:"100%",height:"100%",backgroundColor:"#00000050"}}>
          <View style={{backgroundColor:"#fff",
          
          width:"80%",
          height:"30%",
          alignSelf:"center",
          top:"30%",
          borderRadius:8
          
          }}>

           

            <Image source={require('../../../images/notice-img3.jpg')} style={{ width:"100%",
          height:"100%",borderRadius:8}}/>

           <TouchableOpacity onPress={closePopup} style={{position:"absolute",right:3,top:3}}>
            <Image source={require('../../../images/close1.png')} style={{height:20,width:20,marginTop:10,marginRight:10,tintColor:"#000"}}/>
            </TouchableOpacity>
        
          </View> 
          </View>
         
        </Modal> */}

        <WelcomePopup isVisible={showPopup} onClose={handleClose} />

        {/* <MarqueeText
          style={{ fontSize: 24, color: "#fff", marginVertical: 20 }}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={1000}

        >
          NOTICE -- Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.
        </MarqueeText> */}


        <Text style={styles.overlayText}>#1 MOST TRENDING BOOK OF ASIA</Text>
        <Text style={styles.LogoText}>SPRINTERS</Text>
        <Text style={styles.LogoText}>ONLINE</Text>
        <Text style={styles.text}>
          Get your online ID from the most famous book of Asia and experience
          the newest way to invest and win big from Live Sports.
        </Text>
        <TouchableOpacity 
        onPress={() => openLink()}
        // onPress={openPopup}
         style={styles.demoId}>
          <FontAwesome
            name="whatsapp"
            color={'#fff'}
            size={35}

          />
          <Text style={styles.demoText}>Get Your ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.demoId2}
          onPress={()=>navigation.navigate('HomeRealid')}>
         
          <Text style={styles.demoText}> Demo ID</Text>
        </TouchableOpacity>



      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
    backgroundColor: '#FFBA00',
    padding: 16,
  },
  LogoText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 34,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
  },
  demoId: {
    width: '90%',
    height: 55,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25D366',
    marginVertical: 10,
    flexDirection: "row"
  },
  demoId2: {
    width: '90%',
    height: 55,
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginVertical: 10,
    flexDirection: "row"
  },
  demoText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    paddingHorizontal: 10
  },
});
