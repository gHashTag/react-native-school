import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
//import logo from '../images/ReactNative.png'
import logo from '../images/youtube.png'

const Welcome = () => (
  <View>
    <Text style={{ fontSize: 74 }} >
      Уроки React Native 
    </Text>
    <Text style={{ fontSize: 27 }} >
      Разработка мобильных приложений под iOS и Android
    </Text>
    <Image source={logo} style={{width: 400, height: 400}} />
    <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width: 400, height: 400}} />
  </View>
)



const WelcomePage = {
    route: '/',
    view: Welcome,

    title: 'Уроки React Native', // <title>
    description: 'This is a Reframe App.', // <meta name="description">

    // The landing page doesn't contain any interactive views.
    // Thus we don't have to render it in the browser.
    // More infos at "Usage Manual - doNotRenderInBrowser".
    doNotRenderInBrowser: true,
};

export default WelcomePage;
