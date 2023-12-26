import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import BaseScreen from '../../../Components/BaseScreen';

const PrivacySettings = ({navigation}) => {
  return (
    <BaseScreen
      title="Privacy Settings"
      navigation={navigation}
      renderChild={Content({navigation})}
    />
  );
};
const Content = ({navigation}) => {
  const [isAccountPublic, setAccountPublic] = useState(false);
  const [notificationPreference, setNotificationPreference] = useState(false);
  const [twoFactorAuthentication, setTwoFactorAuthentication] = useState(false);

  const toggleAccountPublic = () => {
    setAccountPublic(prevState => !prevState);
  };

  const toggleNotificationPreference = () => {
    setNotificationPreference(prevState => !prevState);
  };

  const toggleTwoFactorAuthentication = () => {
    setTwoFactorAuthentication(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Account Visibility</Text>
        <Switch value={isAccountPublic} onValueChange={toggleAccountPublic} />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Notification Preferences</Text>
        <Switch
          value={notificationPreference}
          onValueChange={toggleNotificationPreference}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingTitle}>Two-Factor Authentication</Text>
        <Switch
          value={twoFactorAuthentication}
          onValueChange={toggleTwoFactorAuthentication}
        />
      </View>
      {/* Add more privacy and security settings here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PrivacySettings;
