import React, { Component } from 'react';
import { Container, Header, Text } from 'native-base';

export default class Tab1 extends Component {
  render() {
    return (
      <Container>
        <Header><Text textStyle={{color: "red"}}>Followers</Text></Header>
      </Container>
    );
  }
}