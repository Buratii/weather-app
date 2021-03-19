import React from 'react';

import { Text } from 'react-native';

import Drop from '../../assets/drop.svg';

import { Container } from './styles';

function MainWeather() {
  return (
    <Container>
      <Text>MainWheather</Text>
      <Drop color="#fff" width={120} height={40} />
    </Container>
  );
}

export default MainWeather;
