import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

class Main extends  Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="首页" component={HomeScreen} />
        <Tab.Screen name="咨询" component={HomeScreen} />
        <Tab.Screen name="树洞" component={HomeScreen} />
        <Tab.Screen name="发现" component={HomeScreen} />
        <Tab.Screen name="我的" component={HomeScreen} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({

})

export default Main
