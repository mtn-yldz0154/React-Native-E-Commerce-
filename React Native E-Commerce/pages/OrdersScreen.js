import React, { useState } from "react";

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
} from "react-native";
import { appStyles } from "../App.styles";
import { Ionicons, FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { Card, Button, Icon } from "@rneui/themed";
import { color } from "@rneui/base/dist";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect } from "react";

function OrdersScreen({ navigation }) {
  const [orderStateBackground, setOrderStateBackground] = useState("black");
  const [orderStateColor, setOrderStateColor] = useState("white");
  const [activeButton, setActiveButton] = useState("delivered");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");

  const getOrder = async () => {
    let userId = await AsyncStorage.getItem("id");

    const response = await axios.get(
      "http://192.168.1.200:5000/api/order/getOrders/" + userId
    );
    const respon = await axios.get(
      "http://192.168.1.200:5000/api/order/" + userId
    );
    setTotal(respon.data);
    setData(response.data.$values[0]);
    setQuantity(response.data.$values[0].OrderItems.$values.length);
    console.log(response.data.$values[0].OrderDate);

    const orderDate = new Date(response.data.$values[0].OrderDate);
    const formattedDate = new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(orderDate);
    setDate(formattedDate);
  };

  useEffect(() => {
    getOrder();
  }, []);

  function handleOrderColor() {
    setOrderStateColor(orderStateColor === "white" ? "black" : "white");
    setOrderStateBackground(
      orderStateBackground === "black" ? "white" : "black"
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ alignItems: "center", flex: 1 }}>
        <View style={appStyles.MyBagHeaderContainer}>
          <View style={appStyles.BagScreenMyBagTextContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome
                style={{
                  marginLeft: 15,
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "grey",
                }}
                name="chevron-left"
              />
            </TouchableOpacity>

            <Text
              style={{
                marginLeft: 15,
                fontSize: 34,
                fontWeight: "bold",
                color: "#DB3022",
              }}
              fontSize="xs"
            >
              My Orders{" "}
              <FontAwesome5
                style={{ fontSize: 30, color: "#DB3022" }}
                name="boxes"
              ></FontAwesome5>
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "90%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setActiveButton("delivered");
            }}
            style={[
              appStyles.OrderStateButton,
              {
                backgroundColor:
                  activeButton === "delivered" ? "black" : "white",
              },
            ]}
          >
            <Text
              style={{
                color: activeButton === "delivered" ? "white" : "black",
              }}
              fontSize="xs"
            >
              Delivered
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveButton("processing");
            }}
            style={[
              appStyles.OrderStateButton,
              {
                backgroundColor:
                  activeButton === "processing" ? "black" : "white",
              },
            ]}
          >
            <Text
              style={{
                color: activeButton === "processing" ? "white" : "black",
              }}
              fontSize="xs"
            >
              Processing
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveButton("cancelled");
            }}
            style={[
              appStyles.OrderStateButton,
              {
                backgroundColor:
                  activeButton === "cancelled" ? "black" : "white",
              },
            ]}
          >
            <Text
              style={{
                color: activeButton === "cancelled" ? "white" : "black",
              }}
              fontSize="xs"
            >
              Cancelled
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
            style={{ flex: 1, width: "100%", marginVertical: 15 }}
          >
            <View style={appStyles.OrderMainContainer}>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 13 }}
                  fontSize="xs"
                >
                  Order No: {data.OrderNumber}
                </Text>
                <Text style={{ color: "grey", fontSize: 12 }} fontSize="xs">
                  {date}
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  height: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <Text style={{ color: "grey", fontSize: 14 }} fontSize="xs">
                  Quantity:{" "}
                  <Text
                    style={{ fontWeight: "bold", fontSize: 13, color: "black" }}
                    fontSize="xs"
                  >
                    {quantity}
                  </Text>
                </Text>

                <Text style={{ color: "grey", fontSize: 14 }} fontSize="xs">
                  Total Amount:{" "}
                  <Text
                    style={{ fontWeight: "bold", fontSize: 13, color: "black" }}
                    fontSize="xs"
                  >
                    {total + 15}$
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  height: 70,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("OrdersDetailScreen");
                  }}
                  style={{
                    width: "30%",
                    height: 35,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderRadius: 50,
                  }}
                >
                  <Text fontSize="xs">Details</Text>
                </TouchableOpacity>

                {data.StateEnumOrder === 0 ? (
                  <Text style={{ color: "darkorange", fontSize: 14 }}>
                    Waiting
                  </Text>
                ) : (
                  <Text style={{ color: "green", fontSize: 14 }}>
                    Complated
                  </Text>
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default OrdersScreen;
