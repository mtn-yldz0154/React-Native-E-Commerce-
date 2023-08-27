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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PaymentMethodScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [textCard, setTextCard] = useState("**** ***** ***** 9999");
  const [textMonth, setTextMonth] = useState("12/27");
  const [textCvv, setTextCvv] = useState("12/27");
  const handler = async () => {
    let userId = await AsyncStorage.getItem("id");
    const response = await axios.get(
      "http://192.168.1.200:5000/api/user/" + userId
    );

    console.log(response.data);
    setUser(response.data);
  };

  const Checkout = async () => {
    let userId = await AsyncStorage.getItem("id");

    axios.post("http://192.168.1.200:5000/api/order/checkout", {
      userId: userId,
    });

    navigation.navigate("SuccessScreen");
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "rgb(249,249,249)",
          alignItems: "center",
        }}
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
            Payment Method
          </Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons style={{ fontSize: 30 }} name="search" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            width: "95%",
            marginBottom: "-10%",
            marginTop: "5%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "10%" }}>
            Your payment cards
          </Text>
        </View>

        <ScrollView style={{ height: "75%" }}>
          <TouchableOpacity
            style={{
              width: "95%",
              height: "25%",
              marginTop: "12%",
              justifyContent: "center",
              backgroundColor: "rgb(249,249,249)",
            }}
          >
            <ImageBackground
              style={{
                width: 420,
                height: 230,
                alignSelf: "center",
                marginTop: "10%",
              }}
              source={{
                uri: "https://t3.ftcdn.net/jpg/03/89/93/32/360_F_389933228_BPMlKUev7J1u8AhZNhWAwRQqmoYwLDIM.jpg",
              }}
            >
              <View
                style={{
                  width: "95%",
                  height: 75,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15%",
                  marginLeft: "10%",
                }}
              >
                <Text style={{ fontSize: 20, color: "white" }} fontSize="xs">
                  {textCard}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  height: 50,
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "75%",
                  alignSelf: "center",
                  marginTop: "5%",
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View>
                    <Text style={{ color: "white" }} fontSize="xs">
                      {user.firstName + " " + user.lastName}
                    </Text>
                  </View>
                </View>

                <View>
                  <View>
                    <Text style={{ color: "white" }} fontSize="xs">
                      {textMonth}
                    </Text>
                  </View>
                </View>

                <View>
                  <View>
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/618px-Mastercard-logo.svg.png",
                      }}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>

        <TextInput
          style={appStyles.AddressEditTextInput}
          inputMode="text"
          onChangeText={(newText) => setTextCard(newText)}
          placeholder="CradNumber"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          style={appStyles.AddressEditTextInput}
          inputMode="text"
          onChangeText={(newText) => setTextMonth(newText)}
          placeholder="Exparation M/Y"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TextInput
          style={appStyles.AddressEditTextInput}
          onChangeText={(newText) => setTextCvv(newText)}
          inputMode="text"
          placeholder="CVV"
          placeholderTextColor={"grey"}
        ></TextInput>
        <TouchableOpacity
          onPress={Checkout}
          style={appStyles.CheckoutSubmitOrderButton}
        >
          <Text style={{ color: "white" }}>SUBMIT ORDER</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            height: "8%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <Ionicons style={{ color: "white", fontSize: 25 }} name="add" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default PaymentMethodScreen;
