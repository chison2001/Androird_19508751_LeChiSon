
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import flatListData from '../flatListData';

export default function FlatListComponent() {
  return (
    <View style={styles.container}>
      <FlatList

        data={flatListData}
        renderItem={
          ({ item, index }) => {
            return (
              <TouchableOpacity style={styles.listItem}>
                <View style={{flexDirection:'row', width:'70%'}}>
                <View style={{flexDirection: 'row',marginLeft: 10, }}>
                  <Image source={{ uri:item.img }} style={{height: 100, width:100}}></Image>
                </View>
                <View style={{flexDirection:'column', marginLeft:20, marginTop: 15, marginRight:20}}>
                  <Text style={{fontSize:20}}>{item.product}</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:20, color:'grey'}}>Shop </Text>
                    <Text style={{fontSize:20}}>{item.provider}</Text>
                  </View>
                </View>
                </View>

                <TouchableOpacity style={{justifyContent:'center', paddingHorizontal:40, backgroundColor:'red'}}>
                  <Text style={{fontSize:30, color:'white', fontWeight:'bold'}}>Chat</Text>
                </TouchableOpacity>
                
              </TouchableOpacity>
            );
          }
        }
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  listItem:{

    padding: 10,
    flexDirection:'row',
  }
});