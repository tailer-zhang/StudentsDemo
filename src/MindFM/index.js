import React, {Component} from 'react';
import { SafeAreaView, View, StyleSheet, Text, ImageBackground, Image, ScrollView } from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";


export default class MindFM extends Component {
  constructor() {
    super();
    this.state = {
      mindGrowthData :[
        {
          fmBg: require('../assets/img/fm01.png'),
          fmCaptionTitle: '人之所以快乐，是懂得向前看',
          playText: '84人播放'
        },
        {
          fmBg: require('../assets/img/fm03.png'),
          fmCaptionTitle: '心理学：播放量高达1.9亿的心理课',
          playText: '84人播放'
        },
        {
          fmBg: require('../assets/img/fm02.png'),
          fmCaptionTitle: '在内卷时代，普通人的努力还有价值吗',
          playText: '114人播放'
        }
      ],
      thinkData: [
        {
          fmBg: require('../assets/img/fm01.png'),
          fmCaptionTitle: '睡眠疗愈钢琴曲',
          playText: '84人播放'
        },
        {
          fmBg: require('../assets/img/fm01.png'),
          fmCaptionTitle: '7天基础冥想：改善睡眠',
          playText: '84人播放'
        },
        {
          fmBg: require('../assets/img/fm02.png'),
          fmCaptionTitle: '30天正念幸福课',
          playText: '260人播放'
        }
      ]
    }
  }
  render() {
    let {mindGrowthData, thinkData} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 0, backgroundColor:'#fff'}} />
        <Header navigation={this.props.navigation} title={'心理FM'} />
        <Search placeholder={'搜索你感兴趣的播单'} />
        <ScrollView style={{flex: 1}}>
          <View>
            <Text style={styles.fmTitle}>心理成长</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                mindGrowthData.map((item,index)=>{
                  return (
                    <ImageBackground key={index} style={styles.fmBg} source={item.fmBg}>
                      <ImageBackground source={require('../assets/img/fmCaptionBg.png')} style={styles.fmCaption}>
                        <Text style={styles.fmCaptionTitle}>{item.fmCaptionTitle}</Text>
                        <View style={styles.fmPlay}>
                          <Image style={styles.playIcon} source={require('../assets/img/playIcon.png')} />
                          <Text style={styles.playText}>{item.playText}</Text>
                        </View>
                      </ImageBackground>
                    </ImageBackground>
                  )
                })
              }

            </ScrollView>
          </View>
          <View>
            <Text style={styles.fmTitle}>正念冥想</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                thinkData.map((item,index)=>{
                  return (
                    <ImageBackground key={index} style={styles.fmBg} source={item.fmBg}>
                      <ImageBackground source={require('../assets/img/fmCaptionBg.png')} style={styles.fmCaption}>
                        <Text style={styles.fmCaptionTitle}>{item.fmCaptionTitle}</Text>
                        <View style={styles.fmPlay}>
                          <Image style={styles.playIcon} source={require('../assets/img/playIcon.png')} />
                          <Text style={styles.playText}>{item.playText}</Text>
                        </View>
                      </ImageBackground>
                    </ImageBackground>
                  )
                })
              }

            </ScrollView>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fmTitle: {
    color: '#282828',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 15,
    paddingLeft: 15
  },
  fmBg: {
    width: 224,
    height: 195,
    marginLeft: 15,
    position: 'relative'
  },
  fmCaption: {
    width: 224,
    height: 98,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex:10
  },
  fmCaptionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    lineHeight: 18
  },
  fmPlay: {
    flexDirection: 'row',
    paddingLeft: 16,
    position: 'absolute',
    left: 0,
    bottom: 10
  },
  playIcon: {
    width: 29,
    height: 32,
  },
  playText: {
    marginLeft: -5,
    paddingTop: 4,
    color: '#fff',
    fontSize: 12,
    fontWeight: '400'
  }
})
