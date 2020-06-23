import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';

//Components
import Tab1 from './Tab1';
import Tab2 from './Tab2';

export default class Tabby extends Component {
  render() {
    return (
        <Tabs tabBarUnderlineStyle={{backgroundColor: "red"}} textStyle={{color: "red"}}>
          <Tab heading="Followers" activeTextStyle={{color: "red"}} textStyle={{color: "red"}}>
            <Tab1 />
          </Tab>
          <Tab heading="Following" activeTextStyle={{color: "red"}} textStyle={{color: "red"}}>
            <Tab2 />
          </Tab>
        </Tabs>
    );
  }
}