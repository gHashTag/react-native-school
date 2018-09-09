import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => (
  <div>
    <div style={{margin: 'auto', maxWidth: 500}}>
      <h2 style={{fontWeight: 'normal'}}>
        Welcome to Reframe
      </h2>
      <Text style={{ fontSize: 80, textAlign: 'right' }} >
        Home 
      </Text>
    </div>
  </div>
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
