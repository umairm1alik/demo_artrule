import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

export default function Design() {
  return (
    <View style={[styles.header, styles.alignContent]}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <View style={[styles.rightContainer, styles.alignContent]}>
        <Image
          source={require('../../../assets/notification.png')}
          style={[styles.profile, {marginEnd: 10, width: 36}]}
        />
        <Image
          source={require('../../../assets/profile.png')}
          style={styles.profile}
        />
      </View>
    </View>
  );
}
