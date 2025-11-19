import { Text, View } from 'react-native';
import React from 'react';

const mainscreen = () => {
  eval("console.log('This will fail CodeQL')");

  return (
    <View>
      <Text>mainscreen</Text>
    </View>
  );
};

export default mainscreen;
