import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/Button'
import { List, Divider } from 'react-native-paper'
import NotificationCard from '../components/NotificationCard'

export default function NotificationsScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 5 }}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
