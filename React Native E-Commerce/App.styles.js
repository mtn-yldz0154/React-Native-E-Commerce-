import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  // Renamed to appStyles

  MainBody: {
    backgroundColor: "#F9F9F9",
    width: "100%",
    height: 812,
    alignItems: "center",
  },

  NavbarContainer: {
    height: 140,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

  NavbarText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
  },

  TextInputContainer: {
    marginTop: 73,
    justifyContent: "center",
    alignItems: "center",
  },

  TextInputContainerForgotPassword: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  TextInputField: {
    width: "95%",
    height: 60,
    backgroundColor: "#FFFFFF",
    marginTop: 8,
  },

  ForgotPasswordTextIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    width: 350,
    height: 60,
  },

  LoginButtonContainer: {
    width: 368,
    height: 50,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 9,
    marginTop: 20,
  },

  LoginButtonContainerForgotPassword: {
    width: "100%",
    height: 50,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85,
  },

  LoginButtonText: {
    color: "#FFFFFF",
  },

  SocialAccountTextContainerSignUp: {
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  SocialAccountTextContainerLoginScreen: {
    marginTop: 180,
    justifyContent: "center",
    alignItems: "center",
  },

  SocialAccountButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 24,
    marginTop: 20,
  },

  SocialAccountButtons: {
    width: 92,
    height: 50,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  LogoImages: {
    width: 30,
    height: 30,
    backgroundColor: "#F9F9F9",
  },

  ForgotPasswordTextContainer: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  MainPageImageBackgroundContainer: {
    width: "100%",
    height: 200,
  },

  MainPageImageBackground: {
    width: "100%",
    height: 200,
  },

  MainPageImageBackgroundText1: {
    position: "absolute",
    top: 20,

    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    color: "white",
  },

  MainPageImageBackgroundText2: {
    position: "absolute",
    top: 70,

    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 30,
    color: "white",
  },

  LoginButtonContainerMainPage: {
    position: "absolute",
    width: 165,
    height: 50,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    top: 135,
    marginLeft: 20,
  },

  MainPageNavbar: {
    width: "100%",
    height: 50,
    backgroundColor: "#FAFAFA",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  HomepageScrollLimiter: {
    alignItems: "center",
    justifyContent: "center",
  },

  MainPageScrollView: {
    width: "95%",
    height: "65%",
    alignSelf: "center",
  },

  ContainerHasTitleAndScrollableCards: {
    width: "95%",
    backgroundColor: "#F9F9F9",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 15,
    height: 350,
  },

  ContainerHasTitle: {
    marginLeft: 15,
  },

  ContainerViewAll: {
    margin: 15,
    marginRight: 20,
  },

  CardContainer: {
    width: 150,
    height: 300,
    margin: 15,
  },

  CategoryCardHeartButtonContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    top: 150,
    left: 120,
  },

  CategoryCardHeartButton: {
    fontSize: 20,
  },

  CategoryCardSaleTextContainer: {
    width: 45,
    height: 25,
    borderRadius: 100,
    position: "absolute",
    backgroundColor: "rgb(219,48,34)",
    justifyContent: "center",
    alignItems: "center",
    top: 7,
    left: 7,
  },

  CategoryCardSaleText: {
    fontSize: 13,
    color: "white",
  },

  CardImageContainer: {
    height: 170,
    borderRadius: 10,
  },

  CardImage: {
    height: 170,
    width: "100%",
    borderRadius: 10,
    padding: 10,
  },

  StarsMainPage: {
    flexDirection: "row",
    padding: 3,
    marginTop: 3,
  },

  CardContent1: {
    height: 20,
    padding: 10,
  },

  CardContent2: {
    height: 20,
    marginTop: 2,
    fontSize: 12,
  },

  CardContent3: {
    fontSize: 18,
    fontWeight: "bold",
  },

  CardContent4: {
    color: "red",
    marginTop: 1,
  },

  MenWomenSelector: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  ViewAllItemsButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  ViewAllItemsButton: {
    borderRadius: 25,
    backgroundColor: "#DB3022",
    width: "90%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  CategoryTextContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 10,
    marginHorizontal: 20,
  },

  AllCategoriesContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    marginHorizontal: 20,
    flex: 1,
  },

  SingleCategoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 7,
    height: 100,
    borderWidth: 1,
    borderColor: "lightgrey",
    flexDirection: "row",
  },

  CategoryButtonText: {
    height: 100,
    width: "50%",

    justifyContent: "center",
    alignItems: "center",
  },

  CategoryButtonImageContainer: {
    height: 100,
    width: "50%",
  },

  CategoryButtonImage: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "lightgrey",
  },

  ShopScreenMainScrollLimiter: {
    width: "95%",
    height: "65%",
    alignSelf: "center",
  },

  FilterPricePickerContainer: {
    height: 35,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },

  CategoriesHorizontalScroll: {
    width: "100%",
    height: 45,
    marginTop: 15,
  },

  CategoriesHorizontalScrollButton: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 30,
    width: 100,
    height: 30,
    backgroundColor: "black",
    marginHorizontal: 5,
  },

  CategoriesHorizontalScrollButtonText: {
    color: "white",
  },

  FlatListLimiterShirts: {
    height: "78%",
    flex: 1,
  },

  FlatListLimiterProductDetail: {
    height: "34%",
  },

  ProductDetailImageScrollView: {
    height: 400,
    width: "100%",
  },

  ProductDetailImage: {
    height: "100%",
    width: 275,
    marginHorizontal: 3,
  },

  ProductDetailSizeColorPicker: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
  },

  ProductSizePickerContainer: {
    width: 140,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },

  ProductDetailFavoriteContainer: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },

  ProductDetailFavoriteContainerButton: {
    fontSize: 19,
  },

  ProductDetailsChooseSizeModal: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: "#FAFAFA",
    padding: 20,
    height: 400,
    marginTop: "100%",
  },

  ProductDetailsChooseColorModal: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    backgroundColor: "#FAFAFA",
    padding: 20,
    height: 350,
    marginTop: "115%",
  },

  ProductDetailsChooseSizeInsideModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },

  ProductDetailsChooseSizeInsideModalButton: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  ProductDetailsChooseSizeAddToCart: {
    width: "90%",
    heigth: 75,
    paddingVertical: 17,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },

  ProductDetailsChooseColorInsideModalButton: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  ProductDetailsChooseColorInsideModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
  },

  MyBagHeaderContainer: {
    width: "100%",
    height: 90,
  },

  BagScreenSearchButtonContainer: {
    width: "100%",
    height: 60,
    marginVertical: 5,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  BagScreenMyBagTextContainer: {
    width: "100%",
    height: 80,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },

  MyBagMainScrollViewProducts: {
    width: "90%",
    height: 370,
    borderRadius: 20,
  },

  ProductDetailsDescriptionMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },

  ProductDetailMainDescription: {
    width: "90%",
    marginVertical: 5,
  },

  ProductDetailsAddToCart: {
    width: "90%",
    heigth: 75,
    paddingVertical: 17,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  ProductDetailsSimilarItemsTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 5,
    height: 50,
  },

  EachBagItemContainer: {
    width: "100%",
    height: 165,
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },

  MyBagMainScrollViewProductsScrollViewContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },

  BagImageContainer: {
    width: 105,
    height: 152,
    borderRadius: 10,
  },

  BagImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  BagMinusPlusButton: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginHorizontal: 5,
    marginTop: 10,
  },

  PromoCodeContainer: {
    height: 42,
    width: "90%",
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 15,
    borderRadius: 10,
    padding: 5,
  },

  PromoCodeSubmitButton: {
    position: "absolute",
    width: 36,
    height: 36,
    backgroundColor: "black",
    left: "92%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  TotalAmountContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginVertical: "3%",
  },

  CartCheckoutButton: {
    width: "90%",
    height: 55,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
    alignSelf: "center",
  },

  FavoritesEachItemContainer: {
    width: "90%",
    height: 105,
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },

  FavoritesCloseButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "90%",
    top: 5,
    borderRadius: 50,
  },

  FavoritesCartButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "90%",
    top: "70%",
    borderRadius: 50,
  },

  CheckoutShippingAddressContainer: {
    width: "90%",
    height: 150,
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: "5%",
  },

  CheckoutShippingAddressContainerInsideMain: {
    backgroundColor: "rgb(255,255,255)",
    height: "80%",
    marginTop: "5%",
    justifyContent: "center",
    borderRadius: 10,
  },

  CheckoutPayment: {
    backgroundColor: "rgb(255,255,255)",
    height: 150,
    marginTop: "12%",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 10,
  },

  DeliveryMethod: {
    backgroundColor: "rgb(255,255,255)",
    height: 150,
    marginTop: "10%",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    overflow: "hidden",
    borderRadius: 10,
  },

  CheckoutAmountContainer: {
    width: "90%",
    alignSelf: "center",
  },

  CheckoutSubmitOrderButton: {
    width: "90%",
    heigth: 75,
    paddingVertical: 17,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    marginVertical: "2%",
  },

  CheckoutAmountTexts: {
    marginVertical: "2%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  SuccessScreenContinueShoppingButton: {
    width: "70%",
    heigth: 75,
    paddingVertical: 17,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    marginVertical: "2%",
  },

  AddressEditTextInput: {
    width: "90%",
    height: 60,
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    alignSelf: "center",
  },

  AddAddressButton: {
    width: "90%",
    heigth: 75,
    paddingVertical: 17,
    backgroundColor: "#DB3022",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    marginVertical: "2%",
  },

  ProfileImageNameMailContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    padding: 10,
  },

  ProfileOptionsContainer: {
    width: "90%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 6,
  },

  OrderStateButton: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 30,
    width: 100,
    height: 30,
    backgroundColor: "black",
    marginHorizontal: 5,
  },

  OrderMainContainer: {
    width: "90%",
    height: 175,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginTop: 20,
  },

  OrderDetailMainContainer: {
    width: "90%",
    height: 135,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 10,
    flexDirection: "row",
  },
});
