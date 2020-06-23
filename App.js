import React, { Component } from 'react';
import { Container, Header, Body, Left, Right, Title, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

Icon.loadFont();

//Components
import Tabby from './Components/Tabs'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header noShadow>
          <Left>
            <Icon name={'angle-left'} size={30} color='black' />
          </Left>
          <Body>
            <Title>
              <Text style={{ color: 'red' }}>Parker Miller</Text>
            </Title>
          </Body>
          <Right>
            <Icon name={'reorder'} size={30} color='black' />
          </Right>
        </Header>
        <Tabby />
      </Container>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  }
});
