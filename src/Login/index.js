import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";


const Login = ({navigation}) => {

  return(
    <View style={styles.container} >
      <ScrollView style={{flex: 1}}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
        <View style={styles.loginBox}>
          <Image style={styles.logo} source={require('../assets/img/logo.png')} />
          <TextInput
            placeholderTextColor="#BCBCBC"
            selectionColor="rgb(126, 199, 182)"
            style={[styles.phoneInput, {marginBottom: 30}]}
            placeholder="请输入手机号"
          />
          <View style={styles.textWrapper}>
            <TextInput
              placeholderTextColor="#BCBCBC"
              selectionColor="rgb(126, 199, 182)"
              style={[styles.phoneInput]}
              placeholder="输入验证码"
            />
            <View
              style={styles.smsBtn}
            >
              <TouchableOpacity
                activeOpacity={.8}
                style={{height:'100%',alignItems:'center',justifyContent:'center'}}
                onPress={()=>{

                }}
              >
                <Text style={{color: '#5E5E5E'}}>发送验证码</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.loginBtn}
          >
            <Text style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '700'
            }}>手机验证码登录</Text>
          </TouchableOpacity>
          <View style={styles.othersWay}>
            <View style={styles.borderLine}></View>
            <Text style={styles.othersText}>其他登录方式</Text>
            <View style={styles.borderLine}></View>
          </View>
          <TouchableOpacity
            style={{alignItems:'center'}}
            activeOpacity={.8}
            onPress={()=>{
              navigation.navigate('StudentLogin')
            }}
          >
          <Image style={styles.studentLogin} source={require('../assets/icon/studentLogin.png')} />

            <Text style={{
              color: '#7EC7B6',
              fontSize: 16,
              fontWeight: '400'
            }}>学工号登录</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loginBox: {
    alignItems: 'center',
    marginTop: 120
  },
  logo: {
    width: 109,
    height: 109,
    marginBottom: 40
  },
  phoneInput:{
    width: 300,
    height: 50,
    borderRadius:13,
    borderColor: 'rgba(228, 228, 228, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingLeft: 20,
    fontSize: 14
  },
  textWrapper: {
    position: 'relative',
    marginBottom: 30,
  },
  smsBtn: {
    alignItems:'center',
    justifyContent: 'center',
    height: 50,
    width: 100,
    position: 'absolute',
    top: 0,
    right: 0
  },
  loginBtn: {
    width: 300,
    height: 50,
    borderRadius: 13,
    backgroundColor: 'rgba(126, 199, 182, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  othersWay: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderLine: {
    width: 80,
    height: 1,
    backgroundColor:'#BCBCBC'
  },
  othersText: {
    color: '#BCBCBC',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
    marginRight: 10
  },
  studentLogin: {
    width: 31,
    height: 31,
    marginBottom: 5,
    marginTop: 40
  }
})

export default Login
