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

function AddingShippingAddressScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(249,249,249)" }}>
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
            Adding Shipping Address
          </Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons style={{ fontSize: 30 }} name="search" />
          </TouchableOpacity>
        </View>

        <View>
          <TextInput
            style={appStyles.AddressEditTextInput}
            inputMode="text"
            placeholder="Full Name"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={appStyles.AddressEditTextInput}
            inputMode="text"
            placeholder="Address"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={appStyles.AddressEditTextInput}
            inputMode="text"
            placeholder="City"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={appStyles.AddressEditTextInput}
            inputMode="text"
            placeholder="State/Province/Region"
            placeholderTextColor={"grey"}
          ></TextInput>

          <TextInput
            style={appStyles.AddressEditTextInput}
            inputMode="text"
            placeholder="Country"
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>

        <TouchableOpacity
          /* onPress={() => { navigation.navigate("SuccessScreen") }} */ style={
            appStyles.AddAddressButton
          }
        >
          <Text style={{ color: "white" }}>SAVE ADDRESS</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default AddingShippingAddressScreen;
