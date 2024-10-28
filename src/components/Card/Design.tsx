import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {CardProp} from '../../screens/Home/Design';

interface DesignProps {
  data: CardProp;
  index: number;
}

export default function Design({data, index}: DesignProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor:
            index == 1
              ? '#FFF5DC'
              : index == 2
              ? '#F8EEFF'
              : index == 3
              ? '#FFEEE7'
              : '#EFF1FF',
        },
      ]}>
      <Text style={styles.heading}>{data.heading}</Text>
      <Text style={styles.cardTxt}>{data.text1}</Text>
      {data?.text2 && <Text style={styles.cardTxt}>{data.text2}</Text>}
      <Text style={styles.date}>{data.date}</Text>
    </View>
  );
}
