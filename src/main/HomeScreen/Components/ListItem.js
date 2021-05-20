import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'


class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.listWrapper}>
        <View>
          <Image style={styles.avatorImg} source={require('../../../assets/img/avator01.png')} />
        </View>
        <View style={styles.listRight}>
          <Text style={styles.title}>
            当我熬夜到两三点，才觉得真正拥有
            生活|‘报复性熬夜’心理研究
          </Text>
          <View style={styles.titleAuthor}>
            <ImageBackground style={styles.personIcon} source={require('../../../assets/icon/personIcon.png')}  />
            <Text style={{
              fontSize: 12,
              color: 'rgb(81, 81, 81)',
              fontWeight: '400'
            }}>简单心理：瑾+酒鬼</Text>
          </View>
          <View style={styles.instruction}>
              <Text style={styles.tags}>
                #熬夜·沉迷手机·心理机制
              </Text>
              <View style={styles.browseWrapper}>
                <View style={styles.starBox}>
                  <Text style={styles.starLabel}>56</Text>
                  <ImageBackground style={styles.starIcon} source={require('../../../assets/icon/starIcon.png')} />
                </View>
                <View style={[styles.starBox,styles.conmmentBox]}>
                  <Text style={styles.starLabel}>32</Text>
                  <ImageBackground style={styles.starIcon} source={require('../../../assets/icon/commentIcon.png')} />
                </View>
              </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10
  },
  listLeft: {

  },
  avatorImg: {
    width: 107
  },
  listRight: {
    flex: 1
  },
  title: {
    color: 'rgb(81, 81, 81)',
    fontSize: 14,
    fontWeight: '700'
  },
  personIcon: {
    width: 10,
    height: 11,
    marginRight: 5,
  },
  titleAuthor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  instruction: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tags: {
    color: 'rgb(148, 148, 148)',
    fontSize: 12,
    fontWeight: '400'
  },
  browseWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  starIcon: {
    width: 15,
    height: 15
  },
  conmmentBox: {
    marginLeft: 8
  },
  starLabel: {
    color: 'rgb(148, 148, 148)',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 3
  }
})

export default ListItem
