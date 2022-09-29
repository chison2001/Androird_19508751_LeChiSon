
import { SafeAreaView, Image,  StyleSheet, Text, View } from 'react-native';
import FlatListComponent from './components/FlatListComponent'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBar} >
            <Image source={require('./assets/back.png')} style={{width:35, height: 35}}></Image>
            <Text style={{color:'white', marginLeft: 220, fontSize: 30 }}>Chat</Text>
            <Image source={require('./assets/buy.png')} style={{marginLeft: 200, width: 35, height:35}} ></Image>
        </View>
        <View style={styles.headerText} >
          <Text style={{fontSize: 24, marginLeft:40, marginTop: 40}}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chat với shop!
          </Text>
        </View>
      </View>
      <View style={styles.body}><FlatListComponent></FlatListComponent></View>
      <View style={styles.footer}>
        <Image source={require('./assets/menu.png')} style={{marginLeft: 40, marginTop: 25, width:35, height: 35}}></Image>
        <Image source={require('./assets/home.png')}  style={{ marginTop: 25, marginLeft: 220, width:35, height: 35 }}></Image>
        <Image source={require('./assets/goback.png')} style={{marginTop: 25, marginLeft: 200, width: 35, height:35}} ></Image>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height:'100%',
    width:'100%',
  },
  header:{
    
    height:'18%',
    width:'100%',
  },
  body:{
    
    height:'74%',
    width:'100%',
  },
  footer:{
    backgroundColor: '#1BA9FF',
    height:'8%',
    width:'100%',
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headerBar:{
    backgroundColor: '#1BA9FF',
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
  },
});
