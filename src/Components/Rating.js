import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Rating = ({rating, starSize = 20, starColor = '#FFD700'}) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  const renderStars = (count, iconName) => {
    return Array.from({length: count}, (_, index) => (
      <Icon key={index} name={iconName} size={starSize} color={starColor} />
    ));
  };

  return (
    <View style={styles.container}>
      {renderStars(filledStars, 'star')}
      {halfStar && (
        <Icon
          name="star-half-empty"
          size={starSize}
          color={starColor}
          style={{margin: 8}}
        />
      )}
      {renderStars(emptyStars, 'star-o')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
