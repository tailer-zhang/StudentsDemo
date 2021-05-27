import React, {Component} from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet,
  TextInput, View, Text,ScrollView } from "react-native";
import Theme from "../../Theme";


export default class Find extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: Theme.mainColor }} />
        <ScrollView style={{flex: 1}}>
          <View style={styles.bannerBox}>
            <Image style={styles.banner} source={require('../../assets/img/findBanner.png')} />
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
                         placeholderTextColor="rgb(81, 81, 81)"
                         selectionColor="rgb(126, 199, 182)"
                         placeholder="搜索你感兴趣的内容" />
              <ImageBackground style={styles.searchIcon} source={require('../../assets/icon/searchIcon.png')} />
            </View>
          </View>
          <View style={styles.viceHeader}>
            <Text style={styles.leftLabel}>趣味心理</Text>
            <View style={styles.moreWrapper}>
              <Text style={styles.moreLabel}>更多</Text>
              <Image style={styles.moreIcon} source={require('../../assets/icon/moreIconGray.png')} />
            </View>
          </View>
          <View style={styles.funny}>
            <View style={styles.funnyWrapper}>
              <Image style={styles.funnyImg} source={require('../../assets/img/funny01.png')} />
              <Text style={styles.funnyTitle}>记得早睡做噩梦噢</Text>
              <Text style={styles.funnyContent}>科学发现，做噩梦对身体有好处！</Text>
              <Text style={styles.funnyDate}>2021-04-12</Text>
            </View>
          </View>
          <View style={styles.viceHeader}>
            <Text style={styles.leftLabel}>心理漫画</Text>
            <View style={styles.moreWrapper}>
              <Text style={styles.moreLabel}>更多</Text>
              <Image style={styles.moreIcon} source={require('../../assets/icon/moreIconGray.png')} />
            </View>
          </View>
          <View style={[styles.funny,{paddingBottom: 30}]}>
            <View style={styles.funnyWrapper}>
              <Image style={styles.funnyImg} source={require('../../assets/img/comics01.jpg')} />
              <Text style={styles.funnyTitle}>拖延症的自救指南</Text>
              <Text style={styles.funnyContent}>认真拖延，也有好处</Text>
              <Text style={styles.funnyDate}>2021-04-12</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bannerBox: {
    height: 180,
    backgroundColor: Theme.mainColor,
    alignItems:'center',
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  banner: {
    width: 195,
    height: 149
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
  viceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 40,
  },
  leftLabel: {
    color: '#5E5E5E',
    fontWeight: '700',
    fontSize: 18
  },
  moreWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  moreLabel: {
    color: '#5E5E5E',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 10
  },
  moreIcon: {
    width: 10,
    height: 17
  },
  funny: {
    paddingTop: 20,
    alignItems: 'center'
  },
  funnyWrapper: {
    width: 190,
    height: 261,
    borderRadius: 10,
    shadowColor:'rgba(126, 199, 182, .8)',
    shadowOffset:{width:2,height:5},
    shadowOpacity: 1,
    shadowRadius: 15,
    backgroundColor: '#fff'
  },
  funnyImg: {
    width: '100%',
    height: 183
  },
  funnyTitle: {
    fontWeight: '700',
    fontSize: 14,
    paddingLeft: 4,
    marginTop: 5,
  },
  funnyContent: {
    fontSize: 11,
    fontWeight: '400',
    color: '#333',
    paddingLeft: 4,
    marginTop: 10,
    marginBottom: 12
  },
  funnyDate: {
    color: '#333',
    fontWeight: '400',
    fontSize: 13,
    paddingBottom: 12,
    paddingLeft: 4,
  },

})
