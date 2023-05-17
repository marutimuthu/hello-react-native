import { Card, Text, Button } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const DeviceCard = () => (
  <View style={styles.container}>
    <Card>
      <Card.Cover style={styles.cover} source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content
        onPress={() => {
          alert('Hello')
        }}
      >
        <Text variant="titleLarge">Device Slug</Text>
        <Text variant="bodyMedium">MacID</Text>
      </Card.Content>
    </Card>
  </View>
)

export default DeviceCard

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  actions: {
    margin: 10,
  },
  cover: {
    margin: 10, 
  },
})
