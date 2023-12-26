import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  onPress,
  title,
  width,
  backgroundColor,
  borderWidth,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.primaryBtn,
        {
          width: width ? width : '95%',
          backgroundColor: backgroundColor ? backgroundColor : '#fff',
          borderWidth: borderWidth ? borderWidth : 1,
          ...rest,
        },
      ]}
      onPress={() => onPress()}>
      <Text style={[styles.primaryBtnTxt,{ color: color ? color : '#000',}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  primaryBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    height: 50,
    backgroundColor: '#ffffff',
    elevation: 6,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    marginVertical: 15,
  },
  primaryBtnTxt: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    // fontFamily: 'Roboto-Bold',
  },
});
