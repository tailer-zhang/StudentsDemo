import React, {Component} from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, ImageBackground, Image, Text, ScrollView } from "react-native";
import Header from "../Components/Header";

export default class Recruitment extends Component {
  constructor() {
    super();
    this.state = {
      recruitData: [
        {
          recruitImg: require('../assets/img/recruit01.png'),
          recruitTitle: '【被试招募】语义分类任务',
          recruitDate: '日期：2021.05.01'
        },
        {
          recruitImg: require('../assets/img/recruit02.png'),
          recruitTitle: '【实验招募】消费行为实验',
          recruitDate: '日期：2021.04.26'
        },
        {
          recruitImg: require('../assets/img/recruit03.png'),
          recruitTitle: '【被试招募】语义分类任务',
          recruitDate: '日期：2021.04.24'
        },
        {
          recruitImg: require('../assets/img/recruit04.png'),
          recruitTitle: '【被试招募】语义分类任务',
          recruitDate: '日期：2021.04.20'
        }
      ]
    }
  }
  render() {
    let {recruitData} = this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
        <Header navigation={this.props.navigation} title={'实验招募'} />
        <View style={styles.searchBarWrapper}>
          <View style={[styles.searchBar]}>
            <TextInput style={styles.searchText}
                       placeholder="搜索你感兴趣的实验" />
            <ImageBackground style={styles.searchIcon} source={require('../assets/icon/searchIcon.png')} />
          </View>
        </View>
        <ScrollView style={{flex:1}}>
          {
            recruitData.map((item,index)=>{
              return (
                <View key={index} style={{alignItems: 'center'}}>
                  <View style={styles.evaluateWrapper}>
                    <Image style={styles.evaluateImg} source={item.recruitImg} />
                    <Text style={styles.evaluateTitle}>{item.recruitTitle}</Text>
                    <Text style={styles.evaluateDes}>{item.recruitDate}</Text>
                  </View>
                </View>
              )
            })
          }

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 250, 253, 1)'
  },
  searchBarWrapper: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 15
  },
  searchBar: {
    height: 48,
    borderRadius: 11,
    backgroundColor: '#fff',
    width:318,
    position: 'relative',
    shadowColor:'rgba(126, 199, 182,.6)',
    shadowOffset:{width:1,height:5},
    shadowOpacity: 1,
    shadowRadius: 20,
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

  evaluateWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 335,
    shadowColor:'rgb(228, 228, 228)',
    shadowOffset:{width:2,height:5},
    shadowOpacity: 1,
    shadowRadius: 20,
    marginTop: 30,
    paddingBottom: 10
  },
  evaluateImg: {
    width: 335,
    height: 149
  },
  evaluateTitle: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    fontWeight: '700',
    fontSize: 16,
    color: '#0D0D0D'
  },
  evaluateDes: {
    fontSize: 14,
    textAlign: 'center'
  }
})
