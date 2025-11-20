import { Text, View } from 'react-native';
import React from 'react';

const mainscreen = () => {
  // Force CodeQL fail
  const SECRET_PASSWORD = '123456';
  eval("console.log('danger', SECRET_PASSWORD)");
  console.log(SECRET_PASSWORD);
  return (
    <View>
      <Text>mainscreen</Text>
    </View>
  );
};

export default mainscreen;
