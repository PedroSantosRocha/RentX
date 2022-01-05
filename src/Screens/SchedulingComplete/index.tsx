import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import LogoSVG from '../../assets/logo_background_gray.svg';
import DoneSGV from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

interface NavigationProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function SchedulingComplete({ navigation }: NavigationProps) {
  const { width } = useWindowDimensions();

  function handleConfirmHental() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      
      <LogoSVG width={width}/>

      <Content>
        <DoneSGV width={80} height={80}/>
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirmHental} />
      </Footer>
    </Container>
  );
}