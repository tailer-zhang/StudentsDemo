
import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { Tabs} from '@ant-design/react-native';
import ListItem from "./ListItem";
class TabsBox extends Component {
  constructor() {
    super();
    this.state={
      tabs:[
        { title: '每日推荐' },
        { title: '个人成长' },
        { title: '心理健康' },
        { title: '情绪管理' },
      ],
      dayRecommend:[
        {
          avatorImg: require('../../../assets/img/avator01.png'),
          title: '当我熬夜到两三点，才觉得真正拥有生活|‘报复性熬夜’心理研究',
          titleAuthor: '简单心理：瑾+酒鬼',
          tags: '#熬夜·沉迷手机·心理机制',
          starLabel: 56,
          conmmentLabel: 32
        },
        {
          avatorImg: require('../../../assets/img/avator02.png'),
          title: '说出你的秘密：一位心理咨询师的人性记录',
          titleAuthor: '心理咨询师卢悦',
          tags: '#故事·亲密·真实故事',
          starLabel: 64,
          conmmentLabel: 32
        }
      ],
      personGrowth: [
        {
          avatorImg: require('../../../assets/img/avator03.png'),
          title: '寒门博士意外走红：不要低估你10年内能做的事',
          titleAuthor: '武志红&张罐子',
          tags: '#博士·真实故事·学术',
          starLabel: 1120,
          conmmentLabel: 553
        },
        {
          avatorImg: require('../../../assets/img/avator04.png'),
          title: '应用心理学：中国大学生动态情绪面孔库的建设',
          titleAuthor: '刘俊才、冉光明、张琪、胡艳红、',
          tags: '#大学生·身体语言',
          starLabel: 36,
          conmmentLabel: 125
        },
      ],
      mindHealth: [
        {
          avatorImg: require('../../../assets/img/avator05.png'),
          title: '寒门博士意外走红：不要低估你10年内能做的事',
          titleAuthor: '武志红&张罐子',
          tags: '#博士·真实故事·学术',
          starLabel: 1120,
          conmmentLabel: 553
        },
        {
          avatorImg: require('../../../assets/img/avator06.png'),
          title: '应用心理学：中国大学生动态情绪面孔库的建设',
          titleAuthor: '刘俊才、冉光明、张琪、胡艳红、',
          tags: '#大学生·身体语言',
          starLabel: 36,
          conmmentLabel: 125
        },
      ]

    }
  }
  render() {
    let {tabs, dayRecommend, personGrowth, mindHealth} = this.state;
    return (
        <Tabs
          tabBarUnderlineStyle={{backgroundColor:'rgb(126, 199, 182)'}}
          tabBarTextStyle={{fontSize:16}}
          tabBarActiveTextColor={'rgb(126, 199, 182)'}
          tabBarInactiveTextColor={'#333'}
          tabs={tabs}>
            <ScrollView style={{flex: 1}}>
              <ListItem listData={dayRecommend} />
            </ScrollView>
            <ScrollView style={{flex: 1}}>
              <ListItem listData={personGrowth} />
            </ScrollView>
            <ScrollView style={{flex: 1}}>
              <ListItem listData={mindHealth} />
            </ScrollView>
            <ScrollView style={{flex: 1}}>
              <ListItem listData={personGrowth} />
            </ScrollView>
        </Tabs>
    )
  }
}

const styles = StyleSheet.create({

})

export default TabsBox
