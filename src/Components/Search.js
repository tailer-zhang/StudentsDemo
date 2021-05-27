import React, {Component} from 'react';
import { View, TextInput, ImageBackground, StyleSheet } from "react-native";

export default class Search extends Component {

  render() {
    let {placeholder} = this.props;
    return (
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchText}
                     placeholderTextColor="rgb(81, 81, 81)"
                     selectionColor="rgb(126, 199, 182)"
                     placeholder={placeholder} />
          <ImageBackground style={styles.searchIcon} source={require('../assets/icon/searchIcon.png')} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  searchBarWrapper: {
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 15
  },
  searchBar: {
    height: 48,
    borderRadius: 11,
    backgroundColor: '#fff',
    width:318,
    position: 'relative',
    shadowColor:'rgba(126, 199, 182,.6)',
    shadowOffset:{width:1,height:5},
    shadowOpacity: 1,
    shadowRadius: 20,
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

