import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import BaseScreen from '../../../Components/BaseScreen';
const Realid = ({navigation}) => {
  return (
    <BaseScreen
      leftButton={true}
      title="Get Your Real Id"
      navigation={navigation}
      renderChild={Content({navigation})}
      paddingHorizontal={false}
      paddingTop={false}
    />
  );
};
const Content = ({navigation}) => {
  const openLink = link => {
    const url = link; // Replace with your desired URL
    Linking.openURL(url)
      .then(() => {
        console.log(`Opened ${url} successfully`);
      })
      .catch(error => {
        console.error(`Error opening ${url}: ${error}`);
      });
  };

  return (
    <ScrollView style={styles.Container}>
      <Text style={styles.heading}>Our Brand Partners</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: 50,
        }}>
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/jewel.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.jewelexch.com/')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/jewel7.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.jewel777.com/')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/hawk.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://hawkexch.com/login')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/jewel999.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.jewel999.com/#/home')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/tiger.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://tigerexch247.vip/login')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/img.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.sprintersky.com/')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/silver.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.silverexch.com/login')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View>
          <Image
            style={styles.img}
            resizeMode="contain"
            source={require('../../../images/diamond.png')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => openLink('https://www.diamondexch9.com/login')}>
            <Text style={styles.btntext}>Get Id</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Realid;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  heading: {
    fontSize: 24,
    color: '#E2BF7D',
    fontWeight: '600',
    lineHeight: 30,
    textAlign: 'center',
    // marginVertical: 10,
    marginTop: 40
  },
  subheading: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
    lineHeight: 20,
    // textAlign: 'center',
  },
  urltext: {
    fontSize: 18,
    color: '#00f',
    fontWeight: '400',
    lineHeight: 20,
    width: '90%',
    textAlign: 'left',
    marginVertical: 5,
    alignSelf: 'center',
  },
  wrapper: {
    marginTop: 10,
  },
  demoId: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    lineHeight: 20,
    width: '90%',
    textAlign: 'left',
    marginVertical: 10,
    alignSelf: 'center',
  },
  note: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    lineHeight: 20,
    width: '90%',
    textAlign: 'left',
    marginTop: 15,
    alignSelf: 'center',
  },
  btn: {
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  img: {
    height: 80,
    width: 100,
  },
});
