import React, {Component,useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { List } from '@ant-design/react-native';

const Item = List.Item;
const Person = ({navigation}) =>{
  const [personCenterList] = useState([
      {
        thumbIcon: require('../../../assets/icon/evaluationIcon.png'),
        itemLabel: '我的测评'
      },
      {
        thumbIcon: require('../../../assets/icon/myQueryIcon.png'),
        itemLabel: '我的咨询'
      },
      {
        thumbIcon: require('../../../assets/icon/myCollectIcon.png'),
        itemLabel: '我的收藏'
      },
      {
        thumbIcon: require('../../../assets/icon/myNewsIcon.png'),
        itemLabel: '我的消息'
      }
    ]);
  const [otherList] = useState([
    {
      thumbIcon: require('../../../assets/icon/setIcon.png'),
      label: '设置'
    },
    {
      thumbIcon: require('../../../assets/icon/feedBackIcon.png'),
      label: '帮助反馈'
    },
    {
      thumbIcon: require('../../../assets/icon/aboutUsIcon.png'),
      label: '关于我们'
    },
  ])
  return(
    <View style={styles.personWrapper}>
      <List style={{marginTop: 15}} renderHeader={<Text style={styles.personTitle}>个人中心</Text>}>
        {
          personCenterList.map((item, index)=>{
            return (
              <Item
                key={index} thumb={<Image style={styles.thumbIcon} source={item.thumbIcon} />} arrow="horizontal">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={()=>{

                  }}
                  style={styles.labelWrapper}
                >
                  <Text style={styles.itemLabel}>{item.itemLabel}</Text>
                </TouchableOpacity>
              </Item>
            )
          })
        }
      </List>
      <List style={{marginTop:20}} renderHeader={<Text style={styles.personTitle}>其他</Text>}>
        {
          otherList.map((item, index)=>{
            return (
              <Item key={index}  thumb={<Image style={styles.thumbIcon} source={item.thumbIcon} />} arrow="horizontal">
                <View style={styles.labelWrapper}>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                </View>
              </Item>
            )
          })
        }
      </List>
    </View>
  )
}

const styles = StyleSheet.create({
  personWrapper:{
    marginTop: 30
  },
  personTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5E5E5E',
    paddingLeft: 15,
    marginBottom: 15
  },
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  labelWrapper: {
    justifyContent: "center",
    height: 40
  },
  itemLabel: {
    color: '#282828',
    fontSize: 16,
    fontWeight: '400'
  }
})

export default Person
