import React, {Component} from 'react';
import { SafeAreaView, View, Image, StyleSheet, TextInput, ImageBackground } from "react-native";
import AdviseList from "./Components/AdviseList";

import Theme from '../../Theme';
class Aadvisory extends Component {

  render() {
    return (
      <View style={styles.container} >
        <SafeAreaView style={{ flex:0, backgroundColor: Theme.mainColor }} />
        <View style={styles.bannerBox}>
          <Image style={styles.banner} source={require('../../assets/img/adviseBanner.png')} />
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
                       placeholder="搜索你想要的咨询师/咨询时间" />
            <ImageBackground style={styles.searchIcon} source={require('../../assets/icon/searchIcon.png')} />
          </View>

        </View>
        <AdviseList />
      </View>
    )
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
    width: 210,
    height: 133
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

export default Aadvisory
