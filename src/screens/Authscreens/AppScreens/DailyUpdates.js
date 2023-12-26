import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseScreen from '../../../Components/BaseScreen';
import axios from 'react-native-axios';
import { AuthContext } from '../../../Components/AuthProvider';
const DailyUpdates = ({ navigation }) => {
  return (
    <>
      <BaseScreen
        title="Daily Updates"
        navigation={navigation}
        renderChild={Content({ navigation })}
      />
    </>
  );
};

const Content = ({ navigation }) => {
  const [updates, setupdates] = useState([])
  const { userToken } = useContext(AuthContext)
  const fetchdataupdates = async () => {
    let Data = JSON.stringify({
      accessToken: userToken?.token,
    });
    try {
      const response = await axios.get(
        `https://hotel-project.onrender.com/S-Printer-App/Notification/Notification`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      setupdates(response?.data?.result);
    } catch (error) {
      console.log(error?.response, 'error');
    }
  };

  // console.log(updates)

  useEffect(() => {
    fetchdataupdates();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          marginVertical: 10,
        }}
      />
      {updates.map((item, index) => (
         <View key={index} style={styles.wrapper}>
          <View style={{ flexDirection: 'row' }}>
            {/* <MaterialCommunityIcons name="bell" size={26} color={'#CEECF3'} /> */}
            <View style={{ marginHorizontal: 10 }}>
              {/* <Text style={styles.username}>Account Name</Text> */}
              <Text style={styles.notify}>{item?.Title}:</Text>
              <Text style={styles.action}>{item?.Notification}</Text>
              {/* <Text style={styles.time}>6 hours ago</Text> */}
            </View>
          </View>
        </View>
     ))}



    </ScrollView>
  );
};
export default DailyUpdates;
const styles = StyleSheet.create({
  container: {
    // padding: 16,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
    height: 150,
    backgroundColor: '#fff',
    elevation: 8,
    borderBottomWidth: 2,
    borderColor: '#555',
    padding: 15,
  },
  username: {
    color: '#DDDDDD',
    fontSize: 18,
    fontWeight: '400',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  updateItem: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  contestItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  notify: {
    fontSize: 20,
    color: '#626262',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  action: {
    fontSize: 20,
    color: '#C3C3C3',
    fontWeight: '500',
    marginVertical: 5,
  },
  contestTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  time: {
    fontSize: 16,
    color: '#C3C3C3',
    fontWeight: '400',
    marginVertical: 5,
  },
});
