import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import React,  { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChooseColor() {
    const navigation = useNavigation();
    const blue = require("../assets/xanh.png");
    const red = require("../assets/do.png");
    const silver = require("../assets/bac.png");
    const black = require("../assets/den.png");
    const colors = { red, blue, silver, black };
    const [select, setSelected] = useState(colors.blue);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewHeader}>
          <Image source={select} style={styles.imageProduct} />
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text>Điện Thoại Vsmart Joy 3</Text>
            <Text>Hàng chính hãng</Text>
          </View>
        </View>
        <View style={styles.viewFooter}>
            <Text style={styles.txtChooseColor} >Chọn một màu bên dưới:</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(colors.silver);
            }}
          >
            <View style={[styles.color, { backgroundColor: "#C5F1FB" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(colors.red);
            }}
          >
            <View style={[styles.color, { backgroundColor: "red" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(colors.black);
            }}
          >
            <View style={[styles.color, { backgroundColor: "black" }]}></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(colors.blue);
            }}
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