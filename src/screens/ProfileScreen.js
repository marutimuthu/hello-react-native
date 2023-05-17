import React from 'react'
import { View, StyleSheet } from 'react-native'
// import { logoutUser } from '../api/auth-api'
import Button from '../components/Button'

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper'
import { SettingsIcon } from '../assets/icons'

export default function ProfileScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              size={80}
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1195087399661056019/pYAaQSJS_400x400.jpg',
              }}
            />
            <Title style={styles.title}>Maruti M.</Title>
            <Caption style={styles.caption}>@maruti_m</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  54
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  199
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
            <Button
              mode="contained"
              onPress={navigation.replace('ProfileScreen')}
              style={{ width: 120, marginTop: 20 }}
            >
              Logout
            </Button>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContent: {
    // flex: 1,
  },
  userInfoSection: {
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
