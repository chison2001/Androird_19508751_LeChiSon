import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native';

const Cau1 = () => {
  const fadeAnimated = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnimated, {
      toValue: 1,
      duration: 10000,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }
  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={{opacity: fadeAnimated}} onLayout={fadeIn}>
           <Text >Welcome to Animation React Native</Text>
           </Animated.View>
    </SafeAreaView>
   
  )
}
export default Cau1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
