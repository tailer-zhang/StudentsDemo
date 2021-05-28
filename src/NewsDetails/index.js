import React, {Component} from 'react';
import { SafeAreaView, View, ScrollView, Image, StyleSheet } from "react-native";
import Header from "../Components/Header";

export default class NewsDetails extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex:0, backgroundColor: '#fff' }} />
        <Header navigation={this.props.navigation} title={'详情'} />
        <ScrollView>
          <View style={{alignItems:'center'}}>
            <Image style={styles.detailsImg} source={require('../assets/img/news01.png')} />
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
  detailsImg: {
    // width: '100%'
  }
})
