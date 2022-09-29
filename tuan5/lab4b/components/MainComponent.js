import { SafeAreaView, FlatList,TouchableOpacity,  Image,  StyleSheet, Text, View, StatusBar , TextInput, Dimensions} from 'react-native';
import flatListData from '../flatListData';
import { Icon } from "@rneui/themed";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Rating } from 'react-native-ratings';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name='arrow-back'
          type='Ionicons'
          color='white'
          size={50}
        />
        <SearchBar />
        <Icon
          name='shopping-cart'
          type='MaterialIcons'
          color='white'
          size={50}
        />
        <SimpleLineIcons
          name='options'
          color='white'
          size={50}
        />
           
      </View>
      <View style={styles.body}>
        <FlatList
            numColumns={2}
            data={flatListData}
            renderItem={
              ({ item, index }) => {
                return (
                  <Items
                    product={item.product}
                    price={item.price}
                    discount={item.discount}
                    img={item.img}
                    rating={item.rating}
                    ratingTimes={item.ratingTimes}
                  />
                );
              }
            }
            keyExtractor={(item, index) => index.toString()}
            >

            </FlatList>
      </View>
      <View style={styles.footer}>
        <Image source={require('../assets/menu.png')} style={{marginLeft: 40, marginTop: 25, width:35, height: 35}}></Image>
        <Image source={require('../assets/home.png')}  style={{ marginTop: 25, marginLeft: 220, width:35, height: 35 }}></Image>
        <Image source={require('../assets/goback.png')} style={{marginTop: 25, marginLeft: 200, width: 35, height:35}} ></Image>
      </View>
      
    </SafeAreaView>
  );
}


const SearchBar = () => {
  return (
      <View style={{padding: 15, backgroundColor: 'white', flexDirection:'row'}}>
        <Icon
          name='search'
          type='FontAwesome'
          size={30}
        />
        <TextInput 
          style={{marginLeft:10, fontSize:16, paddingRight: 100}}
          placeholder='Dây cáp USB'
        />
      </View>
  );
};

const Items = ({product, price, discount, img, rating, ratingTimes}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={{flexDirection: 'row' }}>
        <Image source={{ uri:img }} style={{height: 0.7*(Dimensions.get("window").width / 2 -40), width:Dimensions.get("window").width / 2 -40}}></Image>
      </View>
      <Text ellipsizeMode='tail' numberOfLines={3} style={{fontSize:24, marginTop: 10}}>{product}</Text>
      <View style={{flexDirection:'row',marginTop: 10}}>
        <Rating
          ratingCount={5}
          startingValue={rating}
          imageSize={20}
        />
        <Text style={{marginLeft: 20}}>({ratingTimes})</Text>
      </View>
      <View style={{flexDirection:'row',marginTop: 10}}>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>{price}</Text>
        <Text style={{fontSize: 18, marginLeft: 20}}>{discount}</Text>
      </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem:{
    flexDirection:'column',
    justifyContent:'flex-start',
    padding: 10,
    width: Dimensions.get("window").width / 2 ,
  },
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height:'100%',
    width:'100%',
  },
  header:{
    backgroundColor: '#1BA9FF',
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    padding: 10,
    height:'8%',
    width:'100%',
  },
  body:{
    
    height:'84%',
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
  
});
