import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'green'}} hasTabs>
           
          <Body>
            <Title style={{color:'black'}}>My News App</Title>
          </Body>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'green'}}>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'green'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'green'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'green'}} heading="Technology">
            <Tab3 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} activeTextStyle={{color:'green'}} heading="Sports">
            <Tab4 />
          </Tab>
         
        </Tabs>
      </Container>
    );
  }
}