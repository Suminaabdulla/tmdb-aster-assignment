import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>No movies found</Text>
    </View>
  );
};

export default EmptyComponent;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
