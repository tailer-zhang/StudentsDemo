import React from 'react'
import { View, StyleSheet, SafeAreaView, Image,Text } from "react-native";
import Header from "../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";


const MyEvaluation = (props)=> {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
      <Header navigation={props.navigation} title={'我的测评'} />
      <ScrollView style={{flex: 1}}>
        <View style={styles.evaluationWrapper}>
          <Image source={require('../assets/img/evaluationImage001.png')} style={styles.evaluationImage} />
          <View style={{flex: 1}}>
            <Text style={styles.evaluationTitle}>【stanford-Binet】智力测试...</Text>
            <Text>Time：2021年5月25日  10：35</Text>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.evaluationBtn}
              >
                <Text style={styles.evaluationText}>继续答题</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.evaluationWrapper}>
          <Image source={require('../assets/img/evaluationImage002.png')} style={styles.evaluationImage} />
          <View style={{flex: 1}}>
            <Text style={styles.evaluationTitle}>【EPQ-A】艾森克个人...</Text>
            <Text>Time：2021年4月20日  23：15</Text>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.evaluationBtn}
              >
                <Text style={styles.evaluationText}>查看报告</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.evaluationWrapper}>
          <Image source={require('../assets/img/evaluationImage003.png')} style={styles.evaluationImage} />
          <View style={{flex: 1}}>
            <Text style={styles.evaluationTitle}>【SAS】焦虑状态测评</Text>
            <Text>Time：2021年3月5日  18：27</Text>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.evaluationBtn}
              >
                <Text style={styles.evaluationText}>查看报告</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyEvaluation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 251, 1)'
  },
  evaluationWrapper: {
    borderRadius: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  evaluationImage: {
    width: 92,
    height: 92,
    marginRight: 10
  },
  evaluationTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3
  },
  evaluationBtn: {
    width: 84,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'rgba(126, 199, 182, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  evaluationText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700'
  }

})
