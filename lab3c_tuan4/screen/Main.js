import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
import * as React from 'react';


export default function Main({ navigation }) {
  return (
    
    <View style={styles.container}>
        <View style={styles.mainFirst}>
            <Image
                source={require('../assets/xanh.png')}
                style={styles.image} />
            <Text style={styles.txtIntroduce}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.viewEvaluate}>
            <Rating
                ratingCount={5}
                imageSize={40}
                />
                <Text style={styles.txtEvaluate}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.viewPrice}>
                <Text style={styles.txtNewPrice}>1.790.000 đ</Text>
                <Text style={styles.txtOldPrice}>1.790.000 đ</Text>
            </View>
            <View style={styles.viewAds}>
                <Text style={styles.txtAds}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <View style={styles.viewDetailAds}>
                    <Text style={styles.txtDetailAds}>?</Text>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.btnChooseColor} 
                onPress={()=> {navigation.navigate("ChooseColor")}}>
                    <Text style={styles.txtChooseColor}>4 MÀU-CHỌN MÀU              {">"}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.mainLast}>
            <TouchableOpacity style={styles.btnBuy}>
                <Text style={styles.txtBuy}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  mainFirst:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height:'85%',
    width:'100%',
  },
  mainLast:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height:'15%',
    width:'100%',
  },
  image:{
    marginLeft:95,
    
  },
  txtIntroduce:{
    marginLeft:15,
    marginTop: 25,
    color: 'black',
    fontSize: 24,
  },
  viewEvaluate:{
    marginLeft:15,
    marginTop: 20,
    flexDirection:"row",
  },
  txtEvaluate:{
    fontSize: 24,

    marginLeft: 20,
  },
  viewPrice:{
    marginLeft:15,
    flexDirection: "row",
    marginTop: 20,
  },
  txtNewPrice:{
    fontWeight: 'bold',
    fontSize: 26,
  },
  txtOldPrice:{
    marginTop:2,
    color: 'gray',
    textDecorationLine:'line-through',
    fontSize: 22,
    marginLeft:30,
  },
  viewAds:{
    marginLeft:15,
    flexDirection:'row',
    marginTop: 20,
  },
  txtAds:{
    fontSize:20,
    color:'red',
    fontWeight:'bold',
  },
  viewDetailAds:{
    borderWidth: 2,
    borderRadius: 100,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  txtDetailAds:{
    fontSize:18,
  },
  btnChooseColor:{
    width:'90%',
    marginLeft: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection:'row',
    justifyContent:'flex-end',
    padding:10,
    marginTop: 20,

  },
  txtChooseColor:{
    fontSize: 30,
    marginRight: 10,
  },
  btnBuy:{
    backgroundColor:'red',
    width:'90%',
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 50,
    padding:15,
    borderRadius: 10
  },
  txtBuy:{
    color:'white',
    fontSize:30,
    fontWeight:'bold',
  }
});
