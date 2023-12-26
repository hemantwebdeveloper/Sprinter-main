import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AuthBaseScreen from '../../Components/AuthBaseScreen';
import Button from '../../Components/Button';
const ChooseLanguage = ({navigation}) => {
  return (
    <AuthBaseScreen
      header={false}
      navigation={navigation}
      renderChild={Content({navigation})}
      paddingTop={false}
      paddingHorizontal={false}
    />
  );
};
const Content = ({navigation}) => {
  const [Language, setLanguage] = useState('1');
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 24,
          fontWeight: '600',
        }}>
        Select App Language
      </Text>
      <TouchableOpacity
        onPress={() => setLanguage('1')}
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: Language == 1 ? 1 : 0,
          borderColor: '#fff',
          padding: 10,
          borderRadius: 6,
          marginVertical: 6,
        }}>
        <Text
          style={{
            color: '#fff',
            // marginVertical: 20,
            fontSize: 20,
            fontWeight: '600',
          }}>
          English
        </Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {Language == 1 && (
            <Text
              style={{
                width: 18,
                height: 18,
                borderWidth: 1,
                backgroundColor: '#fff',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}></Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setLanguage('2')}
        style={{
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: Language == 2 ? 1 : 0,
          borderColor: '#fff',
          padding: 10,
          borderRadius: 6,
          marginVertical: 6,
        }}>
        <Text
          style={{
            color: '#fff',
            // marginVertical: 20,
            fontSize: 20,
            fontWeight: '600',
          }}>
          Hindi
        </Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {Language == 2 && (
            <Text
              style={{
                width: 18,
                height: 18,
                borderWidth: 1,
                backgroundColor: '#fff',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}></Text>
          )}
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTopColor: '#000',
        }}>
        <Button
          onPress={() => navigation.navigate('Welcome')}
          title="Continue"
        />
      </View>
    </View>
  );
};

export default ChooseLanguage;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
});
