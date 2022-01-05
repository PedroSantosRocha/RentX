import React from 'react';
import { useWindowDimensions } from 'react-native';

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

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  return (
    <Container>
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
        <ConfirmButton title='OK' />
      </Footer>
    </Container>
  );
}