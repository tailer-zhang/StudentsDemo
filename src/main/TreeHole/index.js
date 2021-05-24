import React, {Component} from 'react';
import { Image, ImageBackground, SafeAreaView, TextInput, View, StyleSheet, Text, ScrollView } from "react-native";
import { Tabs } from '@ant-design/react-native';
import Theme from "../../Theme";
import TreeItem from "./Components/TreeItem";

export default class TreeHole extends Component {
  constructor() {
    super();
    this.state= {
      tabs: [
        { title: '全部' },
        { title: '精选' },
        { title: '答疑'},
        { title: '科普'},
        { title: '活动'}
      ],
      allTopic: [
        {
          commentNumber: 203,
          topicTitle: '2017级艺术与传播学院工业设计1班毕业典礼将于6月4日在图书馆10楼举行，大家江湖再见~',
          topicImg: require('../../assets/img/topicImg01.jpg'),
          autorAvator: require('../../assets/img/autorAvator01.png'),
          atutorName: '霞姐',
          pubDate: '52s前更新'
        },
        {
          commentNumber: 64,
          topicTitle: '今天环宇的阳光也太好了，终于立夏了，夏天配西瓜yyds！',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator02.png'),
          atutorName: '刘昊然',
          pubDate: '5min前更新'
        },
        {
          commentNumber: 171,
          topicTitle: '2017级艺术与传播学院工业设计1班毕业典礼将于6月4日在图书馆10楼举行，大家江湖再见~',
          topicImg: require('../../assets/img/topicImg03.jpg'),
          autorAvator: require('../../assets/img/autorAvator03.png'),
          atutorName: '班长',
          pubDate: '12min前更新'
        },
        {
          commentNumber: 539,
          topicTitle: '毕业献礼--致最好的我们毕业再见!昨日的晴空永远明朗！',
          topicImg: require('../../assets/img/topicImg04.png'),
          autorAvator: require('../../assets/img/autorAvator04.png'),
          atutorName: '视频剪辑组',
          pubDate: '17min前更新'
        },
        {
          commentNumber: 12,
          topicTitle: '学校的心理健康中心都开着吗？收费吗？',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator05.png'),
          atutorName: '小透明',
          pubDate: '35min前更新'
        },
        {
          commentNumber: 33,
          topicTitle: 'uu们，请问哪里又好的心理医生可以看啊，要怎么预约',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator06.png'),
          atutorName: '茄汁大虾',
          pubDate: '2h前更新'
        },
        {
          commentNumber: 6,
          topicTitle: '收三本大学生心理学原理与应用校选课的',
          topicImg: require('../../assets/img/topicImg07.jpg'),
          autorAvator: require('../../assets/img/autorAvator03.png'),
          atutorName: '番茄黄心蛋',
          pubDate: '2h17min前更新'
        }
      ],
      featureTopic: [
        {
          commentNumber: 171,
          topicTitle: '2017级艺术与传播学院工业设计1班毕业典礼将于6月4日在图书馆10楼举行，大家江湖再见~',
          topicImg: require('../../assets/img/topicImg03.jpg'),
          autorAvator: require('../../assets/img/autorAvator03.png'),
          atutorName: '班长',
          pubDate: '12min前更新'
        },
        {
          commentNumber: 539,
          topicTitle: '毕业献礼--致最好的我们毕业再见!昨日的晴空永远明朗！',
          topicImg: require('../../assets/img/topicImg04.png'),
          autorAvator: require('../../assets/img/autorAvator04.png'),
          atutorName: '视频剪辑组',
          pubDate: '17min前更新'
        },
      ],
      qaTopic: [
        {
          commentNumber: 12,
          topicTitle: '学校的心理健康中心都开着吗？收费吗？',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator05.png'),
          atutorName: '小透明',
          pubDate: '35min前更新'
        },
        {
          commentNumber: 33,
          topicTitle: 'uu们，请问哪里又好的心理医生可以看啊，要怎么预约',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator06.png'),
          atutorName: '茄汁大虾',
          pubDate: '2h前更新'
        },
      ],
      popTopic: [
        {
          commentNumber: 33,
          topicTitle: 'uu们，请问哪里又好的心理医生可以看啊，要怎么预约',
          topicImg: require('../../assets/img/topicImg02.jpg'),
          autorAvator: require('../../assets/img/autorAvator06.png'),
          atutorName: '茄汁大虾',
          pubDate: '2h前更新'
        },
        {
          commentNumber: 6,
          topicTitle: '收三本大学生心理学原理与应用校选课的',
          topicImg: require('../../assets/img/topicImg07.jpg'),
          autorAvator: require('../../assets/img/autorAvator03.png'),
          atutorName: '番茄黄心蛋',
          pubDate: '2h17min前更新'
        }
      ]


    }
  }
  render() {
    let {tabs,allTopic, featureTopic, qaTopic, popTopic} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: Theme.mainColor }} />
        <View style={styles.bannerBox}>
          <Image style={styles.banner} source={require('../../assets/img/treeBanner.png')} />
        </View>
        <View style={styles.searchBarWrapper}>
          <View style={[styles.searchBar,
            {
              shadowColor:'rgb(126, 199, 182)',
              shadowOffset:{width:1,height:5},
              shadowOpacity: 1,
              shadowRadius: 20,
            }
          ]}>
            <TextInput style={styles.searchText}
                       placeholder="搜索你感兴趣的话题  #学习" />
            <ImageBackground style={styles.searchIcon} source={require('../../assets/icon/searchIcon.png')} />
          </View>

        </View>
        <Tabs style={{marginTop: 40}}
          tabs={tabs} tabBarBackgroundColor={'transparent'}
          tabBarUnderlineStyle={{backgroundColor:'rgb(126, 199, 182)'}}
          tabBarTextStyle={{fontSize:16}}
          tabBarActiveTextColor={'rgb(126, 199, 182)'}
          tabBarInactiveTextColor={'#333'}
        >
          <ScrollView style={{flex: 1}}>
            <TreeItem topicData={allTopic} />
          </ScrollView>
          <ScrollView style={{flex: 1}}>
            <TreeItem topicData={featureTopic} />
          </ScrollView>
          <ScrollView style={{flex: 1}}>
            <TreeItem topicData={qaTopic} />
          </ScrollView>
          <ScrollView style={{flex: 1}}>
            <TreeItem topicData={popTopic} />
          </ScrollView>
          <ScrollView style={{flex: 1}}>
            <TreeItem topicData={allTopic} />
          </ScrollView>

        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bannerBox: {
    height: 180,
    backgroundColor: Theme.mainColor,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  banner: {
    width: 223,
    height: 161
  },
  searchBarWrapper: {
    alignItems: 'center',
    marginTop: -30
  },
  searchBar: {
    height: 48,
    borderRadius: 11,
    backgroundColor: '#fff',
    width:318,
    position: 'relative',
  },
  searchText: {
    flex: 1,
    paddingLeft: 20
  },
  searchIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 15,
    top: 9
  },
})
