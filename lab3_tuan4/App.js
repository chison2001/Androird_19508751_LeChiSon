import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function App(props) {
  const [price] = useState("141800");
  const [showTempPrice, setShowTempPrice] = useState("141.800 đ");
  const [showTotalPrice, setShowTotalPrice] = useState("141.800 đ");
  const [amount, setAmount] = useState("1");
  function plus() {
    var soLuong = Number.parseInt(amount) + 1;
    setAmount(soLuong + "");

    var giaGoc = Number.parseInt(price);
    var giaTam = giaGoc * soLuong;
    setShowTempPrice(
      giaTam.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
    );
    var thanhTien = giaGoc * soLuong;
    setShowTotalPrice(
      thanhTien.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
    );
  }
  function sub() {
    if (Number.parseInt(amount) == 1) {
      setAmount("1");
    } else {
      var soLuong = Number.parseInt(amount) - 1;
      setAmount(soLuong + "");

      var giaGoc = Number.parseInt(price);
      var giaTam = giaGoc * soLuong;
      setShowTempPrice(
        giaTam.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
      );
      var thanhTien = giaGoc * soLuong;
      setShowTotalPrice(
        thanhTien.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " đ"
      );
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.viewSanPham}>
          <View style={styles.viewChiTietSanPham}>
            <View style={{ flexDirection: "column" }}>
              <Image
                style={styles.img}
                source={require("./assets/book.png")}
              />
              <Text style={styles.luuMa}>Mã giảm giá để lưu</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.tenSP}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={styles.tenSP}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.giaMoi}>141.800 đ</Text>
              <Text style={styles.giaCu}>141.800 đ</Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={[styles.button, { marginRight: 12 }]}
                    onPress={sub}
                  >
                    <Text style={{ fontWeight: "bold" }}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.txtSoLuong}
                    editable={false}
                    value={amount}
                  ></TextInput>
                  <TouchableOpacity
                    style={[styles.button, { marginLeft: 12 }]}
                    onPress={plus}
                  >
                    <Text style={{ fontWeight: "bold" }}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.muaSau}>Mua sau</Text>
              </View>
              <Text style={styles.xemTaiDay}>Xem tại đây</Text>
            </View>
          </View>
          <View style={styles.maGiamGia}>
            <TouchableOpacity style={styles.btnMa}>
              <View style={styles.iconMa}></View>
              <Text style={styles.txtMa}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnApDung}>
              <Text style={styles.txtApDung}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.xemMa}>
          <Text style={{ fontWeight: "bold" }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={styles.nhapQua}>Nhập tại đây?</Text>
        </View>
        <View style={styles.viewTamTinh}>
          <Text style={styles.labelTamTinh}>Tạm tính</Text>
          <TextInput
            style={styles.txtGiaTam}
            value={showTempPrice}
            editable={false}
          ></TextInput>
        </View>
      </ScrollView>
      <View style={styles.viewBot}>
        <View style={styles.viewThanhTien}>
          <Text style={styles.labelThanhTien}>Thành tiền</Text>
          <TextInput
            style={styles.txtTongTien}
            value={showTotalPrice}
            editable={false}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TouchableOpacity style={styles.btnDatHang}>
            <Text style={styles.txtDatHang}>Tiến hành đặt hàng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(196,196,196)",
    marginTop: 15,
    justifyContent: "space-between",
  },
  viewSanPham: {
    height: 340,
    backgroundColor: "white",
    flexDirection: "column",
  },
  viewChiTietSanPham: {
    flexDirection: "row",
  },
  img: {
    margin: 13,
    height: 160,
    width: 120,
  },
  tenSP: {
    fontWeight: "bold",
    marginTop: 10,
  },
  giaMoi: {
    fontWeight: "bold",
    color: "red",
    fontSize: 18,
    marginTop: 12,
  },
  giaCu: {
    fontWeight: "bold",
    textDecorationLine: "line-through",
    color: "grey",
    marginTop: 12,
  },
  button: {
    height: 20,
    width: 20,
    alignItems: "center",
    backgroundColor: "rgb(196,196,196)",
  },
  txtSoLuong: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    width: 20,
    lineHeight: 15,
    textAlign: "center",
  },
  muaSau: {
    color: "#134FEC",
    fontWeight: "bold",
    fontSize: 15,
  },
  luuMa: {
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 2,
  },
  xemTaiDay: {
    color: "#134FEC",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 12,
  },
  maGiamGia: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginTop: 45,
    justifyContent: "space-between",
  },
  btnMa: {
    height: 50,
    width: 230,
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
  },
  iconMa: {
    height: 20,
    width: 40,
    backgroundColor: "#F2DD1B",
    marginLeft: 10,
    marginRight: 5,
  },
  txtMa: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  btnApDung: {
    height: 50,
    width: 130,
    backgroundColor: "#0A5EB7",
    alignItems: "center",
    justifyContent: "center",
  },
  txtApDung: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  xemMa: {
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
  },
  nhapQua: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "#134FEC",
  },
  viewTamTinh: {
    height: 60,
    marginTop: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelTamTinh: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
  },
  txtGiaTam: {
    marginRight: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  viewBot: {
    height: 140,
    backgroundColor: "white",
  },
  viewThanhTien: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  labelThanhTien: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 15,
    color: "grey",
  },
  txtTongTien: {
    marginRight: 15,
    marginTop: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "red",
  },
  btnDatHang: {
    width: "90%",
    backgroundColor: "#E53935",
    alignItems: "center",
    padding: 15,
  },
  txtDatHang: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});