import React from 'react';

import MainWeather from '../../components/MainWeather';

import { Container } from './styles';

function Main() {
  return (
    <Container
      colors={['#030303', '#282627']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <MainWeather />
    </Container>
  );
}

export default Main;
