import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import BaseScreen from '../../../Components/BaseScreen';
import Rating from '../../../Components/Rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../Components/Button';
import axios from "react-native-axios"
import { AuthContext } from '../../../Components/AuthProvider';
import Loader from '../../../Components/Loader';

  const ClientTestimonial = ({ navigation }) => {
  return (
    <>
      <BaseScreen
        title="Testimonial"
        navigation={navigation}
        renderChild={Content({ navigation })}
      />
    </>
  );
};
  const Content = ({ navigation }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [getreview, setgetreview] = useState('')
  const [addreview, setaddreview] = useState('')
  const { userToken } = useContext(AuthContext)
  const [loading, setLoading] = useState(false);

  const handlesubmitReview = async () => {
    setLoading(true);
    let Data = JSON.stringify({
      Feedback: review
    });
    try {
      const response = await axios.post(
        `https://hotel-project.onrender.com/S-printer-App/TestimonialRoute/addTestimonial`,
        Data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      // console.log(response)
      reviewfetchdata()
      setLoading(false);
      // setaddreview(response?.data?.result);
    } catch (error) {
      console.log(error?.response, 'error');
      setLoading(false);
    }
  };


   const reviewfetchdata = async () => {
    let Data = JSON.stringify({
      accessToken: userToken?.token,
    });
    try {
      const response = await axios.get(
        `https://hotel-project.onrender.com/S-printer-App/TestimonialRoute/myTestimonials`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken?.accessToken}`,
          },
        },
      );
      console.log(response, 'getreview')
      setgetreview(response?.data?.Testimonials);
    } catch (error) {
      console.log(error?.response,'error');
    }
  };



  useEffect(() => {
    reviewfetchdata();
  }, []);

  const renderStars = () => {





    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setRating(i)}
        >
          <Icon
            name={i <= rating ? 'star' : 'star-o'}
            size={30}
            color={i <= rating ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        <View style={[styles.review, { backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 20 }]}>
          <Text style={{ color: "#000", fontWeight: '600', fontSize: 20 }}>WRITE A REVIEW</Text>
          <Text style={{ color: "#000", fontWeight: '400', fontSize: 18, marginTop: 10 }}>Score</Text>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            {renderStars()}
          </View>

          <Text style={{ color: "#000", fontWeight: '400', fontSize: 18, marginTop: 10 }}>Review:</Text>
          <TextInput
            style={{ height: 100, borderColor: 'gray', borderWidth: 1, padding: 10, marginTop: 10, borderRadius: 5 }}
            multiline
            placeholder="Write your review here"
            value={review}
            onChangeText={text => setReview(text)}
          />

          
          {loading ? (
          <Loader />
        ) : (
          <Button title="Submit" backgroundColor={'#55000090'}
            color={'#fff'}
            width={'80%'}
            height={40}
            onPress={() => handlesubmitReview()}
          />
        )}
        </View>


      {Array.isArray(getreview) &&
      getreview.map((item,index)=>{
        return(
          <View key={index} style={[styles.wrapper, { backgroundColor: '#E9E9F5' }]}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Image
                resizeMode="contain"
                style={{ height: 80, width: 80, borderRadius: 50 }}
                source={require('../../../images/user.jpg')}
              />
              <View>
                <Text style={styles.username}>{item?.userName}</Text>
                <Rating rating={4} starSize={25} starColor="#B7A9FE" />
              </View>
            </View>
            <Text style={styles.testimonial}>
              {item?.Feedback}
            </Text>
          </View>
        )
      })}
      

      </ScrollView>
    </>
  );
};
export default ClientTestimonial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  review: {
    width: '95%',
    height: 350,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 10
  },
  wrapper: {
    width: '95%',
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 10
  },
  username: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
  },
  testimonial: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    color: '#212121',
    fontSize: 15,
    fontWeight: 'bold',
  },
  testimonialText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#555',
  },
  clientName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  rating: {
    flexDirection: "row",
    alignItems: "center"
  }
});
