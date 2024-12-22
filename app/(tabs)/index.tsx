// web 858914503669-68sagpn0erv4a3rvs1t61bvoa03ke2hu.apps.googleusercontent.com
//android 858914503669-a6hbrj0d3hvc8iom8dsdhqt2la9vt3c7.apps.googleusercontent.com
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

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
