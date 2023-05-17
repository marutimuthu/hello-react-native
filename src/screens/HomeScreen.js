import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Provider, Portal, FAB } from 'react-native-paper'
import Button from '../components/Button'
import TopBar from '../components/TopBar'
import FABMenu from '../components/FABMenu'
import DeviceCard from '../components/DeviceCard'

export default function HomeScreen({ navigation }) {
  const [state, setState] = React.useState({ open: false })
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  return (
    <>
      <View style={[styles.container]}>
        {/* <FABMenu /> */}
        <ScrollView contentContainerStyle={{ paddingHorizontal: 5 }}>
          <DeviceCard onPress={navigation.openDrawer} />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
        </ScrollView>
        {/* <Button
          mode="contained"
          onPress={navigation.openDrawer}
          style={{ width: 160 }}
        >
          Open Menu
        </Button> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
})
