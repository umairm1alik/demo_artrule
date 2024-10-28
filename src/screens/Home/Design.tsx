import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Header from '../../components/Header';
import Card from '../../components/Card';

export interface CardProp {
  heading: string;
  text1: string;
  text2?: string;
  date: string;
}

interface DesignProps {}
const sampleData: CardProp[] = [
  {
    heading: 'Weight',
    text1: '15 lbs',
    text2: '3 oz',
    date: '1:00 PM Dec 05 2023',
  },
  {
    heading: 'Diaper',
    text1: 'PEE',
    text2: 'MEDIUM',
    date: '2h 55m ago',
  },
  {
    heading: 'Feeding',
    text1: 'Formula',
    text2: '5oz',
    date: '1:00 PM Dec 05 2023',
  },
  {
    heading: 'Sleep',
    text1: '2h 20m',
    date: '3h 35m ago',
  },
];

export default function Design() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require('../../../assets/child.png')}
            style={styles.bannerImg}
          />
          <View style={styles.imgDescr}>
            <View style={styles.alignRow}>
              <Text style={styles.descrTxt}>Christian Bowen</Text>
              <Image
                source={require('../../../assets/Vector.png')}
                style={{height: 10, width: 10}}
              />
            </View>
            <Text style={styles.descrTxt}>1y 2m</Text>
          </View>
        </View>

        <FlatList
          data={sampleData}
          renderItem={({item, index}) => <Card data={item} index={index} />}
          numColumns={2}
          columnWrapperStyle={styles.columnStyles}
        />

        <ImageBackground
          source={require('../../.././assets/bgBanner.png')}
          style={styles.bannerBg}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../../assets/Intersect.png')} />
            <View>
              <Text style={styles.bannerHeading}>Save Big with Bundles!</Text>
              <View style={styles.alignRow}>
                <Text>HONEST</Text>
                <Pressable style={styles.shopbtn}>
                  <Text style={styles.shopTxt}>SHOP NOW</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.bottomCard}>
          <Image
            source={require('../../../assets/forest.png')}
            style={{width: '100%'}}
          />
          <View style={[styles.bottomCont, styles.alignRow]}>
            <View>
              <Text style={styles.milestoneTxt}>Milestones</Text>
              <Text style={styles.milestoneTxtHead}>Month 12</Text>
            </View>
            <View>
              <Image source={require('../../../assets/arrow.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
