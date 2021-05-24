import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';


const Header = ({navigation,title}) => {

  return (
    <View style={styles.headerWrap}>
      <TouchableOpacity
        style={styles.backWrapper}
        onPress={()=>{
          navigation.goBack()
        }}
      >
        <Image style={styles.backIcon} source={require('../assets/icon/backIcon.png')} />
      </TouchableOpacity>
      <Text style={styles.tabHeaderTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 44,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9'
  },
  tabHeaderTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: '700'
  },
  backWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    paddingLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  backIcon: {
    width: 25,
    height: 25
  }
})

export default Header
