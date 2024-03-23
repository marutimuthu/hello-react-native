import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet, View } from 'react-native';
import Background from '../components/Background'
import { theme } from '../core/theme'
import LottieView from 'lottie-react-native';

// For Testing
const user = true

export default function AuthLoadingScreen({ navigation }) {

  function checkAuth() {
    if (user) {
      // User is logged in
      navigation.reset({
        routes: [{ name: 'HomeScreen' }],
      })
    } else {
      // User is not logged in
      navigation.reset({
        routes: [{ name: 'StartScreen' }],
      })
    }
  }
  checkAuth();

  return (
    <View style={styles.container}>
      {/* <LottieView
        source={require('../../assets/business-chart.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          // Show the status bar when the animation finishes
          checkAuth();
        }}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000',
    backgroundColor: '#FFF',
  },
});
