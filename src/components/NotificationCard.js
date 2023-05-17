import { Card, Text, Button, Avatar } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

const NotificationCard = () => (
  <View style={styles.container}>
    <Card>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={
          (props) => (
          <Avatar.Icon style={{marginRight:20}}  {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Card.Actions style={styles.container}>
        <Button>Dismiss</Button>
        <Button>Acknowledge</Button>
      </Card.Actions>
    </Card>
  </View>
)

export default NotificationCard

const styles = StyleSheet.create({
  container: {
    margin: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  actions: {
    margin: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
