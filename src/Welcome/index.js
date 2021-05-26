import React,{Component} from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, Dimensions, TouchableHighlight } from "react-native";
import Theme from "../Theme";
import Swiper from 'react-native-swiper';
import storage from "../Storage";

export default class Welcome extends Component {
  constructor() {
    super();
  }

  render() {
    let {navigation}  = this.props
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 0, backgroundColor:'#fff'}} />
        <Swiper
          autoplay={false}
          activeDotColor={'rgb(126,199,182)'}
          loop={false}
        >
          <View style={{height: '100%',justifyContent:'space-between'}}>
            <Text style={styles.logo}>Help U</Text>
            <View style={{alignItems:'center'}}>
              <Image style={styles.welcome01} source={require('../assets/img/welcome01.png')} />
            </View>

            <View style={{paddingBottom: 150}}>
              <Text style={[{paddingLeft:20},styles.textStyle]}>
                Le vent se lève, il faut tenter de vivre {"\n"}
                纵有疾风起，人生不言弃
              </Text>
              <Text style={[styles.textStyle,styles.author]}>保罗.瓦勒里《海滨墓园》</Text>
            </View>
          </View>
          <View style={{height: '100%',justifyContent:'space-between'}}>
            <Text style={styles.logo}>Help U</Text>
            <View style={{alignItems:'center'}}>
              <Image style={styles.welcome02} source={require('../assets/img/welcome02.png')} />
            </View>
            <View style={{paddingBottom: 150}}>
              <Text style={[{paddingLeft:20},styles.textStyle]}>
                每个人都不是一座孤岛 {"\n"}
                一个人必须是这世界上最坚硬的岛屿 {"\n"}
                然后才能成为大陆的一部分
              </Text>
              <Text style={[styles.textStyle,styles.author]}>海明威</Text>
            </View>
          </View>
          <View style={{height: '100%',justifyContent:'space-between'}}>
            <Text style={styles.logo}>Help U</Text>
            <View style={{alignItems:'center'}}>
              <Image style={styles.welcome03} source={require('../assets/img/welcome03.png')} />
            </View>
            <View style={{paddingBottom: 150}}>
              <Text style={[{paddingLeft:20},styles.textStyle]}>
                没有不可治愈的伤痛  {"\n"}
                没有不能结束的沉沦  {"\n"}
                所有失去的  {"\n"}
                会以另一种方式归来
              </Text>
              <Text style={[styles.textStyle,styles.author]}>保罗.瓦勒里《海滨墓园》</Text>
            </View>
          </View>
          <View style={{height: '100%','width': '100%',justifyContent:'space-between',position:'relative'}}>
            <Text style={styles.logo}>Help U</Text>
            <View style={{alignItems:'center'}}>
              <Image style={styles.welcome04} source={require('../assets/img/welcome04.png')} />
            </View>
            <View style={{paddingBottom: 150}}>
              <Text style={[{paddingLeft:20},styles.textStyle]}>
                生活中只有一种英雄主义 {"\n"}
                那就是在认清生活的真相之后依然热爱生活
              </Text>
              <Text style={[styles.textStyle,styles.author]}>罗曼·罗兰</Text>
            </View>
            <View style={styles.launchAppWrapper}>
              <TouchableHighlight style={styles.launchApp}
                                  underlayColor={Theme.mainColor}
                                  onPress={()=>{
                                    storage.save({
                                      key: 'launchState',
                                      data: {
                                        firstLaunch: true
                                      }
                                    })
                                    navigation.navigate('Main');
                                  }}
              >
                <Text style={{color: '#fff',fontSize: 16}}>开启应用</Text>

              </TouchableHighlight>
            </View>

          </View>

        </Swiper>
        <SafeAreaView style={{flex: 0, backgroundColor:'#fff'}} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    color: '#282828',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'right',
    paddingRight: 20,
    paddingTop: 20
  },
  welcome01: {
    width: 375,
    height: 205,
  },
  textStyle: {
    fontWeight: '700',
    color: '#282828',
    fontSize: 16,
    paddingLeft: 20
  },
  welcome02: {
    width: 357,
    height: 257
  },
  welcome03: {
    width: 375,
    height: 243
  },
  welcome04: {
    width: 300,
    height: 321
  },
  author: {
    marginTop: 12,
    fontSize: 14
  },
  launchAppWrapper:{
    position: 'absolute',
    left: 0,
    width: '100%',
    alignItems: 'center',
    bottom: 70
  },
  launchApp: {
    backgroundColor: Theme.mainColor,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
})
