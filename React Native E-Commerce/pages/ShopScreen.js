import React, { useState } from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
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
import FetchData from "../src/hook/FetchData";

import CategoryButton from "../CategoryButton";

function ShopScreen({ navigation }) {
  const [isWomenSelected, setIsWomenSelected] = useState(true);
  var [sayi, setSayi] = useState(2);

  console.log(datas);
  console.log(sayi);
  function handleWomenPress() {
    setSayi(2);
  }

  function handleMenPress() {
    setSayi(1);
  }
  const { datas } = FetchData("http://192.168.1.200:5000/api/category");
  const CategoryItem = ({ item }) => (
    <View style={appStyles.AllCategoriesContainer}>
      <TouchableOpacity
        style={appStyles.SingleCategoryContainer}
        onPress={() => navigation.navigate("Shirts", { id: item.id })}
      >
        <View style={appStyles.CategoryButtonText}>
          <Text style={{ marginLeft: 5 }}>{item.name}</Text>
        </View>

        <View style={appStyles.CategoryButtonImageContainer}>
          <Image
            style={appStyles.CategoryButtonImage}
            source={{ uri: item.imageUrl }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView>
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
            Categories
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ marginRight: 5 }}
          >
            <Ionicons style={{ fontSize: 30 }} name="exit-outline" />
          </TouchableOpacity>
        </View>

        <View style={appStyles.MenWomenSelector}>
          <TouchableOpacity onPress={handleWomenPress}>
            <Text
              style={{
                borderBottomColor: isWomenSelected ? "#DB3022" : "black",
                borderBottomWidth: isWomenSelected ? 2 : 0,
              }}
            >
              Women
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20 }}>|</Text>

          <TouchableOpacity onPress={handleMenPress}>
            <Text
              style={{
                borderBottomColor: isWomenSelected ? "black" : "#DB3022",
                borderBottomWidth: isWomenSelected ? 0 : 2,
              }}
            >
              Men
            </Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.ViewAllItemsButtonContainer}>
          <TouchableOpacity style={appStyles.ViewAllItemsButton}>
            <Text style={{ color: "white", fontSize: 25 }}>SUMMER SALES</Text>
            <Text style={{ color: "white", fontSize: 15 }}>Up to 50% off</Text>
          </TouchableOpacity>
        </View>

        <View style={appStyles.CategoryTextContainer}>
          <Text style={{ color: "grey", fontSize: 14 }}>Choose category</Text>
        </View>

        <View style={appStyles.ShopScreenMainScrollLimiter}>
          <FlatList
            data={datas}
            renderItem={({ item }) => <CategoryItem item={item} />}
            keyExtractor={(item) => item.id}
            style={appStyles.CategoriesScroll}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ShopScreen;
