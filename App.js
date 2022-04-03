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
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import WelcomScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomScreen></WelcomScreen>
  )
}

const styles = StyleSheet.create({

});