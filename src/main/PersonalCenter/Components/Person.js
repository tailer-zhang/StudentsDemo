import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { List } from '@ant-design/react-native';

const Item = List.Item;
const Person = () =>{

  return(
    <View style={styles.personWrapper}>
      <List style={{marginTop: 15}} renderHeader={<Text style={styles.personTitle}>个人中心</Text>}>
        <Item thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/evaluationIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>我的测评</Text>
          </View>
        </Item>
        <Item thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/myQueryIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>我的咨询</Text>
          </View>
        </Item>
        <Item thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/myCollectIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>我的收藏</Text>
          </View>
        </Item>
        <Item  thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/myNewsIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>我的消息</Text>
          </View>
        </Item>
      </List>
      <List style={{marginTop:20}} renderHeader={<Text style={styles.personTitle}>其他</Text>}>
        <Item  thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/setIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>设置</Text>
          </View>
        </Item>
        <Item thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/feedBackIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>帮助反馈</Text>
          </View>
        </Item>
        <Item thumb={<Image style={styles.thumbIcon} source={require('../../../assets/icon/aboutUsIcon.png')} />} arrow="horizontal">
          <View style={styles.labelWrapper}>
            <Text style={styles.itemLabel}>关于我们</Text>
          </View>
        </Item>
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
