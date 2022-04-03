import { StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView,
  TouchableOpacity, 
  Button, 
  Alert,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {

  function my_press() {Alert.alert('Clicked item', 'Message of alert')}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={my_press}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/200'}}/>
      </TouchableOpacity>
      <Text onPress={my_press} style={styles.text}>This is the begining</Text>
      <Button onPress={my_press} title='Click me!'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  text: {
    fontSize: 30
  },
  image: {
    width: 300,
    height: 300,

  }
});