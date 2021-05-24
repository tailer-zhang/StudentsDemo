import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'


export default class TreeItem extends Component {
  constructor() {
    super();
  }
  render() {
    let {topicData} = this.props;
    return (
      <>
        {
          topicData.map((item,index)=>{
            return (
              <View key={index} style={styles.treeListBox}>
                <View style={styles.treeWrapper}>
                  <View style={styles.leftItem}>
                    <Image style={styles.leftIcon} source={require('../../../assets/icon/commentIcon.png')} />
                    <Text style={styles.iconLabel}>{item.commentNumber}</Text>
                  </View>
                  <View style={styles.middleItem}>
                    <Text style={styles.middleLabel}>
                      {item.topicTitle}
                    </Text>
                  </View>
                  <View style={styles.rightItem}>
                    <Image style={styles.rightImg} source={item.topicImg} />
                  </View>
                </View>
                <View style={styles.authorInfo}>
                  <View style={styles.author}>
                    <Image style={styles.authorAvator} source={item.autorAvator} />
                    <Text style={styles.authorLabel}>{item.atutorName}</Text>
                  </View>
                  <View>
                    <Text style={styles.pubDate}>{item.pubDate}</Text>
                  </View>
                </View>
              </View>
            )
          })
        }

      </>
    );
  }
}

const styles = StyleSheet.create({
  treeListBox: {
    paddingTop: 30,
    paddingBottom: 10,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9'
  },
  treeWrapper: {
    flexDirection: 'row',

  },
  leftItem: {
    paddingLeft: 10,
    width: 50
  },
  leftIcon: {
    width: 15,
    height: 15,
    marginBottom: 10
  },
  iconLabel: {
    fontWeight: '400',
    color: '#282828',
    fontSize: 12
  },
  middleItem: {
    flex:1,
    paddingRight: 5
  },
  middleLabel: {
    fontSize: 14,
    color: '#282828',
    fontWeight: '700'
  },
  rightItem: {
    paddingRight: 10
  },
  rightImg: {
    width: 79,
    height: 52
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 50,
    flex: 1,
  },
  authorAvator: {
    width: 22,
    height: 22,
    marginRight: 5
  },
  authorLabel: {
    color: '#6B6B6B',
    fontWeight: '400',
    fontSize: 12
  },
  pubDate: {
    color: '#949494',
    fontSize: 12,
    fontWeight: '400',
    paddingRight: 10
  }
})


