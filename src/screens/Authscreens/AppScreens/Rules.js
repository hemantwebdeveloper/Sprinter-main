import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
    Linking
  } from 'react-native';
  import React, { useState, useEffect, useContext } from 'react';
  import BaseScreen from '../../../Components/BaseScreen';
  import Input from '../../../Components/Input';
  import Button from '../../../Components/Button';
  import { AuthContext } from '../../../Components/AuthProvider';
  import { NavigationContainer } from '@react-navigation/native';
  import { useNavigation } from '@react-navigation/native';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import axios from "react-native-axios"
  const FunandEntertainment = ({ navigation }) => {
  //   const handleSkipForNow = () => {
  //     navigation.navigate('Rules');
  //   };
    return (
      <>
        <BaseScreen
          title="Sprinters Cup"
          navigation={navigation}
          renderChild={Content({ navigation })}
        />
      
      </>
    );
  };
  
  const RulesPoint = ({ navigation }) => {
    return (
    <View style={[styles.rulesbox,{height:500}]}>
        <View style={{paddingHorizontal:20,paddingVertical:20}}>
          <Text style={styles.optionText}>Sprintes Cup Contest Rules</Text>
        <Text style={styles.title}>1. ᴊᴏɪɴɪɴɢ ᴍᴇ ᴛᴇᴀᴍ ɴᴀᴍᴇ ᴀᴀᴘᴋɪ ꜱᴘʀɪɴᴛᴇʀꜱ ɪᴅ ɴᴀᴍᴇ ꜱᴇ ʜᴏɴᴀ ᴍᴀɴᴅᴀᴛᴏʀʏ ʜᴀɪ ɴᴀʜɪ ᴛᴏ ᴘʀɪᴢᴇ ɴᴀʜɪ ᴍɪʟᴇɢᴀ. 
</Text>
        <Text style={styles.title}>2. ɪᴅ ᴍᴇ ʀᴇɢᴜʟᴀʀ ʙᴇᴛꜱ ʜᴏɴᴇ ᴄʜᴀʜɪʏᴇ. 
.</Text>
        <Text style={styles.title}>3. ᴘʀɪᴢᴇ ᴜꜱɪ ɪᴅ ᴍᴇ ᴊᴀʏᴇɢᴀ ᴊɪꜱ ɴᴀᴍᴇ ꜱᴇ ᴊᴏɪɴᴇᴅ ʜᴀɪ.
.</Text>
        <Text style={styles.title}>4.  ᴇᴋ ɴᴜᴍʙᴇʀ ꜱᴇ ꜱɪʀꜰ ᴇᴋ ɪᴅ  ᴄᴏɴᴛᴇꜱᴛ ᴍᴇ ᴘᴀʀᴛɪᴄɪᴘᴀᴛᴇ ᴋᴀʀ ꜱᴀᴋᴛᴇ ʜᴀ
</Text>
        <Text style={styles.title}>5. ɪs ᴄᴏɴᴛᴇsᴛ ᴍᴇ sɪʀғ 𝗖𝗥𝗜𝗖𝗞𝗘𝗧 𝗕𝗘𝗧𝗦  ᴠᴀʟɪᴅ ʜᴀ.
</Text>
        <Text style={styles.title}>6. Pᴜʀᴇ ᴡᴏʀʟᴅ ᴄᴜᴘ ᴍᴀᴛᴄʜᴇs ᴍᴇ ᴀᴀᴘᴋɪ ɪᴅ ᴍᴇ  ᴍɪɴ 35 𝗠𝗮𝘁𝗰𝗵𝗲𝘀  ᴍᴇ  ʙᴇᴛ ʜᴏɴᴀ ᴍᴀɴᴅᴀᴛᴏʀʏ ʜᴀ, Mɪɴ 5 𝗕𝗲𝘁𝘀 𝗽𝗲𝗿 𝗺𝗮𝘁𝗰𝗵.
.</Text>
        <Text style={styles.title}>7. Wᴏʀʟᴅ ᴄᴜᴘ ᴍᴀᴛᴄʜ ᴏᴠᴇʀ ʜᴏɴᴇ ᴋᴇ 1 ᴡᴇᴇᴋ ʙᴀᴀᴅ ᴡɪɴɴᴇʀs ʟɪsᴛ ᴘᴜʙʟɪsʜ ᴋɪ ᴊᴀʏᴇɢɪ.</Text>

        <Text style={styles.notes}>Note:-Offer ka Misuse Karne Wale Ko Disqualified Kar Diya Jayega.</Text>
        </View>
     
    </View>
    );
  };
  
  const Trending = ({ navigation }) => {
    return(
        <View style={styles.rulesbox}>
        <View style={{paddingHorizontal:20,paddingVertical:10}}>
        <Text style={styles.optionText}>🏆SPRINTERS CUP 2🏆
</Text>
<Text style={styles.title}>Ye SPRINTERS CUP Ka hi part hai Jo log 1st contest ko join kiye hai wo ese join nhi kre nhi to Disqualify kr diya jayega
</Text>
<Text style={styles.title}>Winner Sprinter Cup & Sprinters Cup 2 ka combined result pe decide hoga
</Text>
        <Text style={styles.optionText}>Bumper Prizes List</Text>
        <Text style={styles.title}>👉1st prize Royal Enfield or 20X playing limit which one is less

</Text>
        <Text style={styles.title}>👉 2nd Prize IPhone 15 Pro or 17X playing limit which one is less
</Text>
        <Text style={styles.title}>👉 3rd Prize Pulsar 125CC or 15X Playing limit which one is less</Text>
        <Text style={styles.title}>👉4th Prize GOLD COIN(10g) 🪙 or 13X of Playing limit which one is less
.</Text>
        <Text style={styles.title}>👉5th Prize Apple Smart Watch or 11X Playing limit which one is less
.</Text>
        <Text style={styles.title}>👉6th Prize One Plus 11R Smart Phone or 9X of playing limit which one is less
.</Text>
        <Text style={styles.title}>👉7th Prize Smart TV or 7X of Playing limit which one is less
.</Text>
<Text style={styles.title}>👉8th Prize Fridge or 5X Playing Limit which one is less.

.</Text>
<Text style={styles.title}>👉 9th Prize Microwave or 4X Playing limit which one is less.

.</Text>
<Text style={styles.title}>👉10th Prize Branded Smart Watch or 3X Playing limit which one is less


.</Text>
<Text style={styles.title}>👉Consolation Prize 11th Onward 1X of Playing limit


.</Text>


        </View>
     

    </View>
    )
      
  };


  
  
  const Content = ({ navigation }) => {
    const { userData, userToken } = useContext(AuthContext)
    const urlToOpen = 'https://icc.dream11.com/season/contest/join/80MP0904@9 '; // Replace with your desired URL

  const handleOpenLink = () => {
    Linking.openURL(urlToOpen)
      .catch((err) => console.error('An error occurred: ', err));
  };
    return (
      <>
        <ScrollView style={styles.container}>
          {/* <Text style={styles.title}>Hello, {userToken?.name}</Text> */}
          
        
          <RulesPoint />
         
          <Trending />
          <Button
            backgroundColor={'#55000090'}
            color={'#fff'}
            width={'80%'}
            height={40}
            title="Join Contest Now"
            onPress={handleOpenLink}
          />
         
        </ScrollView>
      </>
    );
  };
  export default FunandEntertainment;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    title: {
      fontSize: 15,
      fontWeight: '450',
      color: '#000',
      justifyContent:'center',
      alignItems:'center',
     marginVertical:5
      
    },
    rulesbox:{
        height:780,
        width:"95%",
        alignSelf:'center',
        elevation:5,
        borderRadius:10,
        backgroundColor:"#fff",
        marginTop:10
    }
    ,
    notes:{
        fontSize: 15,
      fontWeight: '700',
      color: '#000',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      
    },
    optionText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginVertical: 10,
        alignSelf:"center"
      },
   
   
  });
  