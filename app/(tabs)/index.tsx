// web 858914503669-68sagpn0erv4a3rvs1t61bvoa03ke2hu.apps.googleusercontent.com
//android 858914503669-a6hbrj0d3hvc8iom8dsdhqt2la9vt3c7.apps.googleusercontent.com
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
