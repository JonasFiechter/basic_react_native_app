import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native'
import React from 'react'

function WelcomeScreen(props) {
  return (
    <ImageBackground 
    style={styles.background}
    source={require('../assets/background.jpg')}>
      <View style={styles.logo_container}>
        <Image style={styles.register_img} source={require('../assets/logo-red.png')}/>
        <Text style={styles.brand_txt}>My basic selling app</Text>
      </View>
      <View style={styles.login_btn}></View>
      <View style={styles.register_btn}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  login_btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#991'
  },  
  register_btn: {
    width: '100%',
    height: 50,
    backgroundColor: '#f91'
  },  
  register_img: {
    width: 100,
    height: 100,
  },
  logo_container: {
    alignItems: 'center',
    position:'absolute',
    alignSelf: 'center',
    top: 70,
  },
  brand_txt: {
    fontStyle: 'italic',
    fontSize: 20,
  }
})

export default WelcomeScreen