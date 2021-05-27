import React,{Component} from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, ImageBackground, ScrollView } from "react-native";
import { Tabs } from '@ant-design/react-native';
import Header from "../Components/Header";
import EvaluateList from "./Components/EvaluateList";

export default class MindEvaluate extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        { title: '全部评测' },
        { title: '人格测试' },
        { title: '心理健康' },
        { title: '能力测试' },
      ]
    }
  }
  render() {
    let {tabs} = this.state
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
        <Header navigation={this.props.navigation} title={'心理测评'} />
        <View style={styles.searchBarWrapper}>
          <View style={[styles.searchBar]}>
            <TextInput style={styles.searchText}
                       placeholderTextColor="rgb(81, 81, 81)"
                       selectionColor="rgb(126, 199, 182)"
                       placeholder="搜索你感兴趣的测试" />
            <ImageBackground style={styles.searchIcon} source={require('../assets/icon/searchIcon.png')} />
          </View>
        </View>
        <Tabs
          style={{marginTop: 40}}
          tabBarBackgroundColor={'transparent'}
          tabBarUnderlineStyle={{backgroundColor:'rgb(126, 199, 182)'}}
          tabBarTextStyle={{fontSize:15}}
          tabBarActiveTextColor={'rgb(126, 199, 182)'}
          tabBarInactiveTextColor={'#333'}
          tabs={tabs}>
          <ScrollView style={{flex: 1}}>
            <EvaluateList />
          </ScrollView>

        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248, 250, 253, 1)'
  },
  searchBarWrapper: {
    alignItems: 'center',
    paddingTop: 20
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
})
