import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { AuthContext } from '../../../Components/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';

const FunandEntertainment = ({ navigation }) => {

  return (
    <>
      <BaseScreen
        title="Fun and Entertainment"
        navigation={navigation}
        renderChild={Content({ navigation })}
      />
    
    </>
  );
};



  const Content = ({ navigation,data }) => {
    const [contestSearchText, setContestSearchText] = useState('');

    const[offers,setoffers]=useState([])
    const[contest,setcontest]=useState([])
    const[Upcominggames,setUpgaminggames]=useState([])
  const { userData, userToken } = useContext(AuthContext)
  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds
  
  const filteredContests = contest.filter(
    (item) => item?.Name.toLowerCase().includes(contestSearchText.toLowerCase())
  );

  const filteredOffers = offers.filter(
    (item) => item?.Name_Of_Game.toLowerCase().includes(contestSearchText.toLowerCase())
  );

  const filteredUpcomingGames = Upcominggames.filter(
    (item) => item?.Name_Of_Game.toLowerCase().includes(contestSearchText.toLowerCase())
  );
 
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up on unmount
  }, [remainingTime]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds % 60).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };





  

  const fetchdataContest = async () => {
    let Data = JSON.stringify({
      accessToken: userToken?.token,
    });
    try {
      const response1 = await axios.get(
        `https://hotel-project.onrender.com/S-Printer-App/ContestRoute/getContest`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      const response2 = await axios.get(
        `https://hotel-project.onrender.com/S-Printer-App/TrendingGameRoute/getGames`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      const response3 = await axios.get(
        `https://hotel-project.onrender.com/S-Printer-App/UpcomingGameRoute/getGames`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      setcontest(response1?.data?.result);
      setoffers(response2?.data?.result);
      setUpgaminggames(response3?.data?.result);
    } catch (error) {
      console.log(error?.response1,'error');
      console.log(error?.response2,'error');
      console.log(error?.response3,'error');
    }
  };



  useEffect(() => {
    fetchdataContest();
  }, []);


  return (
    <>
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>Hello, {userToken?.name}</Text> */}
        <TouchableOpacity onPress={()=>navigation.navigate('Rules')}>
        <Text style={[styles.title, { fontStyle: 'italic', fontWeight: '400' }]}>
          Join The Existing Constes and Win Cash Prices
        </Text>
        </TouchableOpacity>
      
        <Input placeholder="Search ongoing contests and offer's" 
                  value={contestSearchText}
                  onChangeText={text => setContestSearchText(text)}
        
       />
        <Text style={styles.optionText}>Contests </Text>
        {filteredContests ? (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        
        style={{ marginVertical: 10 }}>


   {filteredContests.map((item, index) => (
        <View
        key={item.id}
          style={{
            backgroundColor: '#fff',
            height: 260,
            elevation: 5,
            borderRadius: 10,
            margin: 5,
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: 200,
              height: 120,
              margin: 5,
              borderRadius: 6,
            }}
            source={require('../../../images/worldcup.png')}
          />
          <Text style={styles.game}>{item?.Name}</Text>
          <View
            style={{
              paddingHorizontal: 15,
                
             
              marginVertical: 6,
            }}>
            <Text style={styles.players}>Total Player:  5</Text>
            <Text style={styles.price}>Price:  {item?.prizes}</Text>
          </View>
          {/* <View
            style={{
              paddingHorizontal: 15,
             
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text style={styles.players}>StartDate: {item?.startDate}</Text>
            <Text style={[styles.price,{marginTop:10}]}>EndDate: {item?.endDate}</Text>
          </View> */}
          
          {/* <View
            style={{
              paddingHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
           
            <Text style={styles.price}>Entry: ₹{item?.entry}</Text>
          </View> */}
        </View>
        
          ))}
      </ScrollView>
      ) : (
        <Text style={{color:"gray"}}>Loading data...</Text>
      )}
     
        <Text style={styles.optionText}>Offers and benefits</Text>
        {filteredOffers ? (
          
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}>
   {filteredOffers.map((item, index) => (
        <View
        key={item.id}
          style={{
            backgroundColor: '#fff',
            height: 260,
            elevation: 5,
            borderRadius: 10,
            margin: 5,
           
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: 200,
              height: 120,
              margin: 5,
              borderRadius: 6,
            }}
            source={{uri:item.image}}
          />
          <Text style={styles.game}>{item?.Name_Of_Game}</Text>
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text style={styles.players}>Total Player: 5</Text>
            <Text style={styles.price}>Price: {item?.Price_Of_Game}</Text>
          </View>
          
          <Text style={styles.timerText}>
            Starts in {formatTime(remainingTime)} min
          </Text>
          <Button
            backgroundColor={'#55000090'}
            color={'#fff'}
            width={'80%'}
            height={30}
            title="Details"
           onPress={()=>navigation.navigate('Rules')}
          />
          
         
        </View>

   ))}
      </ScrollView>
      ) : (
        <Text style={{color:"gray"}}>Loading data...</Text>
      )}
        <Text style={styles.optionText}>Upcoming Games</Text>
        {filteredUpcomingGames ? (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 10 }}>
         {filteredUpcomingGames.map((item, index) => (
        <View
        key={item.id}
          style={{
            backgroundColor: '#fff',
            height: 260,
            elevation: 5,
            borderRadius: 10,
            margin: 5,
          }}>
          <Image
            resizeMode="cover"
            style={{
              width: 200,
              height: 120,
              margin: 5,
              borderRadius: 6,
            }}
            source={{uri:item.image}}
            
            
          />
          <Text style={styles.game}>{item?.Name_Of_Game}</Text>
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 6,
            }}>
            <Text style={styles.players}>Total Player: 5</Text>
            <Text style={styles.price}>Price: {item?.Price_Of_Game}</Text>
          </View>
          <Text style={styles.timerText}>
            Starts in {formatTime(remainingTime)} min
            
          </Text>
          <Button
            backgroundColor={'#55000090'}
            color={'#fff'}
            width={'80%'}
            height={30}
            title="Details"
           onPress={()=>navigation.navigate('Rules')}
          />
          
         
        </View>
         ))}
         </ScrollView>
         ) : (
          <Text style={{color:"gray"}}>Loading data...</Text>
         )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  option: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginVertical: 10,
  },
  game: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    paddingHorizontal: 15,
  },
  timerText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    right: 6,
    color:"gray"
  },
 price:{
  color:"#000"
 },
 players:{
  color:"#000"
 }
});
