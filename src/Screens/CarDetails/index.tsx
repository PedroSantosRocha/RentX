import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles';

interface NavigationProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export function CarDetails({ navigation }: NavigationProps) {
  
  function handleConfirmHental() {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']}
          />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Hucaran</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380Km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name=" 2 pessoas" icon={peopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro 
          de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmHental} />
      </Footer>

    </Container>
  );
}