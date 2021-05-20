
import React, {Component} from 'react';
import { StyleSheet, View, Text} from "react-native";
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
      ]
    }
  }
  render() {
    let {tabs} = this.state;
    return (
      <View style={{flex:1}}>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor:'rgb(126, 199, 182)'}}
          tabBarTextStyle={{fontSize:16}}
          tabBarActiveTextColor={'rgb(126, 199, 182)'}
          tabBarInactiveTextColor={'#333'}
          tabs={tabs}>
          <View>
            <ListItem />
          </View>
          <View>
            <ListItem />
          </View>
          <View>
            <ListItem />
          </View>
          <View>
            <ListItem />
          </View>
        </Tabs>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default TabsBox
