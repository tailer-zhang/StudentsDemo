import React, {Component,useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { List } from '@ant-design/react-native';

const Item = List.Item;
const AdviseList = () =>{
  const [list,setList] = useState([{
    thumbIcon:require('../../../assets/icon/calenderIcon.png'),
    itemLabel:'当月排班'
  }, {
    thumbIcon:require('../../../assets/icon/reserveIcon.png'),
    itemLabel:'预约说明'
  }, {
    thumbIcon:require('../../../assets/icon/adviseLocationIcon.png'),
    itemLabel:'咨询地点'
  }, {
    thumbIcon:require('../../../assets/icon/myReseriveIcon.png'),
    itemLabel:'我要预约'
  }
  ])
  return(
    <View style={styles.personWrapper}>
      <List style={{marginTop: 15}} renderHeader={<Text style={styles.personTitle}>咨询预约</Text>}>
        {
          list.map((item,index)=>{
            return (
              <Item key={index} thumb={<Image style={styles.thumbIcon} source={item.thumbIcon}  />} arrow="horizontal">
                <View style={styles.labelWrapper}>
                  <Text style={styles.itemLabel}>{item.itemLabel}</Text>
                </View>
              </Item>
            )
          })
        }
      </List>
    </View>
  )
}

const styles = StyleSheet.create({
  personWrapper:{
    marginTop: 30
  },
  personTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5E5E5E',
    paddingLeft: 15,
    marginBottom: 15
  },
  personItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain'
  },
  labelWrapper: {
    justifyContent: "center",
    height: 40
  },
  itemLabel: {
    color: '#282828',
    fontSize: 16,
    fontWeight: '400'
  }
})

export default AdviseList
