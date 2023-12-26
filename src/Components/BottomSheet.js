import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';

const BottomSheet = ({isVisible, onClose, children}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() => onClose()}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => onClose()}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <View>{children}</View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  closeButton: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  closeText: {
    fontSize: 16,
    color: 'blue', // Customize the color as needed
  },
});

export default BottomSheet;
