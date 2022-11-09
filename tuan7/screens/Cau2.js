import React, { useRef , useState} from "react";
import { Animated, PanResponder, StyleSheet, View, Button } from "react-native";

const Cau2 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [state, setState] = useState(false);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => state,
    
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x : 0 , y: 0 } },

      ).start();
    },
  });
  const startEvent = () => {
    setState(true);
  }
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
      <Button onPress={startEvent}  title="Bắt đầu"></Button>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Cau2;