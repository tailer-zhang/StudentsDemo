import React, {Component} from 'react';
import { StyleSheet, View, Text,SafeAreaView, NativeModules,
  Image,Dimensions } from "react-native";


class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <SafeAreaView style={{ flex:0, backgroundColor: 'rgb(126, 199, 182)' }} />
          <View style={styles.bannerWrapper}>
            <Image
              style={styles.banner}
              source={require('../../assets/img/banner.png')}
            />
          </View>

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
    flex: 1
  },
  bannerWrapper: {
    // paddingTop: 47,
    backgroundColor: 'rgb(126, 199, 182)'
  },
  banner: {
    width: win.width,
    height: 624*ratio
  }
})


export default HomeScreen
