import React, {Component} from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import PersonalCenter from "./PersonalCenter";

const Tab = createBottomTabNavigator();

class Main extends  Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions ={
          ({route}) => ({
            tabBarIcon: ({focused,size,color})=> {
              let icon;
              if(route.name == 'home') {
                //首页
                icon = focused ? <Image style={styles.tabBottomIcon} source={require('../assets/icon/homeActiveIcon.png')} /> :
                  <Image style={styles.tabBottomIcon} source={require('../assets/icon/homeIcon.png')} />
              }else if(route.name =='advisory') {
                //咨询
                icon = focused ? <Image style={styles.tabBottomIcon} source={require('../assets/icon/advisoryActiveIcon.png')} /> :
                  <Image style={styles.tabBottomIcon} source={require('../assets/icon/advisoryIcon.png')} />
              }else if(route.name == 'treeHole') {
                //树洞
                icon = focused ? <Image style={styles.tabBottomIcon} source={require('../assets/icon/treeHoleaActiveIcon.png')} /> :
                  <Image style={styles.tabBottomIcon} source={require('../assets/icon/treeHoleIcon.png')} />
              } else if(route.name == 'find') {
                //发现
                icon = focused ? <Image style={styles.tabBottomIcon} source={require('../assets/icon/findActiveIcon.png')} /> :
                  <Image style={styles.tabBottomIcon} source={require('../assets/icon/findIcon.png')} />
              } else {
                //我的
                icon = focused ? <Image style={styles.tabBottomIcon} source={require('../assets/icon/myActiveIcon.png')} /> :
                  <Image style={styles.tabBottomIcon} source={require('../assets/icon/myIcon.png')} />
              }

              return icon
            }
          })
        }
        tabBarOptions={{
          activeTintColor: 'rgb(126, 199, 182)',
          inactiveTintColor: 'rgb(94, 94, 94)',
          labelStyle:{
            fontSize:12,
            fontWeight: '700'
          }
        }}
      >
        <Tab.Screen name="home" options={{title:'首页'}} component={HomeScreen} />
        <Tab.Screen name="advisory" options={{title:'咨询'}} component={HomeScreen} />
        <Tab.Screen name="treeHole" options={{title:'树洞'}} component={HomeScreen} />
        <Tab.Screen name="find" options={{title:'发现'}}  component={HomeScreen} />
        <Tab.Screen name="personalCenter" options={{title:'我的'}}  component={PersonalCenter} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  tabBottomIcon: {
    width: 22,
    height: 22
  }
})

export default Main
