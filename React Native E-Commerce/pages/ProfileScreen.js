import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { appStyles } from "../App.styles";
import { Ionicons, FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { Card, Button, Icon } from "@rneui/themed";
import { color } from "@rneui/base/dist";
import { RadioButton } from "react-native-paper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function ProfileScreen({ navigation }) {
  const [user, setUser] = useState("");

  const handler = async () => {
    let userId = await AsyncStorage.getItem("id");
    const response = await axios.get(
      "http://192.168.1.200:5000/api/user/" + userId
    );

    console.log(response.data);
    setUser(response.data);
  };
  useEffect(() => {
    handler();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ alignItems: "center" }}>
        <View style={appStyles.MyBagHeaderContainer}>
          <View style={appStyles.BagScreenMyBagTextContainer}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 34,
                fontWeight: "bold",
                color: "#DB3022",
              }}
              fontSize="xs"
            >
              My Profile{" "}
              <FontAwesome
                style={{ fontSize: 30, color: "#DB3022" }}
                name="user"
              ></FontAwesome>
            </Text>
          </View>
        </View>

        <View style={appStyles.ProfileImageNameMailContainer}>
          <View style={{ width: 64, height: 64, borderRadius: 50 }}>
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 50 }}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
              }}
            />
          </View>

          <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {user.firstName + " " + user.lastName}
            </Text>
            <Text style={{ color: "grey" }}>{user.email}</Text>
          </View>
        </View>

        <View style={appStyles.ProfileOptionsContainer}>
          <View>
            <Text
              style={{ marginVertical: 3, fontWeight: "bold", fontSize: 18 }}
            >
              My Orders
            </Text>
            <Text style={{ marginVertical: 3 }}>Already have 1 orders</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OrdersScreen");
            }}
          >
            <FontAwesome5 style={{ fontSize: 18 }} name="chevron-right" />
          </TouchableOpacity>
        </View>

        <View style={appStyles.ProfileOptionsContainer}>
          <View>
            <Text
              style={{ marginVertical: 3, fontWeight: "bold", fontSize: 18 }}
            >
              Shipping Addresses
            </Text>
            <Text style={{ marginVertical: 3 }}>1 addresses</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ShippingAddressScreen");
            }}
          >
            <FontAwesome5 style={{ fontSize: 18 }} name="chevron-right" />
          </TouchableOpacity>
        </View>

        <View style={appStyles.ProfileOptionsContainer}>
          <View>
            <Text
              style={{ marginVertical: 3, fontWeight: "bold", fontSize: 18 }}
            >
              Payment Methods
            </Text>
            <Text style={{ marginVertical: 3 }}>Visa **34</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PaymentMethodScreen");
            }}
          >
            <FontAwesome5 style={{ fontSize: 18 }} name="chevron-right" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ProfileScreen;
