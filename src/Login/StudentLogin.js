import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground } from "react-native";
import Header from "../Components/Header";
import { ScrollView } from "react-native-gesture-handler";


const StudentLogin = (props) => {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
      <Header navigation={props.navigation} title={'学工号登陆'} />
      <ImageBackground style={styles.loginBg}>
        <ScrollView style={{flex: 1}}>

        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default StudentLogin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loginBg: {
    flex: 1,
  }
})
