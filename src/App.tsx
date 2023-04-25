import React from 'react';
import Numbergenerater from './components/Numbergenerater';
import { Text } from '@chakra-ui/react';

const App = () => {
  return (
    <div>
      <Text fontSize={45} mx={"auto"} textAlign={"center"}>
        Guess a Number
      </Text>
      <Text textAlign={"center"}>
        Please think about a number and select box which hast that number i will guess your number
      </Text>
      <Numbergenerater/>
    </div>
  );
};

export default App;