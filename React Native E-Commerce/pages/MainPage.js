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
import { Ionicons, FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { Card, Button, Icon } from "@rneui/themed";
import { color } from "@rneui/base/dist";
import FetchData from "../src/hook/FetchData";

function MainPage({ navigation }) {
  const CategoryItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={appStyles.CardContainer}>
        <View style={appStyles.CardImageContainer}>
          <Image
            style={appStyles.CardImage}
            source={{
              uri: item.imageUrl,
            }}
          />
        </View>

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
            <Text style={{ fontSize: 10 }}>(1)</Text>
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
            <Text style={{ fontSize: 10 }}>(2)</Text>
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
            <Text style={{ fontSize: 10 }}>(3)</Text>
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
            <Text style={{ fontSize: 10 }}>(4)</Text>
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
            <Text style={{ fontSize: 10 }}>(5)</Text>
          </View>
        ) : (
          ""
        )}
        <Text style={appStyles.CardContent2}>{item.brand}</Text>
        <Text numberOfLines={2} style={{ fontSize: 12, fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text style={appStyles.CardContent4}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );

  const { datas } = FetchData("http://192.168.1.200:5000/api/product");

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={appStyles.MainPageNavbar}>
        <Text
          style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
        ></Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            marginLeft: 20,
            color: "black",
          }}
        >
          Home
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{ marginRight: 5 }}
        >
          <Ionicons style={{ fontSize: 30 }} name="exit-outline" />
        </TouchableOpacity>
      </View>

      <View style={appStyles.MainPageImageBackgroundContainer}>
        <ImageBackground
          style={appStyles.MainPageImageBackground}
          source={(URL = "https://picsum.photos/375/500")}
        />

        <Text style={appStyles.MainPageImageBackgroundText1}>Fashion</Text>
        <Text style={appStyles.MainPageImageBackgroundText2}>Salse </Text>

        <TouchableOpacity style={appStyles.LoginButtonContainerMainPage}>
          <Text style={appStyles.LoginButtonText}>Check</Text>
        </TouchableOpacity>
      </View>

      <View style={appStyles.MainScrollContainer}>
        <ScrollView
          contentContainerStyle={appStyles.HomepageScrollLimiter}
          showsVerticalScrollIndicator={false}
        >
          <View style={appStyles.ContainerHasTitleAndScrollableCards}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={appStyles.ContainerHasTitle}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>
                  Sale Product
                </Text>
                <Text style={{ color: "grey", fontSize: 12 }}>
                  Super summer sale
                </Text>
              </View>

              <TouchableOpacity>
                <View style={appStyles.ContainerViewAll}>
                  <Text>View All</Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              data={datas}
              renderItem={({ item }) => (
                <CategoryItem item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              style={appStyles.CategoriesScroll}
            />
          </View>

          <View style={appStyles.ContainerHasTitleAndScrollableCards}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={appStyles.ContainerHasTitle}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>
                  New Product
                </Text>
                <Text style={{ color: "grey", fontSize: 12 }}>
                  Super summer sale
                </Text>
              </View>

              <TouchableOpacity>
                <View style={appStyles.ContainerViewAll}>
                  <Text>View All</Text>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              data={datas}
              renderItem={({ item }) => (
                <CategoryItem item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              style={appStyles.CategoriesScroll}
            />
          </View>

          <View style={appStyles.ContainerHasTitleAndScrollableCards}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={appStyles.ContainerHasTitle}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>
                  Similar Products
                </Text>
                <Text style={{ color: "grey", fontSize: 12 }}>
                  Super summer sale
                </Text>
              </View>

              <TouchableOpacity>
                <View style={appStyles.ContainerViewAll}>
                  <Text>View All</Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              data={datas}
              renderItem={({ item }) => (
                <CategoryItem item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              style={appStyles.CategoriesScroll}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

export default MainPage;
