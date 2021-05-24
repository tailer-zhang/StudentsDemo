import React, {Component} from 'react';
import { StyleSheet, View, Text,SafeAreaView, NativeModules,Dimensions,
  Image,TextInput, ImageBackground,
  TouchableOpacity
} from "react-native";
import moment from 'moment';
import TabsBox from "./Components/TabsBox";

let weekTransform = {
  0:'周日',
  1:'周一',
  2:'周二',
  3:'周三',
  4:'周四',
  5:'周五',
  6:'周六',
}
class HomeScreen extends Component {
  constructor() {
    super();
    this.state={
      nowDate: moment().format('MM.DD'),
      nowWeek: moment().weekday(),
    }
  }
  render() {
    let {nowDate,nowWeek}  = this.state
    let {navigation}  = this.props
    return (
        <View style={styles.container}>
          <SafeAreaView style={{ flex:0, backgroundColor: 'rgb(126, 199, 182)' }} />
          <View style={styles.bannerWrapper}>
            <Image
              style={styles.banner}
              source={require('../../assets/img/banner.png')}
            />
          </View>
          <View style={styles.searchBarWrapper}>
            <View style={[styles.searchBar,
              {
                shadowColor:'rgb(126, 199, 182)',
                shadowOffset:{width:1,height:5},
                shadowOpacity: 1,
                shadowRadius: 20,
              }
            ]}>
              <TextInput style={styles.searchText}
                placeholder="搜索你感兴趣的内容" />
              <ImageBackground style={styles.searchIcon} source={require('../../assets/icon/searchIcon.png')} />
            </View>
          </View>
          <View style={styles.gridBox}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={
                  ()=>{
                    navigation.navigate('MindEvaluate');
                  }
                }
              >
                <>
                  <Image style={styles.gridIcon} source={require('../../assets/icon/mindEvaluationIcon.png')} />
                  <Text style={styles.gridLabel}>心理评测</Text>
                </>
              </TouchableOpacity>

            <TouchableOpacity
              style={styles.gridItem}
              onPress={
                ()=>{
                  navigation.navigate('MindVideo');
                }
              }
            >
              <>
                <Image style={styles.gridIcon} source={require('../../assets/icon/mindVideoIcon.png')} />
                <Text style={styles.gridLabel}>心理视频</Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={
                ()=>{
                  navigation.navigate('Recruitment');
                }
              }
            >
              <>
                <Image style={styles.gridIcon} source={require('../../assets/icon/mindBookIcon.png')} />
                <Text style={styles.gridLabel}>心理书籍</Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gridItem}
              onPress={
                ()=>{
                  navigation.navigate('MindFM');
                }
              }
            >
              <>
                <Image style={styles.gridIcon} source={require('../../assets/icon/mindFMIcon.png')} />
                <Text style={styles.gridLabel}>心理FM</Text>
              </>
            </TouchableOpacity>
          </View>
          <View style={styles.DateBox}>
            <View style={styles.nowDate}>
              <Text style={styles.nowDateLabel}>{nowDate}</Text>
            </View>
            <View style={styles.nowWeek}>
              <Text  style={styles.nowWeekLabel}>{weekTransform[nowWeek]}</Text>
            </View>
          </View>
          <TabsBox />
        </View>
    );
  }
}

const win = Dimensions.get('window');
const ratio = win.width/888; //888 is actual image width
const { StatusBarManager } = NativeModules;
let statusBarRealHeight;
// StatusBarManager.getHeight(statusBarHeight => {
//   statusBarRealHeight = statusBarHeight
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bannerWrapper: {
    backgroundColor: 'rgb(126, 199, 182)'
  },
  banner: {
    width: win.width,
    height: 624*ratio
  },
  searchBarWrapper: {
    alignItems: 'center',
    marginTop: -30
  },
  searchBar: {
    height: 48,
    borderRadius: 11,
    backgroundColor: '#fff',
    width:318,
    position: 'relative',
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
  gridBox: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 40,
  },
  gridItem: {
    fontSize: 12,
    flex:1,
    alignItems: 'center',
  },
  gridIcon: {
    width: 37,
    height: 34,
    marginBottom: 10
  },
  gridLabel: {
    color: 'rgb(40, 40, 40)',
    fontSize:12
  },
  DateBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center',
    paddingRight: 15,
    fontSize: 10,
    marginTop: 20
  },
  nowDate: {
    color: 'rgb(126, 199, 182)',
    marginRight: 10
  },
  nowDateLabel:{
    color:'rgb(126, 199, 182)',
    fontSize:12
  },
  nowWeek: {
    width:46,
    height: 17,
    backgroundColor:'rgb(126, 199, 182)',
    borderRadius: 2,
    opacity:.8,
    justifyContent:'center'
  },
  nowWeekLabel:{
    color:'#fff',
    textAlign:'center',
    fontSize: 12
  }
})


export default HomeScreen
