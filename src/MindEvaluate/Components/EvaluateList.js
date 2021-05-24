import React, {Component} from 'react';
import { View, Image, Text, StyleSheet} from 'react-native'

export default class EvaluateList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.evaluateWrapper}>
          <Image style={styles.evaluateImg} source={require('../../assets/img/evaluate01.png')} />
          <Text style={styles.evaluateTitle}>【16PF--大学】</Text>
          <Text style={styles.evaluateDes}>卡特尔16种人格测试</Text>
        </View>
        <View style={styles.evaluateWrapper}>
          <Image style={styles.evaluateImg} source={require('../../assets/img/evaluate02.png')} />
          <Text style={styles.evaluateTitle}>【成人EPQ】</Text>
          <Text style={styles.evaluateDes}>艾森克个性测验</Text>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
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
