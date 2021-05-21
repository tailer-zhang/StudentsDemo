import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Image, Text } from "react-native";
import Person from "./Components/Person";

class PersonalCenter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#7EC7B6' }} />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.header}>
            <View style={styles.grassWrapper}>
              <Image style={styles.grassImg}  source={require('../../assets/img/grass.png')} />
            </View>
            <View style={styles.noteWrapper}>
              <Image style={styles.noteImg} source={require('../../assets/img/note.png')} />
            </View>
            <View style={styles.peopleWrapper}>
              <Image style={styles.peopleImg} source={require('../../assets/img/peopleImg.png')} />
            </View>
          </View>
          <View style={styles.userBox}>
            <View style={[
              styles.userContainer,
              {
                shadowColor:'rgba(126, 199, 182, .6)',
                shadowOffset:{width:1,height:5},
                shadowOpacity: .7,
                shadowRadius: 20,
              }
            ]}>
              <Image style={styles.userAvator} source={require('../../assets/img/userAvator.png')} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>陈云霞</Text>
                <Text style={styles.userClassLabel}>2017级工业设计1班</Text>
              </View>
              <Image style={styles.moreIcon} source={require('../../assets/icon/moreIcon.png')} />
            </View>
          </View>
          <Person />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer:{
    flex: 1
  },
  header: {
    backgroundColor: '#7EC7B6',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 24
  },
  grassWrapper: {
    paddingBottom: 24
  },
  grassImg :{
    width: 25,
    height: 60
  },
  noteWrapper: {
    paddingBottom: 20
  },
  noteImg: {
    width: 91,
    height: 111
  },
  peopleWrapper: {

  },
  peopleImg: {
    width: 116,
    height: 159
  },
  userBox: {
    alignItems: 'center',
    marginTop:-52
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 318,
    height: 98,
    borderRadius: 11,
    paddingLeft:15,
    paddingRight: 15,
    backgroundColor: '#fff'
  },
  userAvator: {
    width: 73,
    height: 69
  },
  userInfo: {
    flex: 1,
    marginLeft: 10
  },
  userName: {
    color: '#000',
    fontWeight: '400',
    marginBottom: 10,
    fontSize: 18,
  },
  userClassLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  moreIcon: {
    width: 10,
    height: 17
  }

})

export default PersonalCenter
