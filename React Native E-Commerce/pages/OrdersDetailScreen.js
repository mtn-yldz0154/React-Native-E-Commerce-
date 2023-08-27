import React, { useState, useEffect } from "react";

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
  FlatList,
  Flex,
  Center,
} from "react-native";
import { appStyles } from "../App.styles";
import { Ionicons, FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { Card, Button, Icon } from "@rneui/themed";
import { color } from "@rneui/base/dist";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function OrdersDetailScreen({ navigation }) {
  const [orderStateBackground, setOrderStateBackground] = useState("black");
  const [orderStateColor, setOrderStateColor] = useState("white");
  const [activeButton, setActiveButton] = useState("delivered");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
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
    setData2(response.data.$values[0].OrderItems.$values);
    console.log(response.data.$values[0].OrderItems.$values);
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
          style={{ flex: 1, width: "100%", marginVertical: 15 }}
        >
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
              Order Details
            </Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons style={{ fontSize: 30 }} name="search" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: "5%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 13 }} fontSize="xs">
              Order No: {data.OrderNumber}
            </Text>
            <Text style={{ color: "grey", fontSize: 12 }} fontSize="xs">
              {date}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              height: "5%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 13 }} fontSize="xs">
              {quantity} items
            </Text>
            {data.StateEnumOrder === 0 ? (
              <Text style={{ color: "darkorange", fontSize: 14 }}>Waiting</Text>
            ) : (
              <Text style={{ color: "green", fontSize: 14 }}>Complated</Text>
            )}
          </View>

          <View style={{ flex: 4, alignItems: "center", width: "100%" }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ alignItems: "center" }}
              style={{ flex: 1, width: "100%", marginVertical: 15 }}
            >
              {data2.map((item) => (
                <View style={appStyles.OrderDetailMainContainer}>
                  <View
                    style={{
                      width: "35%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}
                      source={{ uri: item.Product.ImageUrl }}
                    />
                  </View>

                  <View style={{ width: "65%", height: "100%", padding: 5 }}>
                    <View
                      style={{
                        flex: 1,
                        padding: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 11,
                          marginTop: 8,
                          fontWeight: "bold",
                        }}
                        fontSize="xs"
                      >
                        {item.Product.Name}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        padding: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          marginLeft: 120,
                          color: "grey",
                        }}
                        fontSize="xs"
                      >
                        {item.Product.Brand}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        padding: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        columnGap: 10,
                      }}
                    >
                      <Text style={{ color: "grey" }}>
                        Color:{" "}
                        <Text style={{ color: "black" }}>
                          {item.Product.Color}
                        </Text>
                      </Text>
                      <Text style={{ color: "grey" }}>
                        Size:{" "}
                        <Text style={{ color: "black" }}>
                          {item.Product.Size}
                        </Text>
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        padding: 5,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        columnGap: 10,
                      }}
                    >
                      <Text style={{ color: "grey" }}>
                        Units: <Text style={{ color: "black" }}>1</Text>
                      </Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.Product.Price}$
                      </Text>
                    </View>
                  </View>
                </View>
              ))}

              {/* <View style={appStyles.OrderDetailMainContainer}>
                <View
                  style={{
                    width: "35%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    source={require("../img/4.jpg")}
                  />
                </View>

                <View style={{ width: "65%", height: "100%", padding: 5 }}>
                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, fontWeight: "bold" }}
                      fontSize="xs"
                    >
                      Pullover
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={{ fontSize: 13, color: "grey" }} fontSize="xs">
                      Mango
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Color: <Text style={{ color: "black" }}>Grey</Text>
                    </Text>
                    <Text style={{ color: "grey" }}>
                      Size: <Text style={{ color: "black" }}>L</Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Units: <Text style={{ color: "black" }}>1</Text>
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>51$</Text>
                  </View>
                </View>
              </View>

              <View style={appStyles.OrderDetailMainContainer}>
                <View
                  style={{
                    width: "35%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    source={require("../img/4.jpg")}
                  />
                </View>

                <View style={{ width: "65%", height: "100%", padding: 5 }}>
                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, fontWeight: "bold" }}
                      fontSize="xs"
                    >
                      Pullover
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={{ fontSize: 13, color: "grey" }} fontSize="xs">
                      Mango
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Color: <Text style={{ color: "black" }}>Grey</Text>
                    </Text>
                    <Text style={{ color: "grey" }}>
                      Size: <Text style={{ color: "black" }}>L</Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Units: <Text style={{ color: "black" }}>1</Text>
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>51$</Text>
                  </View>
                </View>
              </View>

              <View style={appStyles.OrderDetailMainContainer}>
                <View
                  style={{
                    width: "35%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                    source={require("../img/4.jpg")}
                  />
                </View>

                <View style={{ width: "65%", height: "100%", padding: 5 }}>
                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text
                      style={{ fontSize: 18, fontWeight: "bold" }}
                      fontSize="xs"
                    >
                      Pullover
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Text style={{ fontSize: 13, color: "grey" }} fontSize="xs">
                      Mango
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Color: <Text style={{ color: "black" }}>Grey</Text>
                    </Text>
                    <Text style={{ color: "grey" }}>
                      Size: <Text style={{ color: "black" }}>L</Text>
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 5,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      columnGap: 10,
                    }}
                  >
                    <Text style={{ color: "grey" }}>
                      Units: <Text style={{ color: "black" }}>1</Text>
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>51$</Text>
                  </View>
                </View>
              </View> */}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default OrdersDetailScreen;
