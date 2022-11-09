import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function Cau4() {
  const splashscreen = useRef(new Animated.Value(0)).current;
  const txtWelcome = useRef(new Animated.Value(0)).current;
  const txtIntro = useRef(new Animated.Value(0)).current;
  const [hideScreen, setHideScreen] = useState(false);
  const [hideTextWelcome, setHideTextWelcome] = useState(false);
  const [hideTextIntro, setHideTextIntro] = useState(true);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(splashscreen, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(splashscreen, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtWelcome, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtWelcome, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(txtIntro, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => {
      setHideTextWelcome(false);
      setHideScreen(true);
    }, 2100);
    setTimeout(() => {
      setHideTextWelcome(true);
      setHideTextIntro(false);
    }, 4200);
  }, []);
  return (
    <Animated.View style={styles.container}>
      {hideScreen ? null : (
        <Animated.Image
          style={[{ width: 500, height: 700 }, { opacity: splashscreen }]}
          source={require("../assets/anime.jpg")}
        />
      )}
      {hideTextWelcome ? null : (
        <Animated.View style={{ opacity: txtWelcome }}>
          <Text style={{ fontSize: 20 , color: "white"}}>Welcome to my world</Text>
        </Animated.View>
      )}
      {hideTextIntro ? null : (
        <Animated.View style={{ opacity: txtIntro }}>
          <Text style={{ fontSize: 20 , color: "white"}}>Take wibu save the world</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});