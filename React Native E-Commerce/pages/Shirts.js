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
import FetchData from "../src/hook/FetchData";

function Shirts({ navigation, route }) {
  const { id } = route.params;
  const { datas } = FetchData("http://192.168.1.200:5000/api/category/" + id);

  const [favButton, setFavButton] = useState("heart-outline");
  const [favButtonColor, setFavButtonColor] = useState("black");

  function handleFavButton() {
    setFavButton(favButton == "heart-outline" ? "heart" : "heart-outline");
  }

  function handleFavButtonColor() {
    setFavButtonColor(favButtonColor == "black" ? "red" : "black");
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", { id: item.id });
      }}
      activeOpacity={0.6}
      style={{ flex: 1, margin: 5 }}
    >
      <View style={appStyles.CardContainer}>
        <View style={appStyles.CardImageContainer}>
          <Image style={appStyles.CardImage} source={{ uri: item.imageUrl }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          {item.starNumber >= 0 && item.starNumber < 20 ? (
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
              <Text style={{ fontSize: 10 }}> (1)</Text>
            </View>
          ) : (
            ""
          )}
          {item.starNumber >= 20 && item.starNumber < 40 ? (
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
              <Text style={{ fontSize: 10 }}> (2)</Text>
            </View>
          ) : (
            ""
          )}
          {item.starNumber >= 40 && item.starNumber < 60 ? (
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
              <Text style={{ fontSize: 10 }}> (3)</Text>
            </View>
          ) : (
            ""
          )}
          {item.starNumber >= 60 && item.starNumber < 80 ? (
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
              <Text style={{ fontSize: 10 }}> (4)</Text>
            </View>
          ) : (
            ""
          )}
          {item.starNumber >= 80 ? (
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
              <Text style={{ fontSize: 10 }}> (5)</Text>
            </View>
          ) : (
            ""
          )}
        </View>
        <Text numberOfLines={1} style={appStyles.CardContent2}>
          {item.brand}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 10 }}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 12, color: "red" }}>
          {item.price + " $"}
        </Text>

        <TouchableOpacity
          onPress={() => {
            handleFavButton();
            handleFavButtonColor();
          }}
          style={appStyles.CategoryCardHeartButtonContainer}
        >
          <Ionicons
            style={[
              appStyles.CategoryCardHeartButton,
              { color: favButtonColor },
            ]}
            name={favButton}
          ></Ionicons>
        </TouchableOpacity>

        <View style={appStyles.CategoryCardSaleTextContainer}>
          <Text style={appStyles.CategoryCardSaleText}>-20%</Text>
        </View>
      </View>
    </TouchableOpacity>
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
              Shirts
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
              data={datas}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Shirts;
