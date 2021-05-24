import React, {Component} from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, ScrollView} from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";
import Swiper from 'react-native-swiper';

export default class MindVideo extends Component {
  constructor() {
    super();
    this.state = {
      mindVideoData: [
        {
          imgSrc: require('../assets/img/mindVideo01.png')
        },
        {
          imgSrc: require('../assets/img/mindVideo02.png')
        },
        {
          imgSrc: require('../assets/img/mindVideo03.png')
        },
        {
          imgSrc: require('../assets/img/mindVideo04.png')
        }
      ]
    }
  }

  render() {
    let {mindVideoData} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 0, backgroundColor:'#fff'}} />
        <Header navigation={this.props.navigation} title={'心理视频'} />
        <Search placeholder={'搜索你感兴趣的视频'} />
        <View style={{height: 177,marginTop: 15}}>
          <Swiper
            autoplay={true}
            activeDotColor={'rgb(126,199,182)'}
            paginationStyle={{
              bottom: 5
            }}
          >
            <View style={{height: '100%',alignItems:'center'}}>
              <Image style={styles.swiperImg}  source={require('../assets/img/swiper01.png')} />
            </View>
            <View style={{height: '100%',alignItems:'center'}}>
              <Image style={styles.swiperImg} source={require('../assets/img/swiper02.png')} />
            </View>
          </Swiper>
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={styles.mindVideoList}>
            {
              mindVideoData.map((item,index)=>{
                return (
                  <View key={index} style={styles.videoItem}>
                    <Image style={{width: 193}} source={item.imgSrc} />
                  </View>
                )
              })
            }

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 250, 253, 1)'
  },
  swiperImg: {
    width: 330,
  },
  mindVideoList: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  videoItem: {
    width: '50%',
    alignItems:'center',
  }
})
