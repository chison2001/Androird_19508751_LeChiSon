import { useState } from "react";
import { Animated,  Dimensions,  StyleSheet,  View } from "react-native";
import icon from "../assets/mouse.png";

export default function App() {
    const Width = Dimensions.get("window").width/10;
    const Height = Dimensions.get("window").height/10;
    const maxX = Dimensions.get("window").width - 100;
    const minX = 0;
    const maxY = Dimensions.get("window").height - 200;
    const minY = 0;
  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  const [location2, setLocation2] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  const [location3, setLocation3] = useState({
    marginLeft: new Animated.Value(
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    ),
    marginTop: new Animated.Value(
      Math.floor(Math.random() * (maxY - minY + 1) + minY)
    ),
  });
  function onPress(evt) {
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
    setLocation2({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
    setLocation3({
      marginLeft: Math.floor(Math.random() * (maxX - minX + 1) + minX),
      marginTop: Math.floor(Math.random() * (maxY - minY + 1) + minY),
    });
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={icon}
        style={{
          marginLeft: location.marginLeft,
          marginTop: location.marginTop,
          width: Width,
          height: Height
        }}
      ></Animated.Image>
      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={icon}
        style={{
          marginLeft: location2.marginLeft,
          marginTop: location2.marginTop,
          width: Width,
          height: Height
        }}
      ></Animated.Image>

      <Animated.Image
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        source={icon}
        style={{
          marginLeft: location3.marginLeft,
          marginTop: location3.marginTop,
          width: Width,
          height: Height
        }}
      ></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mouse:{
    width: W
  }
})