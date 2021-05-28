import React, {Component} from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from "react-native";
import Header from "../Components/Header";
import { ScrollView } from "react-native-gesture-handler";

export default class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      personInfo: [
        {
          label: '头像',
          personAvatar: require('../assets/img/personAvatar.png')
        },
        {
          label: '姓名',
          itemText:'陈云霞',
        },
        {
          label: '学号',
          itemText:'1701301122',
        },
        {
          label: '昵称',
          itemText:'阿仈',
        },
        {
          label: '学校',
          itemText:'中国计量大学',
        },
        {
          label: '学院',
          itemText:'艺术与传播学院',
        },
        {
          label: '班级',
          itemText:'17工设1班',
        }
      ]
    }
  }
  render() {
    let {personInfo} = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
        <Header navigation={this.props.navigation} title={'个人信息'} />
        <ScrollView>
          {
            personInfo.map((item,index)=>{
              return (
                <View key={index} style={styles.personItem}>
                  <Text style={styles.label}>{item.label}</Text>
                  <View style={styles.labelRight}>
                    {
                      item.personAvatar&&<Image style={styles.personAvatar} source={require('../assets/img/personAvatar.png')} />
                    }
                    {
                      item.itemText&&<Text style={styles.ItemText}>{item.itemText}</Text>
                    }
                  </View>
                </View>
              )
            })
          }

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
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor:'rgba(126, 199, 182, .6)',
    shadowOffset:{width:1,height:2},
    shadowOpacity: 1,
    shadowRadius: 5,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 11,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25
  },
  label: {
    fontWeight: '400',
    color: '#000000',
    fontSize: 16
  },
  labelRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ItemText: {
    fontSize: 14
  },
  personAvatar: {
    width: 55,
    height: 53,
    marginRight: 10
  }
})
