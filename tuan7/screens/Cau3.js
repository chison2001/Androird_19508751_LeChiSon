
import { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cau3() {
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 1.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const stopBall = () => {
    Animated.timing(ballAnimatedValue, {}).stop();
  };
  const backBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };
  const xVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const animStyle = {
    transform: [
      {
        translateX: xVal,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, animStyle]}>
      </Animated.View>
      <TouchableOpacity
        onPress={moveBall}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Move</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={stopBall}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Stop</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={backBall}
        style={{ alignItems: "center", marginTop: 20 }}
      >
        <View style={{ backgroundColor: "blue", width: 100 }}>
          <Text style={styles.text}>Reset</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ball: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontWeight: "bold",
    color: "red",
    fontSize: 32,
    textAlign: "center",
  },
});