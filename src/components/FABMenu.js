import * as React from 'react'
import { StyleSheet } from 'react-native'
import { FAB, Portal } from 'react-native-paper'

export default function FABMenu ({ navigation }) {
  const [state, setState] = React.useState({ open: false })
  const onStateChange = ({ open }) => setState({ open })
  const { open } = state

  return (
    <Portal>
      <FAB.Group
        open={open}
        style={styles.fab}
        visible
        icon={open ? 'calendar-today' : 'plus'}
        actions={[
          { icon: 'plus', label: 'Add Device', onPress: () => navigation.replace('AddDeviceScreen') },
          {
            icon: 'star',
            label: 'Favourites',
            onPress: () => console.log('Pressed star'),
          },
          // {
          //   icon: 'email',
          //   label: 'Email',
          //   onPress: () => console.log('Pressed email'),
          // },
          // {
          //   icon: 'bell',
          //   label: 'Remind',
          //   onPress: () => console.log('Pressed notifications'),
          // },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 30,
  },
})
