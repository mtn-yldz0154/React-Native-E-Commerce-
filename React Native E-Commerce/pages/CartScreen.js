import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { appStyles } from "../App.styles";
import { Ionicons } from "react-native-vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";

const Stack = createNativeStackNavigator();

function CartScreen({ navigation }) {
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();
  const handler = async () => {
    let userId = await AsyncStorage.getItem("id");
    const response = await axios.get(
      "http://192.168.1.200:5000/api/cart/" + userId
    );
    setData(response.data.$values);
  };
  useEffect(() => {
    if (isFocused) {
      handler();
    }
  }, [isFocused]);
  const CategoryItem = ({ item }) => (
    <View style={appStyles.EachBagItemContainer}>
      <View style={appStyles.BagImageContainer}>
        <Image
          style={appStyles.BagImage}
          source={{ uri: item.Product.ImageUrl }}
        />
      </View>

      <View>
        <View>
          <Text
            style={{
              fontSize: 15,
              width: 270,
              fontWeight: "bold",
              marginLeft: 10,
              marginBottom: 30,
            }}
          >
            {item.Product.Name}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Color:</Text>
            {item.Color}
          </Text>

          <Text style={{ marginHorizontal: 6 }}>
            <Text style={{ fontWeight: "bold" }}>Size:</Text>
            {item.Size}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ marginTop: 10 }}>{item.Quantity} Adet</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: 150,
              color: "red",
            }}
          >
            {item.Product.Price} $
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          width: "27%",
          marginBottom: 10,
        }}
      ></View>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ alignItems: "center" }}>
        <View style={appStyles.MyBagHeaderContainer}>
          <TouchableOpacity style={appStyles.BagScreenSearchButtonContainer}>
            <Ionicons style={{ marginRight: 15, fontSize: 22 }} name="search" />
          </TouchableOpacity>

          <View style={{ marginTop: -50 }}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 34,
                fontWeight: "bold",
                color: "#DB3022",
              }}
              fontSize="xs"
            >
              My Cart{" "}
              <Ionicons
                style={{ fontSize: 30, color: "#DB3022" }}
                name="cart"
              ></Ionicons>
            </Text>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          style={appStyles.CategoriesScroll}
        />

        <TouchableOpacity
          style={appStyles.CartCheckoutButton}
          onPress={() => {
            navigation.navigate("Checkout");
          }}
        >
          <Text style={{ color: "white" }}>CHECKOUT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default CartScreen;
