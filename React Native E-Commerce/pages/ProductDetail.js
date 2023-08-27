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
  Modal,
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function ProductDetails({ navigation, route }) {
  var [like, setLike] = useState([]);
  var [size, setSize] = useState("");
  var [color, setColor] = useState("");
  var [text, setText] = useState("Size");
  var [textColor, setTextColor] = useState("Color");

  var { id } = route.params;

  var [handleDetailModalSize, setHandleDetailModalSize] = useState(false);

  var openModalSize = () => {
    setHandleDetailModalSize(true);
  };

  var closeModalSize = () => {
    setHandleDetailModalSize(false);
  };

  var [handleDetailModalColor, setHandleDetailModalColor] = useState(false);

  var openModalColor = () => {
    setHandleDetailModalColor(true);
  };

  var closeModalColor = () => {
    setHandleDetailModalColor(false);
  };

  var [favButton, setFavButton] = useState("heart-outline");
  var [favButtonColor, setFavButtonColor] = useState("grey");

  function handleFavButton() {
    setFavButton(favButton == "heart-outline" ? "heart" : "heart-outline");
  }

  function handleFavButtonColor() {
    setFavButtonColor(favButtonColor == "grey" ? "red" : "grey");
  }

  var handler = async () => {
    var response = await axios.get(
      "http://192.168.1.200:5000/api/product/getlikes/" + id
    );
    setLike(response.data);
  };
  const AddToCart = async () => {
    let userId = await AsyncStorage.getItem("id");
    console.log(userId);
    axios.post("http://192.168.1.200:5000/api/cart/addtocart", {
      userId: userId,
      productId: id,
      quantity: 1,
      color: color,
      size: size,
    });

    navigation.navigate("Cart");
  };
  var data = like;
  var { datas } = FetchData(
    "http://192.168.1.200:5000/api/product/product/" + id
  );
  var renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        id = null;
        datas = [];
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
        <Text numberOfLines={1} style={appStyles.CardContent4}>
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

  const AddToFavori = async () => {
    let userId = await AsyncStorage.getItem("id");
    axios.post("http://192.168.1.200:5000/api/favori/addfavori", {
      userId: userId,
      productId: id,
      quantity: 1,
    });
    navigation.navigate("Favorites");
  };

  useEffect(() => {
    handler();
  });
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
            Ürün Detayları
          </Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons style={{ fontSize: 30 }} name="share-social" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          <ScrollView
            horizontal={true}
            style={appStyles.ProductDetailImageScrollView}
          >
            <View>
              <Image
                style={appStyles.ProductDetailImage}
                source={(URL = datas.imageUrl)}
              />
            </View>

            <View>
              <Image
                style={appStyles.ProductDetailImage}
                source={(URL = datas.imageUrl2)}
              />
            </View>

            <View>
              <Image
                style={appStyles.ProductDetailImage}
                source={(URL = datas.imageUrl3)}
              />
            </View>

            <View>
              <Image
                style={appStyles.ProductDetailImage}
                source={(URL = datas.imageUrl)}
              />
            </View>
          </ScrollView>

          <View style={appStyles.ProductDetailSizeColorPicker}>
            <View>
              <TouchableOpacity
                onPress={openModalSize}
                style={appStyles.ProductSizePickerContainer}
              >
                <Text style={{ marginLeft: 5 }}>{text}</Text>
                <Ionicons
                  style={{ fontSize: 12, marginRight: 5 }}
                  name="chevron-down"
                />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={handleDetailModalSize}
              >
                {/* Add your modal content here */}
                {/* You can include a close button or some other mechanism to close the modal */}

                <View style={appStyles.ProductDetailsChooseSizeModal}>
                  <View
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={closeModalSize}
                      style={{ justifyContent: "flex-end" }}
                    >
                      <Ionicons style={{ fontSize: 40 }} name="close" />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Select Size
                    </Text>
                  </View>

                  <View style={appStyles.ProductDetailsChooseSizeInsideModal}>
                    <TouchableOpacity
                      onPress={() => {
                        setSize("XS");
                        closeModalSize();
                        setText("XS");
                      }}
                      style={
                        appStyles.ProductDetailsChooseSizeInsideModalButton
                      }
                    >
                      <Text fontSize="xs">XS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setSize("S");
                        closeModalSize();
                        setText("S");
                      }}
                      style={
                        appStyles.ProductDetailsChooseSizeInsideModalButton
                      }
                    >
                      <Text fontSize="xs">S</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setSize("M");
                        closeModalSize();
                        setText("M");
                      }}
                      style={
                        appStyles.ProductDetailsChooseSizeInsideModalButton
                      }
                    >
                      <Text fontSize="xs">M</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setSize("L");
                        closeModalSize();
                        setText("L");
                      }}
                      style={
                        appStyles.ProductDetailsChooseSizeInsideModalButton
                      }
                    >
                      <Text fontSize="xs">L</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setSize("XL");
                        closeModalSize();
                        setText("XL");
                      }}
                      style={
                        appStyles.ProductDetailsChooseSizeInsideModalButton
                      }
                    >
                      <Text fontSize="xs">XL</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={appStyles.ProductDetailsChooseSizeAddToCart}
                  >
                    <Text style={{ color: "white" }}>ADD TO CART</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <View>
              <TouchableOpacity
                onPress={openModalColor}
                style={appStyles.ProductSizePickerContainer}
              >
                <Text style={{ marginLeft: 5 }}>{textColor}</Text>
                <Ionicons
                  style={{ fontSize: 12, marginRight: 5 }}
                  name="chevron-down"
                />
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={handleDetailModalColor}
              >
                {/* Add your modal content here */}
                {/* You can include a close button or some other mechanism to close the modal */}

                <View style={appStyles.ProductDetailsChooseColorModal}>
                  <View
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={closeModalColor}
                      style={{ justifyContent: "flex-end" }}
                    >
                      <Ionicons style={{ fontSize: 40 }} name="close" />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Select Color
                    </Text>
                  </View>

                  <View style={appStyles.ProductDetailsChooseColorInsideModal}>
                    <TouchableOpacity
                      onPress={() => {
                        setColor("Red");
                        setTextColor("Red");
                        closeModalColor();
                      }}
                      style={[
                        appStyles.ProductDetailsChooseColorInsideModalButton,
                        { backgroundColor: "red" },
                      ]}
                    ></TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setColor("Black");
                        setTextColor("Black");
                        closeModalColor();
                      }}
                      style={[
                        appStyles.ProductDetailsChooseColorInsideModalButton,
                        { backgroundColor: "black" },
                      ]}
                    ></TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setColor("Blue");
                        setTextColor("Blue");
                        closeModalColor();
                      }}
                      style={[
                        appStyles.ProductDetailsChooseColorInsideModalButton,
                        { backgroundColor: "blue" },
                      ]}
                    ></TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setColor("Yellow");
                        setTextColor("Yellow");
                        closeModalColor();
                      }}
                      style={[
                        appStyles.ProductDetailsChooseColorInsideModalButton,
                        { backgroundColor: "yellow" },
                      ]}
                    ></TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        setColor("Green");
                        setTextColor("Green");
                        closeModalColor();
                      }}
                      style={[
                        appStyles.ProductDetailsChooseColorInsideModalButton,
                        { backgroundColor: "green" },
                      ]}
                    ></TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      setColor("White");
                      setTextColor("White");
                      closeModalColor();
                    }}
                    style={appStyles.ProductDetailsChooseSizeAddToCart}
                  >
                    <Text style={{ color: "white" }}>ADD TO CART</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

            <TouchableOpacity
              onPress={() => {
                AddToFavori();
                handleFavButton();
                handleFavButtonColor();
              }}
              style={[appStyles.ProductDetailFavoriteContainer]}
            >
              <Ionicons
                style={[
                  appStyles.ProductDetailFavoriteContainerButton,
                  { color: favButtonColor },
                ]}
                name={favButton}
              ></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={appStyles.ProductDetailsDescriptionMainContainer}>
            <View>
              <Text
                style={{ fontSize: 23, fontWeight: "bold", marginVertical: 1 }}
              >
                {datas.name}
              </Text>
              <Text style={{ fontSize: 14, marginVertical: 1, color: "grey" }}>
                {datas.brand}
              </Text>

              {datas.starNumber >= 0 && datas.starNumber < 20 ? (
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
              {datas.starNumber >= 20 && datas.starNumber < 40 ? (
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
              {datas.starNumber >= 40 && datas.starNumber < 60 ? (
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
              {datas.starNumber >= 60 && datas.starNumber < 80 ? (
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
              {datas.starNumber >= 80 ? (
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

            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {datas.price} $
              </Text>
            </View>
          </View>

          <View style={appStyles.ProductDetailMainDescription}>
            <Text numberOfLines={4} fontSize="xs">
              {" "}
              {datas.description}
            </Text>
          </View>

          <TouchableOpacity
            onPress={AddToCart}
            style={appStyles.ProductDetailsAddToCart}
          >
            <Text style={{ color: "white" }}>ADD TO CART</Text>
          </TouchableOpacity>

          <View style={appStyles.ProductDetailsSimilarItemsTextContainer}>
            <Text style={{ fontWeight: "bold" }}>You can also like this</Text>
            <Text style={{ color: "grey" }}>12 items</Text>
          </View>

          <View style={appStyles.FlatListLimiterProductDetail}>
            <FlatList
              horizontal={true}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default ProductDetails;
