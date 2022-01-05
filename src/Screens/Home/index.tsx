import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

interface NavigationProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function Home({ navigation }: NavigationProps) {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rend: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png'
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent 
        backgroundColor="transparent"
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      
      <CarList
        data={[1,2,3,4,5,6,7]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) =>
          <Car data={carData} onPress={handleCarDetails} />
        }
      />
    </Container>
  );
}