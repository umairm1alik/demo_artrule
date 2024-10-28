import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {Fragment} from 'react';
import Home from './src/screens/Home';
import Navigation from './src/Navigation/Navigation';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={Platform.OS === 'android' ? '#FFFFFF' : 'transparent'}
        translucent={Platform.OS === 'android'}
        barStyle="dark-content"
      />

      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
