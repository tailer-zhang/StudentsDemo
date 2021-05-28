import React from 'react'
import { View, StyleSheet, SafeAreaView } from "react-native";
import Header from "../Components/Header";


const MyEvaluation = (props)=> {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
      <Header navigation={props.navigation} title={'我的测评'} />

    </View>
  )
}

export default MyEvaluation

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 251, 1)'
  }

})
