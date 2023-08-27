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
import FetchData from "../src/hook/FetchData";
import { useIsFocused } from "@react-navigation/native";
function FavoritesScreen({ navigation }) {
  const [bagItemCount, setBagItemCount] = useState(1);
  const [veri, setVeri] = useState([]);
  const isFocused = useIsFocused();
  const handler = async () => {
    let userId = await AsyncStorage.getItem("id");
    const response = await axios.get(
      "http://192.168.1.200:5000/api/favori/" + userId
    );
    setVeri(response.data.$values);
  };

  function handleIncrementBagItem() {
    // Update the state using the setter function
    setBagItemCount((prevItemCount) => prevItemCount + 1);
  }

  function handledecrementBagItem() {
    // Update the state using the setter function
    if (bagItemCount > 1) {
      setBagItemCount((prevItemCount) => prevItemCount - 1);
    } else {
      setBagItemCount((prevItemCount) => prevItemCount);
    }
  }
  useEffect(() => {
    if (isFocused) {
      handler();
    }
  }, [isFocused]);
  const AddToCart = async (item) => {
    let userId = await AsyncStorage.getItem("id");
    console.log(userId);
    axios.post("http://192.168.1.200:5000/api/cart/addtocart", {
      userId: userId,
      productId: item.Product.Id,
      quantity: 1,
      color: item.Product.Color,
      size: item.Product.Size,
    });

    navigation.navigate("Cart");
  };

  const renderItem = ({ item }) => (
    <View style={{ alignItems: "center" }}>
      <View style={[appStyles.FavoritesEachItemContainer]}>
        <View style={appStyles.BagImageContainer}>
          <Image
            style={appStyles.BagImage}
            source={{
              uri: item.Product.ImageUrl,
            }}
          />
        </View>

        <View style={{}}>
          <View>
            <Text
              style={{
                fontSize: 12,
                width: 230,
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {item.Product.Name}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ marginHorizontal: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Color:</Text>
              {item.Product.Color}
            </Text>

            <Text style={{ marginHorizontal: 6 }}>
              <Text style={{ fontWeight: "bold" }}>Size:</Text>
              {item.Product.Size}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
                width: "27%",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {item.Product.Price} $
              </Text>
            </View>

            <View
              style={{
                padding: 10,
                paddingHorizontal: 32,
                flexDirection: "row",
                marginBottom: 10,
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              {item.Product.StarNumber >= 0 && item.Product.StarNumber < 20 ? (
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Text style={{ fontSize: 10 }}>(1)</Text>
                </View>
              ) : (
                ""
              )}
              {item.Product.StarNumber >= 20 && item.Product.StarNumber < 40 ? (
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Text style={{ fontSize: 10 }}>(2)</Text>
                </View>
              ) : (
                ""
              )}
              {item.Product.StarNumber >= 40 && item.Product.StarNumber < 60 ? (
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Text style={{ fontSize: 10 }}>(3)</Text>
                </View>
              ) : (
                ""
              )}
              {item.Product.StarNumber >= 60 && item.Product.StarNumber < 80 ? (
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "black", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Text style={{ fontSize: 10 }}>(4)</Text>
                </View>
              ) : (
                ""
              )}
              {item.Product.StarNumber >= 80 ? (
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Ionicons
                    style={{ color: "gold", fontSize: 13 }}
                    name="star-sharp"
                  />
                  <Text style={{ fontSize: 10 }}>(5)</Text>
                </View>
              ) : (
                ""
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity style={appStyles.FavoritesCloseButton}>
          <Ionicons style={{ color: "black", fontSize: 24 }} name="close" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => AddToCart(item)}
          style={appStyles.FavoritesCartButton}
        >
          <Ionicons style={{ color: "#DB3022", fontSize: 24 }} name="cart" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const categoryNames = [
    "T-Shirts",
    "Jeans",
    "Dresses",
    "Sweaters",
    "Jackets",
    "Skirts",
    "Pants",
    "Shorts",
    "Blouses",
    "Suits",
    "Socks",
    "Hats",
    "Underwear",
    "Activewear",
    "Swimwear",
    "Jumpsuits",
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
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
              Favorites
            </Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons style={{ fontSize: 30 }} name="search" />
            </TouchableOpacity>
          </View>

          <View style={appStyles.CategoriesHorizontalScroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categoryNames.map((categoryName, index) => (
                <TouchableOpacity
                  key={index}
                  style={appStyles.CategoriesHorizontalScrollButton}
                >
                  <Text style={appStyles.CategoriesHorizontalScrollButtonText}>
                    {categoryName}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={appStyles.FilterPricePickerContainer}>
            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  style={{ fontSize: 16, marginHorizontal: 10 }}
                  name="filter"
                />
                <Text style={{ fontSize: 16 }} fontSize="xs">
                  Filters
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5
                  style={{ fontSize: 16, marginHorizontal: 10 }}
                  name="sort-numeric-up"
                />
                <Text style={{ fontSize: 16 }} fontSize="xs">
                  Price: low to high
                </Text>
                <Ionicons
                  style={{ fontSize: 16, marginHorizontal: 10 }}
                  name="chevron-down"
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={appStyles.FlatListLimiterShirts}>
            <FlatList
              data={veri}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              key={1}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default FavoritesScreen;
