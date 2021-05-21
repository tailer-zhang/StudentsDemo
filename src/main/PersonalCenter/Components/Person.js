import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'

const Person = () =>{

  return(
    <View style={styles.personWrapper}>
      <Text style={styles.personTitle}>个人中心</Text>
      <View style={styles.personItem}>
        <Image />
      </View>
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
    paddingLeft: 15
  },
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',

  }
})

export default Person
