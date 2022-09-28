import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React,  { useState } from "react";



export default function ChooseColor({ navigation }) {
  const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
    var blue = require("../assets/xanh.png");
    var red = require("../assets/do.png");
    var silver = require("../assets/bac.png");
    var black = require("../assets/den.png");
    var colors = { red, blue, silver, black };
    var [select, setSelected] = useState(colors.blue);
    var [title_color, setTitle_color] = useState("");
    var [color, setColor] = useState("");
    var [provide, setProvide] = useState("");
    var [provider, setProvider] = useState("");
    var [cost, setCost] = useState("");
    function pressSilver() {
      return (
          setTitle_color(title_color = "Màu: "),
          setColor(color = "Bạc"),
          setProvide(provide = "Cung cấp bởi "),
          setProvider(provider = "Tiki Tradding"),
          setCost(cost = "1.790.000 đ"),
          setSelected(colors.silver)
      );
  }
  function pressRed() {
    return (
        setTitle_color(title_color = "Màu: "),
        setColor(color = "Đỏ"),
        setProvide(provide = "Cung cấp bởi "),
        setProvider(provider = "Tiki Tradding"),
        setCost(cost = "1.790.000 đ"),
        setSelected(colors.red)
    );
}
function pressBlack() {
  return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Bạc"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setSelected(colors.black)
  );
}
function pressBlue() {
  return (
      setTitle_color(title_color = "Màu: "),
      setColor(color = "Bạc"),
      setProvide(provide = "Cung cấp bởi "),
      setProvider(provider = "Tiki Tradding"),
      setCost(cost = "1.790.000 đ"),
      setSelected(colors.blue)
  );
}
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewHeader}>
          <Image source={select} style={styles.imageProduct} />
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{fontSize: 26,}}>{title}</Text>
            <View style={{ flexDirection : "row", justifyContent: "flex-start"}}>
              <Text style={{fontSize: 20,}}>{title_color} :</Text>
              <Text style={{fontSize: 20, fontWeight:'bold'}}>{color}</Text>
            </View>
            <View style={{ flexDirection : "row", justifyContent: "flex-start"}}>
              <Text style={{fontSize: 20,}}>{provide}</Text>
              <Text style={{fontSize: 20, fontWeight:'bold'}}>{provider}</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{cost}</Text>

          </View>
        </View>
        <View style={styles.viewFooter}>
            <Text style={styles.txtChooseColor} >Chọn một màu bên dưới:</Text>
          <TouchableOpacity
            onPress={() => pressSilver()}
          >
            <View style={[styles.color, { backgroundColor: "#C5F1FB" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pressRed()}
          >
            <View style={[styles.color, { backgroundColor: "red" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pressBlack()}
          >
            <View style={[styles.color, { backgroundColor: "black" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pressBlue()}
          >
            <View style={[styles.color, { backgroundColor: "blue" }]}></View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.buttonChoose}
            onPress={() => navigation.navigate("Main", {
                colorSelected: select,
              })
            }
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  viewHeader: {
    backgroundColor: "#fff",
    height: 300,
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  imageProduct: {
    height: 250,
    width: 200,
  },
  viewFooter: {
    height: 500,
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  txtChooseColor:{
    fontSize: 20
  },
  color: {
    height: 100,
    width: 100,
  },
  buttonChoose: {
    width: "90%",
    height:50,
    backgroundColor: "#1952E2",
    marginVertical: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
});