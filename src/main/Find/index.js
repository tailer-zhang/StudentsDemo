import React, {Component} from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import Theme from "../../Theme";


export default class Find extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: Theme.mainColor }} />
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
                       placeholder="搜索你感兴趣的内容" />
            <ImageBackground style={styles.searchIcon} source={require('../../assets/icon/searchIcon.png')} />
          </View>

        </View>
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
})
