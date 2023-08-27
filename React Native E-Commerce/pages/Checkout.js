import React, { useEffect, useState } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  Flex,
  Center,
  FlatList,
  Touchable,
} from "react-native";
import { appStyles } from "../App.styles";
import {
  Ionicons,
  FontAwesome5,
  FontAwesome,
  FontAwesome6,
} from "react-native-vector-icons";
import { Card, Button, Icon } from "@rneui/themed";
import { color } from "@rneui/base/dist";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
function Checkout({ navigation }) {
  const [total, setTotal] = useState(0);
  const [adress, setAdress] = useState("Please add to Address");

  const handler = async () => {
    let userId = await AsyncStorage.getItem("id");
    const resps = await axios.get(
      "http://192.168.1.200:5000/api/order/adress/" + userId
    );
    const response = await axios.get(
      "http://192.168.1.200:5000/api/order/" + userId
    );

    const totals = await axios.get(
      "http://192.168.1.200:5000/api/cart/total/" + userId
    );
    console.log(totals);
    setAdress(resps.data);
    setTotal(totals.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
        <View>
          <View style={appStyles.MainPageNavbar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons style={appStyles.NavbarText} name="chevron-back" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                marginLeft: 20,
                color: "black",
              }}
            >
              Checkout
            </Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons style={{ fontSize: 30 }} name="search" />
            </TouchableOpacity>
          </View>

          <View style={appStyles.CheckoutShippingAddressContainer}>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  alignSelf: "flex-start",
                }}
              >
                Shipping address
              </Text>
            </View>

            <View style={appStyles.CheckoutShippingAddressContainerInsideMain}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}
                >
                  {adress.fullName}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ShippingAddressScreen");
                  }}
                >
                  <Text
                    style={{ color: "#DB3022", fontSize: 16, marginRight: 5 }}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginVertical: 5, marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>
                  {adress.city + "/" + adress.country}
                </Text>
              </View>

              <View style={{ marginVertical: 5, marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>{adress.adress}</Text>
              </View>
            </View>
          </View>

          <View style={appStyles.CheckoutPayment}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>
                Payment
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("PaymentMethodScreen");
                }}
              >
                <Text
                  style={{ color: "#DB3022", fontSize: 16, marginRight: 5 }}
                >
                  Add
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View style={{ marginVertical: 5, marginLeft: 15 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/618px-Mastercard-logo.svg.png",
                  }}
                />
              </View>

              <View style={{ marginVertical: 5, marginLeft: 30 }}>
                <Text numberOfLines={1} style={{ fontSize: 16 }}>
                  **** **** **** 3947
                </Text>
              </View>
            </View>
          </View>

          <View style={appStyles.DeliveryMethod}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>
                Delivery method
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  marginLeft: 15,
                  width: 80,
                  height: 80,
                  backgroundColor: "lightgrey",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/022/101/032/original/fedex-logo-transparent-free-png.png",
                  }}
                />

                <Text style={{ color: "grey", fontSize: 12 }}>2-3 days</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  marginLeft: 15,
                  width: 80,
                  height: 80,
                  backgroundColor: "lightgrey",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/022/101/032/original/fedex-logo-transparent-free-png.png",
                  }}
                />

                <Text style={{ color: "grey", fontSize: 12 }}>2-3 days</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginVertical: 5,
                  marginLeft: 15,
                  width: 80,
                  height: 80,
                  backgroundColor: "lightgrey",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: "https://static.vecteezy.com/system/resources/previews/022/101/032/original/fedex-logo-transparent-free-png.png",
                  }}
                />

                <Text style={{ color: "grey", fontSize: 12 }}>2-3 days</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={appStyles.CheckoutAmountContainer}>
            <View style={appStyles.CheckoutAmountTexts}>
              <Text style={{ color: "grey", fontSize: 12 }}>Order:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                {total} $
              </Text>
            </View>

            <View style={appStyles.CheckoutAmountTexts}>
              <Text style={{ color: "grey", fontSize: 12 }}>Delivery:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>15 $</Text>
            </View>

            <View style={appStyles.CheckoutAmountTexts}>
              <Text style={{ color: "grey", fontSize: 12 }}>Summary:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                {total + 15} $
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SuccessScreen");
            }}
            style={appStyles.CheckoutSubmitOrderButton}
          >
            <Text style={{ color: "white" }}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Checkout;
