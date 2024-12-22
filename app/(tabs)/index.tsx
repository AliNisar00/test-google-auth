import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "858914503669-a6hbrj0d3hvc8iom8dsdhqt2la9vt3c7.apps.googleusercontent.com",
    webClientId: "858914503669-68sagpn0erv4a3rvs1t61bvoa03ke2hu.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleSignInWithGoogle();
  }, [response])

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // To add error handler here
    }
  };

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(userInfo)}</Text>
      <Text>Hello world!</Text>
      <Button title="Sign in with Google" onPress={promptAsync} />
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
